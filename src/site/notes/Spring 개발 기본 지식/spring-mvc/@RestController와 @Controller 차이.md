---
{"dg-publish":true,"permalink":"/spring/spring-mvc/rest-controller-controller/","dg-note-properties":{"status":"작성중","분류":"우테코"}}
---

##### 작성완료 여부
작성중

### 도입
@Controller는 기본적으로 View를 반환하는 것을 목적으로 하는 컨트롤러이며, @RestController는 @Controller와 @ResponseBody를 합친 형태로 메서드 반환값을 그대로 view로 해석하지 않고, HTTP의 Body에 담아 반환하는 방식을 지원한다. 즉, 주로 JSON 형태의 데이터를 반환하는 rest api를 설계할 때 사용한다.

