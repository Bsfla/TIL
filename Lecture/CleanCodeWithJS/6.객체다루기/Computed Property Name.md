### 1. 문법 설명

**Computed Property Name**은 `객체의 프로퍼티 key`를 문자열로 변환할 수 있는 표현식을 사용해(변수, 함수 등) 동적으로 지정하는 문법이다.

이를 통해 객체 리터럴 내부에서 Computed Property Name으로 **프로퍼티 키를 동적으로 생성**할 수 있다.

프로퍼티 키로 사용할 표현식을 `대괄호([])`로 묶어야 한다.

```javascript
const prefix = "prop";
let i = 0;

const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
};

console.log(obj); // { 'prop-1': 1, 'prop-2': 2, 'prop-3': 3 }
```
