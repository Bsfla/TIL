# undefined & null

- undefined와 null을 사용할 때 여러 경우에서 헷갈린다.
- MDN에서는 각각에 대해 다음과 같이 정의한다.
  - **`null`**은 JavaScript의 [원시 값](https://developer.mozilla.org/ko/docs/Glossary/Primitive) 중 하나로, 어떤 값이 의도적으로 비어있음을 표현하며 불리언 연산에서는 [거짓](https://developer.mozilla.org/ko/docs/Glossary/Falsy)으로 취급합니다
  - 전역 **`undefined`** 속성은 [undefined] 원시 값을 나타내며, JavaScript의 [원시 자료형](https://developer.mozilla.org/ko/docs/Glossary/Primitive) 중 하나입니다.
- null과 undefined에 대해 살펴보자.

## null

- null에 대해 not 연산자를 사용하면 다음과 같이 피연산자 null을 불린형(null의 불린형은 false)으로 변환하고 그 역을 반환한다.

```
console.log(!null) // true
console.log(!!null) //false
console.log(!null === true) // true
console.log(!!null === false) // true
```

- 하지만, 그냥 `null === false` 를 평가해보면, 둘은 다르다고 반환된다...

```
console.log(null === false) //false
```

- null은 수학적으로는 0이다.

```
// null은 수학적으로는 0이다.
console.log(null + 123) // 123
```

## undefined

- undefined는 아무것도 지정하지 않았을 때 기본값이다. 즉, 변수를 선언했지만 값을 정의(할당)하지 않은 것이다.

```
let varb
console.log(varb) // undefined
console.log(typeof varb); // undefined
```

- undefined에 대해 not 연산자를 사용하면 null처럼 true 불린형이 된다.

```
console.log(!undefined); // true
console.log(!!undefined); // false
```

- 하지만 undefined와 null이 같냐고 평가하면 역시 다르다고 반환된다.

```
console.log(undefined === null) // false
```

- undefined로 산수를 하면 null과는 다르게 NaN가 나온다.

```
console.log(undefined + 123) // NaN
```

## 결론

- 따라서 undefined와 null을 함께 활용한 코드를 작성하기보다는, 팀에서 비어 있는 값을 둘 중에 무엇으로 할 지 컨벤션을 정하여 일관성있게 사용하는 것이 좋다.
  - null과 undefined를 쓸 때 아래와 같은 특성을 파악하고 조심해야 한다.
- null과 undefined 비교 정리
  - null
    - 값이 없음을 명시적으로 표현하기 위한 값
    - 수학적으로 0에 가깝다.
    - type은 object이다.
  - undefined
    - 값이 정의되지 않았을 때 기본으로 정해지는 값
    - 수학적으로 사용하려고 하면 NaN가 나온다.
    - type은 undefined이다.
