---
{"dg-publish":true,"permalink":"/spring//spring/","dg-note-properties":{"분류":"우테코"}}
---

### HandlerExceptionResolver (예외처리 전략 인터페이스) 구조도 
![Pasted image 20260512155017.png](/img/user/Attached%20file/Pasted%20image%2020260512155017.png)
HandlerExceptionResolver 인터페이스 (예외 처리 전략를 추상화 - 전략 패턴 적용)
-> 발생한 예외를 잡고 Http 상태나 응답 메세지 등을 설정하는 추상체

해당 전략체 덕분에, 예외 발생시 WAS까지 다시 에러가 전파되지 않는다. 예외가 던져지면, 디스패처 서블릿까지 전파되며, 해당 서블릿에서 적용가능한 구현체를 찾아 예외를 처리한다. HandlerExceptionResolver의 구현체들은 기본적으로 bean으로 등록되어 관리된다. 구현체들의 우선순위는 다음과 같다.
1. DefaultErrorAttributes: 에러 속성을 저장하며 직접 예외를 처리하지는 않는다.
2. ExceptionHandlerExceptionResolver: 에러 응답을 위한 Controller나 ControllerAdvice에 있는 ExceptionHandler를 처리함
3. ResponseStatusExceptionResolver: Http 상태 코드를 지정하는 @ResponseStatus 또는 ResponseStatusException를 처리함
4. DefaultHandlerExceptionResolver:  스프링 내부의 기본 예외들을 처리한다.

- 기본적으로 resolveException의 인자로 받는 `Object handler`는 예외가 발생한 컨트롤러 객체이다.
- DefaultErrorAttributes는 직접 예외를 처리하지 않고, 속성만 관리하기 때문에 예외처리 구현체는 아니다. 따라서 직접 예외를 처리하는 3가지 ExceptionRsesolver들은 HandlerExceptionResolverComposite로 모아서 관리한다. 즉 컴포지트 패턴을 적용하여 실제 예외 처리 구현체들을 따로 관리한다.

### 예외처리기(ExceptionResolver)를 트리거 하는 방법
스프링에서는 아래 도구들로 ExceptionResolver를 동작시켜 예외처리를 할 수 있다. 각 도구에 대해 알아보자.

- @ResponseStatus (예외 클래스에 일반적으로 붙여 상태코드 변경 -> 다만 메시지를 커스텀해주기 어려움)
- ResponseStatusException (unchecked Exception 상속) (예외 발생지점에 해당 예외를 던저준다면, **ResponseStatusExceptionResolver가** 예외를 처리해줌, 다만, 발생지점마다 찾아서 예외를 던져줘야 하는 문제)
- @ExceptionHandler (**ExceptionHandlerExceptionResolver가** 처리해줌)
	- 컨트롤러의 메서드에 붙인다.
	- @ControllerAdvice나 @RestControllerAdvice가 있는 클래스의 메소드에 붙인다.

- ControllerAdvice, RestControllerAdvice





#### 래퍼런스
https://mangkyu.tistory.com/204