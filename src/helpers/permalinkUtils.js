const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const slugify = require("@sindresorhus/slugify");

const NOTES_DIR = path.join(process.cwd(), "src/site/notes");

function normalizePermalink(permalink) {
  if (!permalink || typeof permalink !== "string") return undefined;

  const normalized = `/${permalink}/`
    .replace(/\/+/g, "/")
    .replace(/\/$/, "/");

  return normalized === "//" ? "/" : normalized;
}

function segmentToSlug(segment) {
  const slug = slugify(segment);
  if (slug) return slug;

  return segment
    .normalize("NFC")
    .trim()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
}

function filePathToPermalink(inputPath) {
  if (!inputPath) return undefined;

  const withoutNotesPrefix = inputPath
    .replace(/\\/g, "/")
    .replace(/^.*?src\/site\/notes\//, "")
    .replace(/\.(md|markdown)$/i, "");

  const segments = withoutNotesPrefix
    .split("/")
    .map(segmentToSlug)
    .filter(Boolean);

  return normalizePermalink(segments.join("/"));
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

function findDuplicateFrontmatterPermalinks() {
  const permalinkCounts = new Map();

  for (const filePath of readMarkdownFiles(NOTES_DIR)) {
    const contents = fs.readFileSync(filePath, "utf8");
    const permalink = normalizePermalink(matter(contents).data.permalink);
    if (!permalink) continue;
    permalinkCounts.set(permalink, (permalinkCounts.get(permalink) || 0) + 1);
  }

  return new Set(
    [...permalinkCounts.entries()]
      .filter(([, count]) => count > 1)
      .map(([permalink]) => permalink)
  );
}

const duplicateFrontmatterPermalinks = findDuplicateFrontmatterPermalinks();

function hasGardenEntryTag(tags) {
  return Array.isArray(tags) && tags.includes("gardenEntry");
}

function resolveNotePermalink({ permalink, inputPath, tags }) {
  if (hasGardenEntryTag(tags)) return "/";

  const normalizedPermalink = normalizePermalink(permalink);
  if (
    normalizedPermalink &&
    !duplicateFrontmatterPermalinks.has(normalizedPermalink)
  ) {
    return normalizedPermalink;
  }

  return filePathToPermalink(inputPath) || normalizedPermalink || undefined;
}

module.exports = {
  filePathToPermalink,
  normalizePermalink,
  resolveNotePermalink,
};
