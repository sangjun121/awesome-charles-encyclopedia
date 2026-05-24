---
{"dg-publish":true,"permalink":"/spring//request-response/","dg-note-properties":{"분류":"우테코"}}
---


### 0. 도입
API 서버 개발에서 흔히 작성하는 Request, Response 객체의 이름 컨벤션이 고민된다면, 해당 문서를 참고하자. 각 CRUD의 행위 동사는 아래로 통일한다.

##### 행위 네이밍
**save(생성) / update(수정) / delete(삭제) / find(조회)**
해당 내용을 기반으로 네이밍 규칙을 갖는다.

### 1. Controller 메서드 이름 : (조작 행위) - [여러 건] - (자원) - [조건]
==**예시**== 
- 저장 - 자원 : saveUser()
- 수정 - 자원 : updateUser()
- 삭제 - 자원 : deleteUser()
- 조회 - 자원 : findUser()
- 조회 - 여러건 - 자원 : findAllUser()
- 조회 - 자원 - 이름으로 : findUserByName()
- 조회 - 여러건 - 자원 - 이름으로 : findAllUserByName()

### 2. Request DTO 객체 이름 : (자원) - (조작 행위)
**==예시==**
- 자원 - 저장 : UserSaveRequest
- 자원 - 수정 : UserUpdateRequest
- 자원 - 삭제 : UserDeleteRequest

### 3. Response DTO 객체 이름 : (자원) - (조작 행위) - [여러 건] - [조건] (단건은 생략)
**==예시==**
- 자원 - 조회 : UserFindResponse
- 자원 - 조회 - 여러건 : UserFindAllResponse
- 자원 - 조회 - 이름으로 : UserFindByNameResponse
- 자원 - 조회 - 여러건 - 이름으로 : UserFindAllByNameResponse