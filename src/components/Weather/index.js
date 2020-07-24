import React from "react";
// Stateless component
const Weather = (props) => {
    //1. class 형태로 변경하여서 cities처럼해서 didMount했을 때 fatch  선택 도시의 날씨 

    //2. react Hook << 검색
    //state, setState


  const { cityName } = props.match.params;
  console.log(cityName);
  
  return (
    <div>
      <h1>Weather : {cityName}</h1>
      <p>Here is front page.!</p>
    </div>
  );
};
export default Weather;