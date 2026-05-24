---
{"dg-publish":true,"permalink":"/spring//spring-error-response/","dg-note-properties":{"분류":"우테코"}}
---


- `ProblemDetail` — representation for an RFC 9457 problem detail; a simple container for both standard fields defined in the spec, and for non-standard ones.
    
- `ErrorResponse` — contract to expose HTTP error response details including HTTP status, response headers, and a body in the format of RFC 9457; this allows exceptions to encapsulate and expose the details of how they map to an HTTP response. All Spring MVC exceptions implement this.
    
- `ErrorResponseException` — basic `ErrorResponse` implementation that others can use as a convenient base class.
    
- `ResponseEntityExceptionHandler` — convenient base class for an [@ControllerAdvice](https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-advice.html) that handles all Spring MVC exceptions, and any `ErrorResponseException`, and renders an error response with a body.


### 여기서 `ErrorResponseException`가 `ErrorResponse`의 구현체인 이유? 설계원칙 확인하기
- 웹 계층의 예외는 곧 응답 모델이다라는 철학에 맞춰 ErrorResponse를 단순 예외 정보를 담는 객체가 아닌, HTTP 에러 응답 가능한 예외로 설계한 것이다. 즉 여기서 ErrorResponse는 DTO가 아니다. reponse를 명사가 아닌 응답하는 행위로 해석하자. 그러면 ErrorResponseException도 "에러 응답을 제공하는 예외"로 해석된다.

- ErrorResponse = HTTP 에러 응답으로 렌더링 가능한 계약
- ErrorResponseException = 해당 계약을 구현한 예외