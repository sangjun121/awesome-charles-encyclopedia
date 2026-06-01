---
{"dg-publish":true,"permalink":"/spring//mockito-bean/","dg-note-properties":{"status":"작성중","분류":"우테코"}}
---


@MockitoBean(enforceOverride = true)  
Clock clock;

해당 Mock객체를 테스트 클래스마다 설정해줘도 테스트 격리 측면에서 문제가 없는가?
- 공식 문서 기준으로 기본 reset 모드는 AFTER라서 **각 테스트 메서드가 끝날 때 mock이 자동 초기화**됩니다.


```java
@MockitoBean(enforceOverride = true)
Clock clock;

@BeforeEach
void setUp() {
    given(clock.getZone()).willReturn(ZoneId.of("Asia/Seoul"));
    given(clock.instant()).willReturn(Instant.parse("2026-05-01T00:00:00Z"));
}
```
각 테스트는 시작할 때 자기 clock 값을 다시 심고, 끝나면 mock 상태가 리셋된다.

#### 다만 주의할 점,
스프링 테스트는 ApplicationContext를 캐시해서 재사용할 수 있습니다. 공식 문서에도 **bean override(@MockitoBean)가 context cache key에 포함**된다고 나온다. 그런데도 보통 괜찮은 이유는 mock이 테스트 메서드마다 reset되고 각 클래스에서 다시 stubbing하기 때문이다.

즉 **컨텍스트 재사용 자체는 문제 아님**이고, 문제가 되는 건 **공유된 mock 상태를 병렬로 동시에 건드릴 때**이다. 

**병렬 테스트 실행 시에는 위험해질 수 있다.** 예를 들어 두 테스트 클래스가 같은 cached context를 공유하고, 같은 Clock mock을 동시에 다른 값으로 stubbing하면 간섭할 수 있습니다.
