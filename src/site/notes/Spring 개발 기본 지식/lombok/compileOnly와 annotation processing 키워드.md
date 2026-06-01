---
{"dg-publish":true,"permalink":"/spring/lombok/compile-only-annotation-processing/","dg-note-properties":{"분류":"우테코"}}
---

Gradle에서 Lombok을 사용하려면 단순히 의존성만 추가하는 것이 아니라, annotationProcessor 설정까지 함께 추가해야 한다. 이는 Lombok이 컴파일 시점에 코드를 생성하는 방식이기 때문이며, IDE에서도 annotation processing을 활성화해야 정상적으로 동작한다.