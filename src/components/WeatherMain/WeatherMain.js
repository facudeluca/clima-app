import React from "react";
import Forecast from "../Forecast/Forecast";

function WeatherMain({ dataWeather, dataForecast}) {
  return (
    <div className="weatherMain">
      {dataWeather.main?
      <>
            <div className="principalInfo">
              <h2>{Math.round(dataWeather.main.temp)}°</h2>
              <h3 className="name">{dataWeather.name}, {dataWeather.sys.country}</h3>
              <div className="principalIcon">
              <img src={`/${dataWeather.weather[0].icon}.svg`} width="50px" height="50px"/>
              <h3>{dataWeather.weather[0].description}</h3>
              </div>
            </div>    
             <Forecast data={dataForecast} dataWeather={dataWeather}/>           
      </>
    :''}
    </div>
  );
}

export default WeatherMain;
