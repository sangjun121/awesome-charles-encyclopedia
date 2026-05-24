---
{"dg-publish":true,"permalink":"/spring/spring-aop/c-glib-vs-dynamic-proxy/","dg-note-properties":{"분류":"우테코"}}
---

### 차이점 간략 정리
Dynamic Proxy와 CGlib 간략 비교


|               | Dynamic                    | CGlib  |
| ------------- | -------------------------- | ------ |
| 제공 영역         | JDK                        | CGLib  |
| Proxy 생성 기반   | 인터페이스                      | 클래스 상속 |
| Proxy Handler | InvocationHandler 인터페이스 구현 |        |
