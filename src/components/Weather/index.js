import React from "react";


// Stateless component

class Weather extends React.Component {
    //1. class 형태로 변경하여서 cities처럼해서 didMount했을 때 fetch  선택 도시의 날씨 

    //2. react Hook << 검색
    //state, setState

 
  state = {
    city : "",
    weather : "",
    detailWeather : "",
    temperature : "",
  };


  componentDidMount() {
    console.log("Weather component");
    const {weatherDescription} = this.state;
    const { cityName } = this.props.match.params;
    this.setState({
      city : cityName,
    })
    const WeathersData = fetch(`http://localhost:8080/weather-service/weathers?cityName=${cityName}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          weather : data.weather[0].main,
          detailWeather : data.weather[0].description,
          temperature : data.main.temp,
        });      
      }
      )
      .catch((err) => console.warn("Error:", err));

 
  }


  
   
  render() { 
    const {city} = this.state;
    const {weather} = this.state;
    const {detailWeather} = this.state;
    const {temperature} = this.state;
    const celsius = (temperature - 273.15).toFixed(2); // kelvin to celsius

    if (weather == ''){
    return (
      <div>
       <h2>cityName : {city}</h2>
        <p>There is no Data ! </p>
      </div>
    )
  }

  else {
    return (
      <div>
      <h2>[Weather Description about {city}]</h2>
      <p> cityName : {city}</p>
      <p> weather : {weather}</p>
      <p> detail Weather : {detailWeather}</p>
      <p> temperature : {celsius} </p>
    </div>
  );
  }
};

}

export default Weather;