---
{"dg-publish":true,"permalink":"/spring//assert-j/assert-j-soft-assertions-assert-softly/","dg-note-properties":{"분류":"우테코","status":"완료","type":"개념","topic":"knowledge-management"}}
---


### Outbox
- 한 테스트 내에서 여러 개의 속성을 함께 검증하는 경우 자주 사용한다. 실무에서는 특히 API 테스트에서 많이 사용하며, DTO응답이나 여러 필드를 검증하는 경우 많이 사용한다. 

### 개념
`assertSoftly`는 여러 개의 검증(assert)을 **한 번에 모아서 수행**하고, 실패한 검증들을 마지막에 한꺼번에 보여주는 AssertJ 기능.


### 일반 assert의 문제
- 일반 assert는 하나가 실패하면 바로 테스트가 종료된다.
 ```java
 @Test
void test() {
    assertThat(user.getName()).isEqualTo("charles");
    assertThat(user.getAge()).isEqualTo(20);
    assertThat(user.getEmail()).contains("@");
}
 ```
 위의 예시 코드에서 첫번째 `assertThat`이 실패하는 경우 아래 두줄의 코드는 실행되지 않고, 테스트가 종료된다. 

### assertSoftly로 해결
이때 `assertSoftly`를 사용하면, 여러개의 검증을 한 번에 모아서 실행한뒤 실패한 검증 결과를 한번에 제공한다.
```java
assertSoftly(softly -> {
    softly.assertThat(response.name()).isEqualTo("charles");
    softly.assertThat(response.age()).isEqualTo(20);
    softly.assertThat(response.email()).contains("@");
    softly.assertThat(response.role()).isEqualTo("ADMIN");
});
```

**테스트 결과**
```java
Multiple Failures (2 failures)

1) name assertion failed
2) age assertion failed
```

### 사용 케이스
- 레벨2 방탈출 예약 프로그램에서, 예약 정보의 필드가 올바른지 검증하는 순수 도메인 단위테스트에서 진행한 테스트 코드이다.
```java
@Test  
@DisplayName("정상 정보로 Reservation을 생성한다")  
void create() {  
    final Reservation r = new Reservation(RESERVER, DATE, TIME, THEME);  
  
    assertSoftly(softly -> {  
        softly.assertThat(r.reserver()).isEqualTo(RESERVER);  
        softly.assertThat(r.date()).isEqualTo(DATE);  
        softly.assertThat(r.time()).isEqualTo(TIME);  
        softly.assertThat(r.theme()).isEqualTo(THEME);  
    });}
```