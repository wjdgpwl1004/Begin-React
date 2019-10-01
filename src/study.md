#### 1. 나의 첫번째 리엑트 컴포넌트
- src 디렉토리에 Hello.js  파일을 생성한다.
- 컴포넌트는 class컴퍼넌트와 함수형 컴포넌트 두 가지 방식이 존재한다.
- 이번에는 함수형 컴포넌트 방식으로 진행한다.
```javascript
import React from 'react';
function Hello(){
  return <div>안녕하세요</div>;
}

export default Hello;
```

- 컴포넌트의 이름은 대문자로 시작한다.
- 컴포넌트에서 JSX를 리턴한다.
  - HTML처럼 생겼지만 HTML은 아니다.
- Hello 컴포넌트를 export default를 통해 다른곳에서도 사용할 수 있도록 내보내준다.

##### 컴포넌트 사용하기
App.js
- Hello 컴포넌트를 import를 통해서 불러온다.
  - 이때 컴포넌트의 경로는 상대경로로 지정하며, js는 생략한다.
- 생성한 컴퍼넌트는 여러번 재사용 할 수 있다.

```javascript
import React from 'react';
import Hello from './Hello'; //Hello컴포넌트를 가져온다,.js는 생략가능
import './App.css'

//주석
function App() {
 const name = 'react';
 const style ={
  backgroundColor:'black',
  color:'aqua',
  fontSize:24,
  padding: '1rem'
 };
//주석주석
 return (
      <Hello />
  );
}

export default App;
```

##### 리엑트 앱의 랜더링
Index.js
- React App을 랜더링 하기 위해서는 React App을 감싸는 Root Element가 필요하다.
- id가 root인 엘리먼트를 찾아 리엑트 앱을 랜더링한다.

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
```
public/index.html
```html
<html>
  <body>
    <!-- 여기에 리엑트 앱을 랜더링한다. -->
    <div id="root"></div>
  </body>
  </html>
```





# JSX
- 리엑트의 UI를 꾸미는데 사용
- 자바스크립트의 문법 확장이다.
- 바벨을 이용해 JSX로 만든 xml을 자바스크립트로 변환해준다.

## JSX 규칙
- 1. 태그를 열었다면, 닫아주어야 한다. ex)<Hello />
- 2. 2개 이상의 태그는 감싸는 태그가 존재해야 한다. 의미없는 <div>로 감싸지 않고,
fragment를 사용할수도 있다. ex)<> </>
- 3. 자바스크립트로 선언한 변수를 JSX안에 넣을때는 {변수명} 으로 표현한다.
- 4. 인라인 스타일을 넣고자 한다면, 아래 예시처럼 style 객체를 만들고 style={style} 와 같이 선언하면 된다.
- 5. 클래스를 넣고자 한다면, className="클래스명"이라고 입력한다.

```javascript
function App() {
 const name = 'react';
 const style ={
  backgroundColor:'black',
  color:'aqua',
  fontSize:24,
  padding: '1rem'
 };
//주석주석
 return (
    <>
    {/*주석은 이렇게 */}
      <Hello 
      //이렇게 주석
      />
      <div //주석쓰 
       className="gray-box" style={style}>{name}</div>
    </>
  );
}
```

# props를 통해 컴포넌트에게 값 전달하기.

