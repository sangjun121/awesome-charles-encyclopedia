const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const NOTES_DIR = path.join(process.cwd(), "src/site/notes");
let noteOrderByPath;

function normalizePermalink(permalink) {
  if (!permalink || typeof permalink !== "string") return undefined;

  const normalized = `/${permalink}/`
    .replace(/\/+/g, "/")
    .replace(/\/$/, "/");

  return normalized === "//" ? "/" : normalized;
}

function segmentToSlug(segment) {
  const slug = segment
    .normalize("NFC")
    .trim()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();

  return slug || "untitled";
}

function readMarkdownFiles(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return readMarkdownFiles(entryPath);
    if (entry.isFile() && /\.(md|markdown)$/i.test(entry.name)) return [entryPath];
    return [];
  });
}

function normalizeNotePath(inputPath) {
  return inputPath
    .replace(/\\/g, "/")
    .replace(/^.*?src\/site\/notes\//, "")
    .replace(/\.(md|markdown)$/i, "")
    .normalize("NFC");
}

function getGitCreatedAt(filePath) {
  try {
    const output = execFileSync(
      "git",
      ["log", "--diff-filter=A", "--format=%at", "--", filePath],
      { encoding: "utf8" }
    ).trim();

    return Number(output.split("\n").at(-1)) || Number.MAX_SAFE_INTEGER;
  } catch {
    return Number.MAX_SAFE_INTEGER;
  }
}

function getNoteOrderByPath() {
  if (noteOrderByPath) return noteOrderByPath;

  const notes = readMarkdownFiles(NOTES_DIR)
    .map((filePath) => ({
      filePath,
      notePath: normalizeNotePath(filePath),
      createdAt: getGitCreatedAt(filePath),
    }))
    .sort((a, b) => a.createdAt - b.createdAt || a.notePath.localeCompare(b.notePath));

  const padLength = Math.max(3, String(notes.length).length);
  noteOrderByPath = new Map(
    notes.map((note, index) => [
      note.notePath,
      String(index + 1).padStart(padLength, "0"),
    ])
  );

  return noteOrderByPath;
}

function filePathToPermalink(inputPath) {
  if (!inputPath) return undefined;

  const withoutNotesPrefix = normalizeNotePath(inputPath);

  const segments = withoutNotesPrefix
    .split("/")
    .map(segmentToSlug)
    .filter(Boolean);

  if (segments.length) {
    const order = getNoteOrderByPath().get(withoutNotesPrefix) || "000";
    segments[segments.length - 1] = `${segments[segments.length - 1]}-${order}`;
  }

  return normalizePermalink(segments.join("/"));
}

function hasGardenEntryTag(tags) {
  return Array.isArray(tags) && tags.includes("gardenEntry");
}

function resolveNotePermalink({ inputPath, tags }) {
  if (hasGardenEntryTag(tags)) return "/";
  return filePathToPermalink(inputPath);
}

module.exports = {
  filePathToPermalink,
  normalizePermalink,
  resolveNotePermalink,
};
