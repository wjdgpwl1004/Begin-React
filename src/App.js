import React from 'react';
import Hello from './Hello'; //Hello컴포넌트를 가져온다,.js는 생략가능
import Wrapper from './Wrapper';

//주석
function App() {

//주석주석
//{}로 감싸주는 이유? - true도 자바스크립트 값이기 때문
// isSpecial 이라고만 하면, 기본값이 true로 들어간다. isSpecial = {true} 와 같음
 return (
    <Wrapper>
      <Hello name="react" color="red" isSpecial /> 
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
