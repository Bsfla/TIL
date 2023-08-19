자바스크립트에서는 객체의 불변성을 위해 `freeze` 메소드를 사용한다. 하지만 freeze는 직속 프로퍼티만 동결되므로(shllow only) 중첩 객체는 동결할 수 없다.

`문제`: 직속 프로퍼티만 동결하는 freeze 메소드

```jsx
const STATUS = Object.freeze({
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
  OPTIONS: {
    GREEN: "GREEN",
    RED: "RED",
  },
});

console.log(Object.isFrozen(STATUS.PENDING)); // true
console.log(Object.isFrozen(STATUS.OPTIONS)); // false
```

위의 코드를 보면 PENDING 프로퍼티는 동결되었으나, 중첩 객체인 OPTIONS는 동결되지 않았음을 확인할 수 있다.

```jsx
const STATUS = Object.freeze({
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
  OPTIONS: {
    GREEN: "GREEN",
    RED: "RED",
  },
});

console.log(Object.isFrozen(STATUS.PENDING)); // true
console.log(Object.isFrozen(STATUS.OPTIONS)); // false

STATUS.OPTIONS.GREEN = "G";
STATUS.OPTIONS.YELLOW = "Y";

console.log(STATUS.OPTIONS); // { GREEN: 'G', RED: 'RED', YELLOW: 'Y' }
```

따라서 OPTIONS에 프로퍼티를 추가하거나 수정, 삭제하는 등의 변경이 가능하다.

`해결`: 모든 프로퍼티에 대해 재귀적으로 freeze 메소드 호출

```jsx
const STATUS = Object.freeze({
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
  OPTIONS: {
    GREEN: "GREEN",
    RED: "RED",
  },
});

function deepFreeze(target) {
  Object.keys(target).forEach((key) => {
    if (typeof target[key] === "object" && !Object.isFrozen(target[key]))
      deepFreeze(target[key]);
  });

  return Object.freeze(target);
}

deepFreeze(STATUS);

console.log(Object.isFrozen(STATUS)); // true
console.log(Object.isFrozen(STATUS.OPTIONS)); // true
```
