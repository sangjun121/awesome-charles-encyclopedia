---
{"dg-publish":true,"permalink":"/spring//mock-mvc/","dg-note-properties":{"분류":"우테코"}}
---

### 정의
MockMvc는 실제 서버를 띄우지 않고도, HTTP 요청/응답 흐름을 테스트 안에서 흉내내는 도구

```java
mockMvc.perform(get("/test/business"))
```

브라우저나 Postman으로 GET /test/business를 요청한 것처럼 동작한다. **하지만 톰켓을 띄우거나 포트를 열지 않는다.** -> 따라서 빠르고 가볍게 테스트 대상만 정확히 볼 수 있다.



### 구현 예시
```java
mockMvc = MockMvcBuilders.standaloneSetup(new TestController())
        .setControllerAdvice(new GlobalExceptionHandler())
        .build();

```

### StandAlone 이란 무엇인가?