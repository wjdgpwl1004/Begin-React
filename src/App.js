import React from 'react';
import Hello from './Hello'; //Hello컴포넌트를 가져온다,.js는 생략가능
import Wrapper from './Wrapper';

//주석
function App() {

//주석주석
 return (
    <Wrapper>
      <Hello name="react" color="red" />
      <Hello color="pink" />
    </Wrapper>
  );
}

export default App;
