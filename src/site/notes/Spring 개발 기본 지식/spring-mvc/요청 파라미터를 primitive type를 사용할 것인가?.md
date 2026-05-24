---
{"dg-publish":true,"permalink":"/spring/spring-mvc/primitive-type/","dg-note-properties":{"분류":"우테코"}}
---

primitive type을 사용하면 null이 원천적으로 불가능하기 때문에, 값의 존재를 강제할 수 있다는 장점이 있다고 생각했습니다. 특히 필수 파라미터라는 의미를 코드 레벨에서 조금 더 명확하게 표현할 수 있다고 느꼈습니다.

반면 trade-off로는 optional한 요청 값을 표현하기 어렵다는 점이 있다고 생각했습니다. 예를 들어 필터 조건처럼 값이 “없을 수도 있는” 상황에서는 primitive type은 null 표현이 불가능하기 때문에 유연성이 떨어질 수 있다고 느꼈습니다.

현재 `day`, `limit`는 조회 필터 조건의 성격이 강하다고 생각했고, 이후 optional하게 변경될 가능성도 고려하여 wrapper 타입(Integer)으로 수정하였습니다. 또한 primitive type을 유지하더라도 `defaultValue`를 사용하는 방식도 가능하다는 점을 함께 고민해보게 되었습니다!

특히, 검증 보안을 위해 기본값 설정도 필요한가에 대한 고민도 필요.