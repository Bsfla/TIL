# Else if와 Else를 피하고 Early Return하자

## 1. else if 피하기

- else if문이 마치 파이프라인처럼 앞의 if문과 연결되어 차례대로 실행된다고 생각하면 안 된다.
    - else if문은 else문 처리가 한 번 되고 if문 동작이 되는 것과 같다.

```jsx
const x = 1;

if (x >= 0) {
  console.log('x는 0과 같거나 크다');
} else if (x > 0) {
  console.log('x는 0보다 크다');
}
// 'x는 0과 같거나 크다'
```

- 위 코드와 아래의 코드는 논리적으로 같으며, 결과도 같다.

```jsx
const x = 1;

if (x >= 0) {
  console.log('x는 0과 같거나 크다');
} else {
  if (x > 0) {
    console.log('x는 0보다 크다');
  }
}
// 'x는 0과 같거나 크다'
```

### else if를 아예 쓰지 말고, 아래 코드처럼 새 if문을 써서 조건을 분리하는 편이 명확하다.

```jsx
const x = 1;

if (x >= 0) {
  console.log('x는 0과 같거나 크다');
}
if (x > 0) {
  console.log('x는 0보다 크다');
}
// 'x는 0과 같거나 크다'
// 'x는 0보다 크다'
```

### 조건이 많아서 else if가 늘어나야 할 경우 switch문으로 대체하는 것이 낫다.

## 2. else 피하기

- else를 쓰지 않아도 조건이 논리적으로 분기된다.

```jsx
function getActiveUserName(user) {
  if (user.name) {
    return user.name;
  } else {
    return '이름없음';
  }
}
```

- 위 코드는 아래 코드처럼 리팩토링하는 것이 적절하다.

```jsx
function getActiveUserName(user) {
  if (user.name) {
    return user.name;
  }
  return '이름없음';
}
```

- else를 쓰지 않아야 하는 이유는 스타일상의 문제뿐만 아니라, 반전된 로직을 작성하게 되는 논리적 위험이 있기 때문이다.
    - 하나의 함수가 두 가지 이상의 기능을 할 때 else를 무분별하게 사용하면, 이런 문제가 생길 수 있다.

```jsx
// age가 20 미만시 report라는 특수 함수를 실행하며, 손님에게 인사를 하는 로직을 작성하려고 한다.
function getHelloCustomer() {
    if (user.age < 20) {
        report(user);
    } else {
        return '안녕하세요';
    }
}

// 이 코드에서는 else 때문에, 20세 미만에게만 인사를 하지 않는 의도하지 않은 결과가 발생한다.
```

- 아래 코드처럼 else문을 없애면, 두 기능(미성년자 확인하여 신고, 손님에게 인사)이 분리되어 손님의 나이에 관계없이 인사하는 기능이 실행된다. 아래 코드처럼 리팩토링 하는 것이 적절하다.

```jsx
function getHelloCustomer() {
  if (user.age < 20) {
    report(user);
  }
  return '안녕하세요';
}
```

## 3. Early Return

### Early Return 설명

- Early Return이란 조건문에서 먼저 Return할 수 있는 부분은 분리하여 우선 if문 내에서 Return하여 함수를 미리 종료하는 것이다. 이렇게 하면 뒤의 코드로 진입하지 않아 else문을 사용하지 않아도 된다.
    - if-else문이 너무 많으면 읽기가 어렵고 조건에 대해 명시적이지 않을 수 있는데, 이럴 때 Early Return을 활용하여 리팩토링할 수 있다.
    - Early Return으로 코드를 분리하면 로직은 변함이 없으면서 가독성이 좋고 더 명시적인 코드로 리팩토링 할 수 있다.
        - 최상위에 Early Return을 통해 거르는 로직을 넣으면 조건문 확인 시 덜 헷갈린다.

### Early Return 예제1

```jsx
function loginService(isLogin, user) {
  // 1. 로그인 여부 확인
  if (!isLogin) {
    // 2. 토큰 존재 확인
    if (checkToken()) {
      // 3. 가입 여부 재확인
      if (!user.nickName) {
        return registerUser(user);
      } else {
        refreshToken();

        return '로그인 성공';
      }
    } else {
      throw new Error('No Token');
    }
  }
}
```

- 위와 같은 코드를 아래처럼 Early Return으로 리팩토링할 수 있다.

```jsx
function loginService(isLogin, user) {
  // 1. 로그인 여부 확인
  if (isLogin) {
    return;
  }
  // 2. 토큰 존재 확인
  if (!checkToken()) {
    throw new Error('No Token');
  }
  // 3. 가입 여부 재확인
  if (!user.nickName) {
    return registerUser(user);
  }

  refreshToken();

  return '로그인 성공';
}
```

### Early Return 예제2

```jsx
function 오늘하루(condition, weather, isJob) {
  if (condition === 'GOOD') {
    공부();
    게임();
    유튜브보기();

    if (weather === 'GOOD') {
      운동();
      빨래();
    }

    if (isJob === 'GOOD') {
      야간업무();
      조기취짐();
    }
  }
}
```

위와 같은 코드를 아래처럼 Early Return으로 리팩토링할 수 있다.

function 오늘하루(condition, weather, isJob) {
  if (condition !== 'GOOD') {
    return;
  }

  공부();
  게임();
  유튜브보기();

  if (weather !== 'GOOD') {
    운동();
    빨래();
  }

  if (isJob === 'GOOD') {
    야간업무();
    조기취짐();
  }
}