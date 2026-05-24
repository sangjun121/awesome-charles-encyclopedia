---
{"dg-publish":true,"permalink":"/spring/spring-core/transactional/","dg-note-properties":{"분류":"우테코"}}
---


### 도입
`@Transactional(readOnly = true)`는 이 메서드는 데이터를 변경하지 않는다는 것을 표현하고 싶을 때 자주 사용한다. 물론 해당 readonly = true가 컴파일 수준에서 객체 수정을 막아주는 것은 아니다.


| 상황           | 사용               |
| ------------ | ---------------- |
| 조회 API       | readOnly=true    |
| 생성/수정/삭제     | 일반 Transactional |
| 배치 write     | 일반 Transactional |
| QueryService | readOnly=true    |

사실  리포지토리 구현이 JDBC인지 JPA인지에 따라 readOnly의 실효성과 delete 안정성 판단이 달라진다. 

내부 self-invocation 때문에 프록시가 우회되는 패턴에 대한 학습 필요
- 같은 객체 내부에서 자기 메서드를 직접 호출하면, Spring Proxy를 통과하지 않아서 `@Transactional` 같은 AOP 기능이 적용되지 않을 수 있다.