---
{"dg-publish":true,"permalink":"/spring//custom-exception/","dg-note-properties":{"분류":"우테코"}}
---


### 문제 배경
예외처리를 진행하면서, 비즈니스 로직 속의 상황에 맞게 Custom Exception을 생성하여 사용하였다. 하지만 각 상황에 맞는 디테일한 Custom Exception을 매번 생성하다 보니까 너무 많은 종류의 예외가 생성 되었고, 너무 많은 커스텀 예외는 가독성도 떨어지고, 관리 측면에서 좋지 않다고 판단했다.
[custom exception은 언제 써야 할까?](https://tecoble.techcourse.co.kr/post/2020-08-17-custom-exception/)

### Custome Exception을 Unchecked Exception으로 구현한 이유
- 언체크드 예외는 예외가 발생할 가능성이 있을 때, 굳이 강제적으로 예외처리를 하지 않아도 되는 상황에서 적절하다.
- Try-Catch로 인한 불필요한 Throw 전파도 피할 수 있다.
- 그리고 스프링은 내부적으로 발생한 예외를 확인하여, 언체크 예외인 경우 자동으로 롤백시키도록 처리한다. **즉, 체크 예외는 처리가 강제되야하는 예외이기 때문에 개발자가 무언가 처리할 것이라는 기대가 있기 때문에 자동으로 롤백하지 않는다.**