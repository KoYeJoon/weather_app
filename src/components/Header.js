import React from 'react';
import logo from '../logo.svg';


//es5 function인 경우 선언법
//function Header(props) {
//Arrow function
const Header = ({cityName}) => {

    //console.log(props);
    //props = {cityName : 'Seoul'}
    //console.log(props.cityName);

    //es5
    //const cityName = props.cityName;

    //es6
    /*props = {
        cityName : 'seoul'
    }
    */
   //const{cityName} = props;

    return(
        <header className="App-header">
        <div>{cityName}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
}

export default Header;