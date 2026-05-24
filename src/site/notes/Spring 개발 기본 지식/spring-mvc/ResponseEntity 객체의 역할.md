---
{"dg-publish":true,"permalink":"/spring/spring-mvc/response-entity/","dg-note-properties":{"분류":"우테코"}}
---

### ResponseEntity란?
ResponseEntity는 Spring MVC에서 HTTP 요청에 대한 응답을 제어하는 데 사용하는 클래스이다. 이 클래스는 @RestController와 함께 사용되며, JSON 또는 XML과 같은 RESTful 서비스를 제공하는데 이상적이다. 왜 ResponseEntity를 사용하면 좋은지는 아래에서 차차 살펴보자.
### ResponseEntity의 타입 계층 구조
**ResponseEntity**는 기본적으로 Spring Framework의 [[Spring 개발 기본 지식/spring-mvc/HttpEntity\|HttpEntity]]를 상속받아 구현한다. 해당 타입 계층 구조는 다음과 같다. ![Pasted image 20260502164916.png](/img/user/Attached%20file/Pasted%20image%2020260502164916.png) 
## 기본 생성자
기본 생성자는 총 3개의 인자로 구성되어 있다. **header, body, status code로 구성되어 있다.** 여러 개의 부생성자가 있기 때문에 각 인자는 빈 값으로도 표현 가능하다.
```java
/**  
 * Create a {@code ResponseEntity} with a body, headers, and a status code.  
 * @param body the entity body  
 * @param headers the entity headers  
 * @param statusCode the status code  
 */
 public ResponseEntity(@Nullable T body, @Nullable MultiValueMap<String, String> headers, HttpStatusCode statusCode) {  
    super(body, headers);  
    Assert.notNull(statusCode, "HttpStatusCode must not be null");  
  
    this.status = statusCode;  
}
```

### ResponseEntity가 해결한 문제
Spring이 왜 ResponseEntity를 만들었을까? **`ResponseEntity`는 HTTP 응답을 코드로 명확하게 제어할 수 없던 문제를 해결했다.** 즉, 기존에 HTTP 응답이 여러 곳에 흩어져 있던 문제를 하나의 객체에 통합하여 응집도를 높였다. 기존의 Spring MVC의 문제상황을 살펴보자.

```java
@Controller
public class MemberController {

    @GetMapping("/member")
    public String getMember(Model model) {
        model.addAttribute("name", "charles");
        return "member";
    }
}
```
과거 Spring MVC에서는 응답을 내려주기 위해 model을 다음과 같이 초기화 했다. 즉, 해당 모델에 들어가는 body를 반환해주고, headers는 별도 설정하며, status는 다른 방식으로 설정해줘야 했다.

==ResponseEntity는 이를 하나의 객체로 캡슐화하여, REST API 설계에서 응답의 의미를 보다 명확하게 표현할 수 있게 도와주었다. 이 맥락에 의해, RestAPI 설계 시에 **@RestController** 와 **ResponseEntity**를 같이 사용하는 것이 표준이며, 이때 반환값 `ResponseEntity <T>` 자체가 곧 응답 본문이라는 의도를 명확히 드러낸다.==

### ResponseEntity가 제공하는 기능
앞서 ResponseEntity는 3가지 포함 관계를 갖는다. Status Code와 Header 그리고 Body를 포함한다. 각 설정 정보에 대해 명확하고 디테일한 표현법을 제공해주기 때문에 유용하다.

- **Response Status Code 설정**: `ResponseEntity` 객체를 생성할 때, HTTP Status Code를 명시적으로 제공할 수 있다. 이는 API의 Response를 보다 명확하게 표현할 수 있게 해주며, 클라이언트에게 유용한 정보를 제공한다.
    
- **Response Header 조작**: Response에 필요한 HTTP Header를 추가하거나 변경할 수 있다. 이를 통해 캐싱 정책, 내용 유형, CORS Header 설정 등을 세밀하게 조정할 수 있다.
    
- **Response Body 관리**: `ResponseEntity`는 Response Body에 직접 객체를 설정할 수 있으며, Spring의 메시지 컨버터를 통해 객체를 JSON이나 XML 등의 형식으로 자동 변환할 수 있다.