# React
* 본 레포지토리는 React 공식 홈페이지의 'LEARN REACT'를 기준으로 작성되었습니다.
* 세부 목차는 아래와 같습니다.

## 배울 내용들
* 어떻게 컴포넌트들을 만들고(create) 끼워넣는지(nest)
* 어떻게 마크업(markup)과 스타일(styles)를 추가하는지
* 어떻게 데이터를 보여줄 수 있는지
* 어떻게 컨디션(conditions)과 리스트(lists)를 보여줄(render) 수 있는지
* 어떻게 이벤트(events)에 응답하고 화면을 업데이트 할 수 있는지
* 어떻게 컴포넌트 사이에 데이터를 주고받을 수 있는지

## 컴포넌트들을 만들고 끼워넣기 (Creating and nesting components)
* React 앱은 컴포넌트로 만들어진다.
* 컴포넌트는 UI의 한 덩어리로 고유한 로직과 appearance를 가진다.
* 컴포넌트는 버튼 하나가 될 수도, 전체 페이지 하나가 될 수도 있다.
* 리액트 컴포넌트는 markup을 return하는 자바스크립트 함수이다.
``` javascript
function MyButton() {
    return (
        <button>I'm a button</button>
    )
}
```
* 이제 `MyButton` 을 선언했으니, 이를 다른 컴포넌트에 nest 해보자.
``` javascript
export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    )
}
```
* `<MyButton />` 이 대문자로 시작함을 기억하자. 그게 바로 해당 요소가 React component 인지 구분할 수 있는 부분이다. 소문자로 시작하는 HTML 태그들과 달리 React component는 항상 대문자로 시작해야 한다.
* `export default` 키워드는 파일에서 main component를 구분하는데 쓰인다.
    * 이와 관련해서는 아래 링크들을 참고하여 학습할 수 있다.
        [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export) &
        [javascript.info](https://javascript.info/import-export)
## JSX로 마크업 작성하기 (Writing markup with JSX)
* 앞서 살펴본 마크업 문법을 JSX라고 부른다.
* 이는 선택사항이긴 하지만 대부분의 React 프로젝트는 편의상 JSX를 이용한다.
* 로컬에서의 개발을 위해 우리가 권장하는 모든 도구들은 JSX를 적용한다.
* JSX는 HTML보다 더 빡센 규칙이다.
* `<br />`와 같이 태그를 닫아야 한다.
* 컴포넌트는 여러 개의 JSX 태그를 return 할 수 없다.
* 해당 태그들을 같은 부모 요소들인 `<div>...</div>`로 묶거나 빈 wrapper `<>...</>`로 묶어야 한다.
<hr />
* 예시 코드

``` javascript
function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br />How do you do?</p>
        </>
    )
}
```
* 만약 많은 양의 HTML을 JSX로 변환하려 한다면 [online converter](https://transform.tools/html-to-jsx) 를 활용하면 된다.
## 스타일(디자인) 입히기 (Adding styles)
* React에서는 CSS class 를 `className`으로 구분하며, 이는 HTML의 `class` 속성과 동일하게 작동한다.
``` javascript
<img className="avatar" />
```
* 그리고 해당 class를 위한 CSS rules를 별도의 CSS 파일에 작성한다.
``` css
/* In your CSS */
.avatar {
    border-radius: 50%
}
```
* React는 어떻게 CSS 파일을 적용하는지 미리 규정하지는 않는다.
* 가장 간단한 방법으로는, HTML에 `<link>` 태그를 더하는 방법이 있다.
* 만약 build tool이나 프레임워크 등을 사용하면 해당 공식 문서를 참고하라.
## 데이터를 보여주는 법 (Displaying data)
* JSX는 JavaScript에 markup을 넣을 수 있도록 한다.
* 중괄호( { } )는 JavaScript로 embed하여 사용자들에게 보여주도록 한다.
* 예컨대, 아래 코드는 `user.name` 변수를 보여줄 것이다.
``` javascript
return (
    <h1>
        {user.name}
    </h1>
);
```
* 한편 JSX 구문에서 JavaScript로 진입할 수도 있으며, 이때 ""(쌍따옴표) 대신 {}(중괄호)를 이용해야 한다.
* 예를 들어, `className="avatar"`는 `"avatar"` 문자열 만을 CSS class로 전달한다, 하지만 `src={user.imageUrl}`은 JavaScript의  `user.imageUrl`이라는 변수의 값을 읽고 그 값을 src 속성으로 전달한다.
```javascript
return (
    <img
        className="avatar"
        src={user.imageUrl}
    />
);
```
* JSX {} (중괄호) 안에 더 복잡한 expressions로 넣을 수 있다. <br /> 예를 들면, [string concatenation](https://javascript.info/operators#string-concatenation-with-binary)
``` javascript
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

export default function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageIrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}
```
* 위의 예시에서 `style={{}}`은 특별한 구문이 아니라 `style={  }` 안에 일반적인 `{}` 요소인 JSX 중괄호가 들어간 구조이다.
* 너의 styles가 JavaScript 변수들에 의존해 있을 때 `style` 요소를 이용할 수 있다.
## 조건부 렌더링 (Conditional Rendering)
* React에서는 JavaScript 코드에서 사용하였던 것과 동일한 방법으로 조건문을 표현한다.
* 예를 들어, 조건에 따라 JSX를 적용할 때, `if`문을 활용할 수 있다.
``` javascript
let content;
if (isLoggedIn) {
    content = <AdminPanel />;
} else {
    content = <LoginForm />;
}
return (
    <div>
        {content}
    </div>
);
```
* 좀더 촘촘한 코드를 원한다면, [조건 연산자](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator)를 활용할 수 있다.
* (위에서 살펴본) `if`문과 다르게 이 방식은 JSX 내부에서 작동한다.
``` javascript
<div>
    {isLoggedIn ? (
        <AdminPanel />
    ) : (
        <LoginForm />
    )}
</div>
```
* 그리고 `else` 부분이 필요하지 않다면, 더 짧은 [logical `&&` syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND#short-circuit_evaluation)를 이용할 수 있다.
``` javascript
<div>
    {isLoggedIn && <AdminPanel />}
</div>
```
* 위의 모든 접근법들은 조건부로 속성을 설정하는데 쓰인다 ??<br /> (All of these approaches also work for conditionally specifying attributes.)
* 이러한 JavaScript 구문에 익숙하지 않다면, 처음에는 `if...else`문으로 시작해봐도 된다.
## 목록(리스트)를 렌더링
* 컴포넌트의 목록을 렌더링하기 위해 JavaScript의 [`for`문](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)이나 [array `map()` 함수](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)에 의존할 것이다.
* 예컨대, 아래와 같은 배열 products를 가진다고 해보자.
``` javascript
const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
];
```
* 컴포넌트 내에서 array of products를 array of `<li>` items로 바꾸기 위해 `map()` 함수를 활용해라.
``` javascript
const listItems 
```
