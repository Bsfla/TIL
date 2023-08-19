# eqeq 줄이기

## 동등 연산자(==, eqeq)

- 동등 연산자(== , Equality)
  - `[MDN정의]` : 동등 연산자(==)는 두 개의 피연산자가 동일한지 확인하며, Boolean값을 반환합니다. 일치 연산자(===)와는 다르게 다른 타입의 피연산자들끼리의 비교를 시도합니다.
  - '='이 equality인데 이를 줄여서 말하면 eq이고, 동등연산자는 '='이 두 개이므로 `eqeq`라고 부르기도 한다.
- 동등 연산자를 사용하면 형 변환(type casting)이 일어난다.
  - 검사만 했을 뿐인데, 형 변환(type casting)이 발생하므로 위험하다.
  - 이처럼 느스한 동등 연산자로 검사하면, 나중에 어떠한 오류를 불러올지 모르므로 위험하다.

```
console.log('1' == 1);  // true
console.log(1 == true); // true
```

!https://velog.velcdn.com/images%2Fjangws%2Fpost%2F4fb36522-9140-4a14-bcf0-e994758b17bd%2Feqeq.jpg

## 일치 연산자(===, eqeqeq)

- 일치 연산자(===, Strict Eqaulity)
  - `[MDN정의]` : 일치 연산자(===)는 두 개의 피연산자가 동일한지 확인하며, Boolean 값을 반환합니다. 동등 연산자(==)와는 다르게 다른 타입의 피연산자를 항상 다른 것으로 간주합니다.
  - '='이 equality인데 이를 줄여서 말하면 eq이고, 일치연산자는 '='이 세 개이므로 `eqeqeq`라고 부르기도 한다.

```
console.log('1' === 1); // false
console.log(1 === true); // false
```

- 어떻게든 형 변환을 수동으로 한 다음 일치 연산자를 사용하여 안전하게 검사해야 한다.

```
console.log(Number('1') === 1); // true
console.log(Boolean(1) === true); // true
```

!https://velog.velcdn.com/images%2Fjangws%2Fpost%2Fe7261dc0-ebf6-4d31-ac87-5ce142ba5fcc%2Feqeqeq.jpg

### 결론

- `eqeq(==)` 대신 `eqeqeq(===)`를 사용한다.특히 협업 시 항상 `eqeqeq`만을 사용하는 것이 좋으므로, 이와 관련된 ESLint 설정을 하는 것이 좋다.https://eslint.org/docs/rules/eqeqeq

## 형 변환 주의하기

- 자바스크립트가 평가했을 때, 암묵적으로 형 변환이 일어날 수 있다.

```
console.log(11 + ' 문자와 결합');  // '11 문자와 결합'
console.log(!!'문자열'); // true
console.log('11'); // 11
```

- 안전하게 변환하려면, 사용자가 명시적으로 변환해야 한다. Wrapper 객체 등을 활용하여 명시적 변환할 수 있다.

```
console.log(String(11 + ' 문자와 결합'));  // '11 문자와 결합'
console.log(Boolean(!!'문자열'));  // true
console.log(Number('11'));  // 11
```
