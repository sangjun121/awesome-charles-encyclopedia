---
{"dg-publish":true,"permalink":"/build/gradle-tutorial/","dg-note-properties":{"분류":"우테코"}}
---

### Gradle이 등장한 이유
- 기존 빌드 도구들이 가진 구조적 한계를 해결하기 위해 나옴.
- Ant의 자율성의 문제와 Maven의 정형화된 문제를 해결하기 위해 등장한 도구.
- 또한 코드 기반 DSL이다.
- 빠른 빌드가 가능하다. (변경된 것만 실행)
	- Build Cache
	- 병렬 실행
- 의존성 관리와 확장성이 유리함
	- Maven처럼 Dependency 관리 가능 -> Dependency를 관리하면 무엇이 좋을까?
	- Plugin 시스템으로 확장 가능

## TASK란?
- 빌드 과정에서 수행되는 하나의 작업 단위를 의미한다.
- Gradle은 이러한 task들을 단순히 순차적으로 실행하는 것이 아닌, task간의 의존성을 기반으로 실행 순서를 자동으로 결정하는 구조를 가진다.
- Gradle은 단순한 Build 도구를 넘어, Task를 조합하고 실행 흐름을 관리하는 일종의 오케스테리이션 엔진의 역할을 한다.



#### 학습 과정 정리
1. 일단 Gradle이 해결해 주는 문제가 무엇인지 알아보려고 함.
2. 