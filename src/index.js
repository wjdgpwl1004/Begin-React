import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ContextSample from './ContextSample';
import Hello from './Hello';
import Counter from './Counter';

//id가 root인 것을 찾아 리액트 앱을 넣어준다.
//ReactApp을 랜더링할때는 root엘리먼트(div)안에 랜더링하는 것이다.
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
