인스턴스를 객체로 생성한 후, 생성자 함수에서 인자를 객체 디스트럭쳐링을 해 인스턴스 프로퍼티를 설정하기

`BAD`

```jsx
function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const poco = new Person("poco", 30, "korea");
console.log(poco); // Person { name: 'poco', age: 30, location: 'korea' }
```

위의 코드에서는 인자의 순서(name, age, location)가 중요하다. 따라서 매개변수를 인자에 맞게 잘못 전달할 시 문제가 발생한다.

`GOOD`

```jsx
function Person({ name, age, location }) {
  this.name = name;
  this.age = age ?? 30;
  this.location = location ?? "korea";
}

// 인자의 순서가 중요하지 않음
const poco = new Person({
  location: "korea",
  name: "fgStudy",
  age: 20,
});

console.log(poco); // Person { name: 'fgStudy', age: 20, location: 'korea' }
```

위의 코드처럼 인스턴스를 생성할 때 객체로 매개변수를 전달한 후, 생성자 함수에서 이를 디스트럭쳐링하게끔 하면, 인자의 순서대로 전달하지 않아도 문제가 없다.

---

### 예제 2

옵션으로 전달할 인자가 있을 시 객체디스트럭쳐링을 이용할 수 있다.

`BAD`

```jsx
function Person({ name, age, location }) {
  this.name = name;
  this.age = age ?? 30;
  this.location = location ?? "korea";
}

// 인자의 순서가 중요하지 않음
const poco = new Person({
  name: "fgStudy",
});

console.log(poco); // Person { name: 'fgStudy', age: 30, location: 'korea' }
```

위의 코드는 생성자함수 안에서 각 프로퍼티에 Null 병합연산자를 통해 디폴트값을 설정했다. 가독성면에서 좋지 않다.

```jsx
// 명시적
function Person(name, { age, location }) {
  this.name = name;
  this.age = age;
  this.location = location;
}

const fgStudyOptions = {
  age: 30,
  location: "korea",
};

const fg = new Person("fgStudy", fgStudyOptions);
console.log(fg); // Person { name: 'fgStudy', age: 30, location: 'korea' }
```

위의 코드처럼 따로 옵션 객체를 만든 후 **합성**하자.

---

### 예제 3

배열이 객체임을 이용해, 인덱스를 통해 배열의 요소를 간편하게 디스트럭쳐링

`BAD`

```jsx
const orders = ["First", "Second", "Third"];

const [st, , rd] = orders;

console.log(st); // First
console.log(rd); // Second
```

orders의 첫 번째, 세 번째 원소를 변수로 만들기 위해서는 원하지 않는 원소는 빈칸으로 놔둘 수 있다. 이는 배열 요소가 많아지게 될 시 불편하다.

`GOOD`

```jsx
const orders = ["First", "Second", "Third"];

// 수많은 배열의 요소들을 인덱스로 간편하게 구조분해할당
const { 0: st, 2: rd } = orders;

console.log(st); // First
console.log(rd); // Second
```

배열이 객체임을 이용해 인덱스로 디스트럭쳐링하자.
