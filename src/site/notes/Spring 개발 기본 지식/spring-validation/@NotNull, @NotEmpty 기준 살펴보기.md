---
{"dg-publish":true,"permalink":"/spring/spring-validation/not-null-not-empty/","dg-note-properties":{"status":"작성중","분류":"우테코"}}
---

### 0. 도입
일반적으로 @NotNull, @NotEmpty은 특정 필드의 검증을 진행할 때 사용한다. 우선 어떻게 사용하는지 알아보고 언제 사용하고 타입 별로 어떤 어노테이션 체크가 필요한지 검증하자.

**해당 어노테이션 라이브러리**: spring-boot-starter-validation