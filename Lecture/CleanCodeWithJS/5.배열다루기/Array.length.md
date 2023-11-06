## 1. Array.length

- Array.length는 배열의 길이보다는 `배열의 마지막 인덱스`를 의미하는 것에 가깝다.

```jsx
const arr = [1, 2, 3];

console.log(arr.length); // 3

arr.length = 10;

console.log(arr.length); // 10
console.log(arr); // [1,2,3, , , , , , , ,]

arr[15] = 4;

console.log(arr); // [1,2,3, , , , , , , , , , , 4]
```

- 배열의 길이를 0으로 설정하면 배열이 `초기화`된다.

```jsx
const arr = [1, 2, 3];
arr.length = 0;
console.log(arr); // []
```

- Array.length의 이러한 특성을 염두하고 주의해서 사용해야 한다.

## 2. 유사 배열 객체

- 유사배열객체는 말 그대로 '배열'이 아닌 '객체'이다. 그런데 아래 코드처럼, length 속성과 인덱싱된 요소를 가진
- 유사배열객체를 `Array.from()` 메서드를 사용하여 신기하게도 새로운 배열을 만드는 것을 볼 수 있다.
- 유사 배열 객체 (`length` 속성과 인덱싱 된 요소를 가진 객체)

```jsx
const arrayLikeObject = {
  0: "HELLO",
  1: "WORLD",
  length: 2,
};

console.log(Array.isArray(arrayLikeObject)); // false

const arr = Array.from(arrayLikeObject);

console.log(Array.isArray(arr)); // true
console.log(arr); // [ 'HELLO', 'WORLD' ]
```

- arguments나 webAPI의 node list 도 유사배열객체다.
- 유사배열객체는 배열의 고차함수 메서드를 사용할 수 없다.
  - Array.from() 메서드를 통해 배열로 변환해야 배열의 고차함수 메서드를 사용할 수 있다.
