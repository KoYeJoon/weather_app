import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//같은 경로에 (src)에 있는 App.js를 가져와서 사용할 것이라는 의미 
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
