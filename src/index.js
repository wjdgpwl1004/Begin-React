import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Scss from './Scss';
import App from './react_router/App';
import { BrowserRouter } from 'react-router-dom';

//id가 root인 것을 찾아 리액트 앱을 넣어준다.
//ReactApp을 랜더링할때는 root엘리먼트(div)안에 랜더링하는 것이다.
ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>, 
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
