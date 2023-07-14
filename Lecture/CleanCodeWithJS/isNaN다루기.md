# isNaN()

- `isNaN` = is Not A Number?isNaN() 함수는 어떤 값이 NaN인지 판별한다.자바스크립트의 다른 모든 값과 달리, NaN은 같음 연산(==, ===)을 사용해 판별할 수 없기 때문에, NaN을 판별하는 함수가 필요했고 그 결과 `isNaN` 메서드가 생겼다. NaN의 type은 number(`typeof NaN => Number`)인데, `isNaN(NaN)`의 결과는 true (= Not a number)라서 헷갈릴 수 있다.이 메서드는 숫자가 아닌 것이냐고 부정을 묻는 것이기에 결과값을 예상할 때 헷갈리기 쉽다. 단순하게, false가 반환되면 숫자이고, true가 반환되면 숫자가 아니다는 뜻으로 이해할 수 있다.하지만 더 정확하게는 `"이 값이, 숫자값으로 강제(coercion, 강제 형 변환)되는 경우, IEEE-754 표준에 따른 'Not A Number' 값인가?"` 를 묻는 것이다.
  > [IEEE-754 간단 설명] 컴퓨터와 인간은 2진수와 10진수를 통해 소통하는데, 이렇게 2진수와 10진수 사이를 왔다갔다 하다보면 소수점이라는 간극이 생긴다. 자바스크립트는 이 간극을 컴퓨터에서 부동소수점(떠돌이 소수점)을 표현하는 IEEE-754 표준을 통해 해결하려고 한다.

```
console.log(isNaN(123)) // false, 숫자가 아닌 것이 아니다. 즉, 숫자가 맞다.
```

## Number.isNaN()

- `isNaN`과 `Number.isNaN` 의 결과가 다르다.

```
console.log(isNaN(123 + '테스트')); // true
console.log(Number.isNaN(123 +'테스트')) // false
```

- 아래와 같이 문자열을 피연산자로 isNaN 메서드를 한 결과, true 가 나오는데 이는 원리상 잘못된 것이다.
  - 전역 isNaN 메서드는 이를 숫자로 parsing하는 것을 실패하고 NaN를 반환하여 true가 표시된다.
  - 이러한 사례 때문에, 전역 isNaN을 완전히 신뢰할 수는 없다고 판단하게 되어, 그 대안으로 `Number.isNaN` 이 등장했다.

```
isNaN("blabla")   // true
```

- 이처럼 `isNaN` 느스한 검사를 한다는 문제가 있어서, ES2015에서부터 더 엄격한 버전인 `Number.isNaN`이 도입됐다.
  - `Number.isNaN()` 메서드는 전달된 값이 NaN이고 타입이 Number인지 확인한다.

```
Number.isNaN(NaN);        // true
Number.isNaN(Number.NaN); // true
Number.isNaN(0 / 0);      // true

// 전역 isNaN()에서는 원래 true 였을 사례들
Number.isNaN('NaN');      // false
Number.isNaN(undefined);  // false
Number.isNaN({});         // false
Number.isNaN('blabla');   // false

// 아래는 모두 false다.
Number.isNaN(true);
Number.isNaN(null);
Number.isNaN(37);
Number.isNaN('37');
Number.isNaN('37.37');
Number.isNaN('');
Number.isNaN(' ');
```

- 따라서 엄격한 버전인`Number.isNaN` 을 쓰는 것이 권장된다.
