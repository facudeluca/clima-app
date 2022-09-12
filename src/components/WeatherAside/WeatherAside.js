import React from "react";

function WeatherAside(dataWeather) {
  return (
    <div className="weatherDetails">
      <h4>Detalles del clima</h4>
      <div className="detailsContainer">
        <div className="detail">
          <p>Nubosidad</p>
          {dataWeather.clouds ? (
            <>
              <h5>{dataWeather.clouds.all}%</h5>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="detail">
          <p>Viento</p>
          {dataWeather.wind ? (
            <>
              <h5>{Math.ceil(dataWeather.wind.speed * 3.6)}km/h</h5>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="detail">
          <p>Sensación térmica</p>
          {dataWeather.main ? (
            <>
              <h5>{Math.ceil(dataWeather.main.feels_like)}°</h5>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="detail">
          <p>Humedad</p>
          {dataWeather.main ? (
            <>
              <h5>{dataWeather.main.humidity}%</h5>
            </>
          ) : (
            ""
          )}
        </div>
        <div className="detail">
          <p>Visibilidad</p>
          {dataWeather.main ? (
            <>
              <h5>{dataWeather.visibility}m</h5>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default WeatherAside;
