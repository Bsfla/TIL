어떤 데이터가 인자로 들어오느냐에 따라 다른 데이터를 넣어주어야 할 때는, **객체를 Lookup Table 형태로 저장**해둔 후 인자에 따라 해당 데이터를 리턴하는 식으로 한다.

`[예제 1]` 인자로 들어온 User type에 따라 다른 데이터를 리턴

```jsx
function getUserType(type) {
  switch (key) {
    case "ADMIN":
      return "관리자";
    case "INSTRUCTOR":
      return "강사";
    case "STUDENT":
      return "수강생";
    default:
      return "해당 없음";
  }
}

getUserType("ADMIN"); // 관리자
```

위의 코드는 Switch문을 통해 인자에 맞는 데이터를 return해준다.

하지만 이건 한 눈에 보기 어려울 뿐더러, 다른 데이터를 추가적으로 넣어주어야 할 때 복잡해진다.

`[예제 1] 리펙토링`

```jsx
// constants/..some.js에 USER_TYPE 객체
const USER_TYPE = {
  ADMIN: "관리자",
  INSTRUCTOR: "강사",
  STUDENT: "수강생",
  UN: "해당 없음",
};

// main.js에서 import
import USER_TYPE from "./constants/..some.js";

// type을
function getUserType(type) {
  return USER_TYPE[type] || USER_TYPE.UN;
}

getUserType("ADMIN"); // 관리자
getUserType("NO"); // 해당 없음
```

위의 코드처럼 데이터는 다른 constants 폴더 파일에 넣어준 후, 해당 파일을 임포트해 return 해주면 사이드 이펙트도 없고 유지보수하기 간편하다.
