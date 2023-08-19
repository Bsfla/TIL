## Nullish coalescing operator

### Null 병합 연산자 정의

- Nullish coalescing operator(Null 병합 연산자)
  - **널 병합 연산자 (`??`)** 는 왼쪽 피연산자가 [null](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/null) 또는 [undefined](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환하는 논리 연산자이다.

### Null 병합 연산자 필요성

- OR 연산자를 기본값으로 사용하거나 단축 평가하고 싶은 경우에 `falsy` 값 때문에 의도치 않은 결과가 생길 수 있다.
- OR 연산자는 왼쪽 피연산자가 `falsy` 값일 때 오른쪽 피연산자를 반환하고, 그렇지 않으면 왼쪽 피연산자를 반환한다. 그런데 숫자 0도 falsy값이기 때문에, 아래 코드처럼 0을 반환하고 싶은 의도와 달리 오른쪽 피연산자를 반환하는 문제가 발생할 수 있다.

```jsx
0 || 10; // 10
```

- 이런 경우에 대안으로 편리하게 사용할 수 있는 것이 null 병합 연산자(`??`)다.
  - null 병합 연산자는 null과 undefined를 평가할 때만 사용하면 된다.

```jsx
0 ?? 10; // 0
null ?? 10; // 10
undefined ?? 10; // 10
```

- Null 병합 연산자는 AND나 OR 연산자와 체이닝하여 사용하면 안 된다.
- Null 병합 연산자는 옵셔널 체이닝 연산자와 함께 사용하면 궁합이 좋다.
