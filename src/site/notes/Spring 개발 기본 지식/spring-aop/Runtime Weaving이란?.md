---
{"dg-publish":true,"permalink":"/spring/spring-aop/runtime-weaving/","dg-note-properties":{"분류":"우테코"}}
---

### 정의
**프로그램이 실행되는 시점(Runtime)에, 기존 객체에 부가 기능(AOP 관심사)을 끼워 넣어서 새로운 Proxy 객체를 만드는 과정**입니다.

일반적으로 **Proxy**는 실제 Target의 기능을 대신 수행하면서, 기능을 확장하거나 추가하는 실제 객체를 의미한다.

즉, Weaving은 target 객체를 새로운 proxied 객체로 적용시키는 과정이다. 

Spring AOP의 핵심은 “실행 중(Runtime)에 프록시 객체를 생성하여 관심사를 주입한다”는 점이다. 즉, 기존 객체를 직접 수정하는 것이 아니라, 런타임에 새로운 Proxy 객체를 만들어 부가 기능(로그, 트랜잭션, 보안 등)을 연결한다. 이러한 과정을 Weaving이라 하며, Spring은 이를 Runtime Weaving 방식으로 수행한다.

Spring AOP에서는 Runtime Weaving을 프록시 객체를 이용하여 구현하며, 2가지 방법으로 구사하고 있다.
1. JDK Dynamic Proxy
2. CGlib Proxy