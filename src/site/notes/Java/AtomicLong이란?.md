---
{"dg-publish":true,"permalink":"/java/atomic-long/","dg-note-properties":{"분류":"우테코"}}
---

AtomicLong은 **멀티스레드 환경에서 발생할 수 있는 경쟁 조건(race-condition)을 방지하기 위해 설계된 클래스**로, long 타입의 값을 원자적으로 갱신할 수 있도록 한다. 내부적으로 [[Java/CAS(Compare-And-Swap) 연산\|CAS(Compare-And-Swap) 연산]]을 사용하여 락 없이도 thread-safe한 연산을 보장하며, 주로 카운터나 통계 집계와 같이 단순한 값 변경이 필요한 상황에서 활용된다.