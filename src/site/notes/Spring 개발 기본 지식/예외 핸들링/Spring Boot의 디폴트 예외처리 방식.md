---
{"dg-publish":true,"permalink":"/spring//spring-boot/","dg-note-properties":{"분류":"우테코"}}
---

### 기본 예외 처리 방식
Spring은 예외처리를 위한 `BasicErrorController`를 구현해두었고, Spring Boot는 예외가 발생한다면 기본적으로 /error로 예외 요청을 다시 전달하도록 WAS 설정을 해두었다.

따라서, **별도의 설정이 없다면 예외 발생시에 `BasicErrorController`로 에러 처리 요청이 전달된다.**
(이는 Spring Boot의 [[Spring 개발 기본 지식/spring-boot/WebMvcAutoConfiguration\|WebMvcAutoConfiguration]]를 통해 자동 설정되는 WAS 설정이다.)

#### 래퍼런스
https://mangkyu.tistory.com/204