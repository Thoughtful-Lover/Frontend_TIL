# 리액트 프로젝트 시작하기
## 1.1 리액트란 무엇인가?
* 페이스북에서 개발하고 관리하는 UI 라이브러리
* 다수의 기능을 제공하는 앵귤러(angular)와 달리 UI기능만 제공
    * 전역 상태 관리, 라우팅, 빅ㄹ드 시스템 등을 각 개발자가 직접 구축해야 한다.
* **<U>가상 돔(virtual dom)</U>**을 통해서 UI를 빠르게 업데이트한다.
    * 이전 UI 상태를 메모리에 유지해서 변경될 UI의 최소 집합을 계산하는 기술
* 함수형 프로그래밍을 적극적으로 활용한다.
    * render 함수는 순수 함수로 작성한다.
    * state는 불변 변수로 관리한다.
    ```
    순수 함수(pure function)란, 부작용(side-effect)이 없는 함수, 즉, 함수의 실행이 외부에 영향을 끼치지 않는 함수
    ```
    ```
    불변변수는 const키워드로 선언한다. const로 선언한 변수는 읽기만 가능하다. const로 선언한 변수에 값을 다시 할당하면 오류가 발생한다.
    ```
```
기타 //
  render 함수는 순수 함수여야 하므로 인수 state가 변하지 않으면 항상 같은 값을 반환해야 한다.

  그리고 컴포넌트의 상탯값을 수정할 때는 기존 값을 변경하는 게 아니라 새로운 객체를 생성해야 한다.
  
  코드에서 순수 함수와 불변 함수를 적극적으로 사용하면 복잡도가 낮아지고, 찾기 힘든 버그가 발생할 확률이 줄어든다.
```

## 1.2 리액트 개발 환경 직접 구축하기
### 1.2.1 Hello World 페이지 만들기
* Chapter 1.2.1 폴더에 구현

### 1.2.2 바벨 사용해보기
* 바벨(babel)은 자바스크립트 코드를 변환해 주는 컴파일러
* 바벨을 사용하면 최신 자바스크립트 문법을 지원하지 않는 환경에서도 최신 문법을 사용할 수 있다.
* 리액트에서는 JSX 문법을 사용하기 위해 바벨을 사용

* 화면에 count 상탯값을 보여 주고 증가, 감소 버튼을 통해서 count 상탯값을 변경하는 코드를 작성해 보자.

#### JSX 문법 알아보기
* JSX는 HTML에서 태그를 사용하는 방식과 유사
* 간결하고 가독성 높음
* HTML 태그와의 가장 큰 차이는 속서값을 작성하는 방법
```javascript
<div className="box">
    <Title text="hello world" width={200} />
    <button onClick={() => {}}>좋아요</button>
    <a href="/home" style={{ marginTop: '10px', color: 'red' }}>
        홈으로 이동
    </a>
</div>
```
* HTML에서 class, JSX에서 className
* Title은 리액트 컴포넌트
    * JSX에서는 돔 요소와 리액트 컴포넌트를 같이 사용할 수 있음
    * text, width라는 두 개의 속성값을 입력받음
    * width처럼 문자열 리터럴이 아닌 속성값은 중괄호를 사용해서 입력
* 리액트에서는 이벤트 처리 함수를 호출할 때 브라우저에 상관없이 통일된 이벤트 객체(SyntheticEvnet)를 전달
* JSX에서도 직접 스타일을 적용, 카멜 케이스를 이용
```
simple3 를 simple4 로 전환하는 과정에서 상단한 얘를 먹였다.
문제는 src/simple4.js 코드 하단에 ReactDom을 호출해서 해당 요소를 연결해주는 코드 부분을 빼먹었다는 것이다.
그러고도 React.DOM 을 react.DOM 으로 적어서 구동이 안되었다.
chatGPT는 이런 부분을 곧잘 뽑아내지만 조금은 자존심이 상했다...
집중해보자 !!
```
#### JSX 문법을 바벨로 컴파일하기
```bash
# 필요한 패키지를 설치하고
npm install @babel/core @babel/cli @babel/preset-react
# 이 명령어를 실행하면 바벨이 JSX 문법을 컴파일해서 html 파일 상에서 실행할 수 있게 해준다.
npx babel --watch src --out-dir . --presets @babel/preset-react
```
### 1.2.3 웹팩의 기본 개념 이해하기
* 웹팩(webpack)은 자바스크립트로 만든 프로그램을 배포하기 좋은 형태로 묶어주는 도구
#### ESM 문법 익히기
* ESM 폴더 아래의 파일들 참조
### 1.2.4 웹팩 사용해보기
* webpack-test 라는 폴더를 생성
* `npm init -y `
* `npm install webpack webpack-cli react react-dom`
##### 클래스형 컴포넌트와 함수형 컴포넌트
* 클래스형 컴포넌트는 함수형 컴포넌트가 할 수 있는 모든 일을 할 수 있따.
* 함수형 컴포넌트는 다음을 할 수 없다.
    * 상탯값을 가질 수 없다.
    * 리액트 컴포넌트의 생명 주기 함수를 작성할 수 없다.
* 리액트 버전 16.8부터 훅(hook) 기능이 추가되면서 함수형 컴포넌트에서도 상탯갑소가 생명 주기 함수 코드를 작성할 수 있게 되었다.
* 새로운 프로젝트를 만든다면 클래스형 컴포넌트를 지양하고 함수형 컴포넌트를 만드는게 좋다.
##### `npx webpack`
## 1.3 create-react-app으로 시작하기
### 1.3.1 create-react-aoo 사용해 보기
`npx create-react-app cra-test`
* npm 버전이 낮아서 실행이 안된다면
`npm install -g create-react-app`
`create-react-app cra-test`
* 해당 디렉토리로 이동해서 프로젝트 실행
`cd cra-test`
`npm start`