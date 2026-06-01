---
{"dg-publish":true,"permalink":"/spring/spring-core/transactional/","dg-note-properties":{"분류":"우테코"}}
---

### 주노의 피드백
> 지금 클래스 레벨에는 `@Transactional(readOnly = true)`, 메서드 레벨에는 `@Transactional` 을 설정해주셨네요!  두 어노테이션이 같이 있을 때 실제로 `save()`를 호출하면 메소드에 붙어있는 Transactional 이 우선시 된다는 점은 인지하고 계신 것 같은데요,
> 
> 	- 이 결정이 어디서(어떤 빈/어떤 프록시에서) 이루어지는지
> 	- `@Transactional`이 같은 클래스 내부 메서드 호출(self-invocation)에서는 왜 안 먹는지
>
> 위 두가지 질문에 대해 답변해보시면 좋을 것 같습니다 :)


### 1. 적용 레벨의 우선순위는 어디서 결정되는가?
기본적
### 2.  `@Transactional`이 같은 클래스 내부 메서드 호출(self-invocation)에서는 왜 안 먹는가?