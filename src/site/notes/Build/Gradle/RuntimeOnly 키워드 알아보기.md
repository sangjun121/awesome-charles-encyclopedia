---
{"dg-publish":true,"permalink":"/build/gradle/runtime-only/","dg-note-properties":{"분류":"우테코"}}
---

```java
implementation 'org.springframework.boot:spring-boot-starter-jdbc' 
runtimeOnly 'com.h2database:h2'
```
- JDBC는 애플리케이션 로직이므로 implementation, H2는 실행 환경이므로 runtimeOnly로 분리한다.