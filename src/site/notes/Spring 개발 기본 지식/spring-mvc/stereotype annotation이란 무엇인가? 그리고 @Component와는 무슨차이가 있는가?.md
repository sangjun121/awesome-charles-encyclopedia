---
{"dg-publish":true,"permalink":"/spring/spring-mvc/stereotype-annotation-component/","dg-note-properties":{"분류":"우테코"}}
---


```java
`@Repository` 역시 내부적으로는 `@Component`를 포함하고 있기 때문에, 결국 Spring Bean으로 등록된다는 점에서는 동일하다고 이해했습니다.

다만 `@Repository`는 단순 Bean 등록 이상의 의미를 가진 stereotype annotation이라고 이해했습니다. 특히 “이 객체는 데이터 접근 계층(Repository Layer)”이라는 역할을 명시적으로 표현해줄 수 있다는 점이 가장 큰 차이라고 생각했습니다.

또한 Spring에서는 `@Repository`가 붙은 Bean에 대해 PersistenceExceptionTranslationPostProcessor를 통해 JDBC나 JPA에서 발생하는 예외를 Spring의 DataAccessException 계층으로 변환해주는 기능도 제공한다고 학습했습니다.

즉, 단순히 Bean 등록만 필요하다면 `@Component`도 가능하지만, 현재 클래스처럼 DB 접근 역할을 가지는 객체라면 의미 전달과 예외 변환 측면에서 `@Repository`를 사용하는 것이 더 적절하다고 판단했습니다!
```