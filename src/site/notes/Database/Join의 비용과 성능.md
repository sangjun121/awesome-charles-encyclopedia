---
{"dg-publish":true,"permalink":"/database/join/","dg-note-properties":{"분류":"우테코"}}
---

### 도입
- JOIN은 읽기(Read)를 효율적으로 만들 수 있으나, JOIN도 결국 DB 연산이라 비용이 있다.
- 결국 여러번 Select를 날릴 것이냐, 아니면 JOIN으로 한번에 불러올 것이냐?
- 데이터의 크기와 DB의 사양, join 연산의 부하를 EXPLAIN 을 통해 사전에 측정하고, 해당 데이터의 형질이 쓰기 부하가 많지 않다면 join을 선택할 것 같습니다.
- 조회 요구사항에 맞는 데이터 접근 전략을 선택해야 한다. 