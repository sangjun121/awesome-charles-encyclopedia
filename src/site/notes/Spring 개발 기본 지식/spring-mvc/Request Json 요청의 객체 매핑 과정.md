---
{"dg-publish":true,"permalink":"/spring/spring-mvc/request-json/","dg-note-properties":{"분류":"우테코"}}
---


HTTP 요청 (JSON)
        ↓
DispatcherServlet
        ↓
HandlerAdapter
        ↓
HttpMessageConverter 선택
        ↓
MappingJackson2HttpMessageConverter
        ↓
Jackson (ObjectMapper)
        ↓
ReservationSaveRequest 생성


HTTP 요청으로 전달된 JSON 값이 `ReservationSaveRequest`로 매핑되는 과정은 Spring MVC의 `HttpMessageConverter`를 통해 이루어진다고 이해하고 있습니다.

클라이언트가 JSON 형태의 요청을 보내면, Spring은 이를 처리하기 위해 적절한 `HttpMessageConverter`를 선택하게 됩니다. 이때 JSON의 경우 `MappingJackson2HttpMessageConverter`가 선택됩니다.

해당 컨버터는 내부적으로 Jackson 라이브러리를 사용하여 JSON 데이터를 Java 객체로 변환합니다. 이 과정에서 JSON의 key와 DTO(`ReservationSaveRequest`)의 필드 이름을 매핑하여 객체를 생성합니다.

특히 `@RequestBody`가 붙어 있는 경우, Spring은 요청 Body를 읽어서 해당 타입의 객체로 변환하는 작업을 수행합니다.

정리하면, `@RequestBody` → `HttpMessageConverter` 선택 → Jackson을 통한 JSON → 객체 변환 흐름으로 매핑이 이루어진다고 이해하고 있습니다.

“Spring에서는 Jackson의 ObjectMapper가 HttpMessageConverter를 통해 이 직렬화/역직렬화를 처리한다고 알고 있습니다.”

> Java 객체 → JSON = 직렬화 (Serialization)