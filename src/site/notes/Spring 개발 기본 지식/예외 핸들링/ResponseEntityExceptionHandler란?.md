---
{"dg-publish":true,"permalink":"/spring//response-entity-exception-handler/","dg-note-properties":{"분류":"우테코"}}
---

`ResponseEntityExceptionHandler`는 Spring MVC가 제공하는 기본 전역 예외 처리용 베이스 클래스로, 스프링에서 발생하는 기본적인 예외들을 처리하는 @ExceptionHandler가 모여있는 클래스이다.

따라서 @ControllerAdvice 클래스를 만들때 기본적으로 상속받아 사용한다. (스프링 기본 예외들까지 모두 @ExceptionHandler로 구현하기 힘들기 때문) 

#### 구현체 코드
```java
public abstract class ResponseEntityExceptionHandler {
    ...

    protected ResponseEntity<Object> handleExceptionInternal(
        Exception ex, @Nullable Object body, HttpHeaders headers, HttpStatus status, WebRequest request) {
            
        ...
    }
}
```
이때 주의할 점은 handleExceptionInternal 메서드는 기본적으로 에러 메시지를 반환하지 않기 때문에, @ControllerAdvice 클래스에서 handleExceptionInternal를 재정의해 줄 필요가 있다.