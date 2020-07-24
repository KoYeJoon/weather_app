import React from 'react';
//import Math from './Math';
//./Math.js해도 되고 뒤에 js안붙여도됨
//sum이ㅣ라는 함수를 가져오지만 add라는 이름을 사용하겠다
//import {sum as add,multiple} from './Math';
import { BrowserRouter } from 'react-router-dom';
import RouterApp from "./RouterApp";
import Header from './components/Header';
import './App.css';



function App() {
  //같은이름 사용하면 충돌날 수 있음
  //const sum = 'SUM!';

  //console.log(sum);
  //console.log(add);
  //console.log(multiple);
  //<Header /> : module을 바로 넣을 수 있음
  const cityName = "Seoul";

  return (
    <BrowserRouter>
    <div className="App">
      <RouterApp />
    </div>
    </BrowserRouter>
  );
}

export default App;