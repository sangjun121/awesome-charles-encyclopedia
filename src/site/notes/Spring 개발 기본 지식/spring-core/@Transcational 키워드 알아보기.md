---
{"dg-publish":true,"permalink":"/spring/spring-core/transcational/","dg-note-properties":{"분류":"우테코"}}
---

### 0. 도입
@Transtional이 제공해주는 기능이 무엇인지, 왜 필요한지, AOP를 어떻게 쓰고 있는지 내부 구현을 살펴보자. @Transtional이 위치하는 라이브러리 위치 찾아보기

`@Transactional`은 트랜잭션 처리를 선언적으로 관리하기 위한 어노테이션으로, 일반적으로는 Spring Framework에서 제공하는 `org.springframework.transaction.annotation.Transactional`을 사용한다. 이는 **[[Spring 개발 기본 지식/spring-aop/spring-aop란\|spring-aop란]]으로 동작하며 다양한 옵션을 통해 트랜잭션의 전파, 격리 수준, 롤백 조건 등을 세밀하게 제어할 수 있어 실무에서 널리 활용된다.

트랜젝션은 단순히 원자성을 보장하지, 동시성 자체를 보장하지는 않는다. 즉, 해당 트렌젝션에서 조회한 특정 객체에 대해, 외부 트랜젝션에서 같은 시점에 삭제나,수정을 진행하는 것을 막아주지는 않는다는 의미이다.