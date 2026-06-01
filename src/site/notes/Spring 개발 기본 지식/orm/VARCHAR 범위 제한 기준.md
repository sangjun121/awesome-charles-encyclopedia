---
{"dg-publish":true,"permalink":"/spring/orm/varchar/","dg-note-properties":{"분류":"우테코"}}
---

### 0. 도입
도메인에 해당하는 테이블을 설계할 때, DB 컬럼 타입의 범위를 지정해줘야 한다. **이때 어떤 기준으로 범위를 지정해줘야 할지** 고민해보았다. 해당 포스트에서는 VARCHAR만 다룬다. 다른 타입도 이와 동일한 기준으로 혹은 유사한 프로세스로 지정해 줄 수 있을 것이다.

### 0.1 래퍼런스
[MySQL에서 VARCHAR와 TEXT의 차이](https://dkswnkk.tistory.com/714)

# 1.  VARCHAR와 TEXT 의 선택 기준
우선 VARCHAR의 범위를 지정해주기 전에, 문자열을 저장할 때 언제 VARCHAR를 TEXT 대신 사용하는 것이 적절할지 알아보자.

## 1.1 저장 범위 비교
VARCHAR는 최대 


