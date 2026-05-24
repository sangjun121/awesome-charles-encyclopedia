---
{"dg-publish":true,"permalink":"/build/gradle/gradle-build-gradle/","dg-note-properties":{"분류":"우테코"}}
---

### 도입
어플리케이션 작성시에 Gradle 빌드 스크립트에 사용되는 기본 개념에 대해 살펴보자.

## 기본 구조
기본적으로 의존성 관리와 프로젝트 설정 및 플러그인 파트로 구분된다.

### 의존성 관리(Dependencies)
```java
dependencies {  
    implementation 'org.springframework.boot:spring-boot-starter'  
    implementation 'org.springframework.boot:spring-boot-starter-web'  
    implementation 'org.springframework.boot:spring-boot-starter-validation'  
	
	compileOnly 'org.projectlombok:lombok'  
    annotationProcessor 'org.projectlombok:lombok'  
  
	implementation 'org.springframework.boot:spring-boot-starter-jdbc'  
    runtimeOnly 'com.h2database:h2'  
  
    testImplementation 'org.springframework.boot:spring-boot-starter-test'  
    testImplementation 'io.rest-assured:rest-assured:5.3.1'  
}
```

프로젝트에 필요한 외부 라이브러리를 추가할 때 사용하는 설정이다. `build.gradle` 내의 `dependencies`는 이 의존성을 정의하기 위한 블록이다. 위 코드 키워드를 구체적으로 살펴보자.

[[Build/Gradle/RuntimeOnly 키워드 알아보기\|RuntimeOnly 키워드 알아보기]]


## 인덱스

