---
{"dg-publish":true,"permalink":"/spring/spring-validation/validated-valid/","dg-note-properties":{"분류":"우테코"}}
---

##### 작성완료 여부
26.05.03
### 도입
@Valid와 @Validated는 모두 객체 검증을 위해 사용되지만, 역할과 사용 범위에 차이가 있다.
주의할 점은 두가지 어노테이션이 다른 패키지에서 제공하는 어노테이션이라는 점인데, @Valid는 Java 표준에서 제공하고, @Validated는 spring에서 제공한다. 스프링은 어떤 문제를 해결하기 위해, @Valid를 넘어  @Validated를 새롭게 추가한 것일까?



