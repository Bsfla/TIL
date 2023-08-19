## JavaScript의 배열은 객체다.

```jsx
const arr = [1, 2, 3];

arr[4] = "test";
arr["property"] = "string value";
arr["obj"] = {};
arr["{}"] = [1, 2, 3];
arr["func"] = function () {
  return "hello";
};
```

- 위와 같이 배열에 마치 객체에서 key와 value를 설정하듯이 값을 입력하면, 객체처럼 값이 입력된 것을 확인할 수 있다.

```jsx
console.log(arr);

/* [
  1,
  2,
  3,
  <1 empty item>,
  'test',
  property: 'string value',
  obj: {},
  '{}': [ 1, 2, 3 ],
  func: [Function (anonymous)]
] */
```

- 심지어 배열 내의 함수도 객체의 메서드처럼 실행할 수 있다.

```jsx
console.log(arr.func()); // 'hello'
```

- 이런 특징을 잘 이해하고 있어야 한다.
- 그리고 배열 여부를 확인하려면 `Array.isArray()` 메서드를 사용하는 것이 좋다.

if (Array.isArray(arr)) {
console.log('배열 확인');
}
