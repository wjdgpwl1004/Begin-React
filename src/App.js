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
