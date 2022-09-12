import React from "react";
import moment from "moment";
import {FaChevronCircleRight} from 'react-icons/fa'

function Forecast({ data, dataWeather }) {
  return (
    <div className="forecast">
      {dataWeather.main ? (
        <div>
          <h4>AHORA</h4>
          <img
            src={`/${dataWeather.weather[0].icon}.svg`}
            width="50px"
            height="50px"
          />
          <h4>{Math.round(dataWeather.main.temp)}°</h4>
        </div>
      ) : (
        ""
      )}

      {data.list
        ? data.list
            .filter((item, i) => i < 9)
            .map((forecast, i) => (
              <div key={i}>
                <h4>{moment(forecast.dt * 1000).format("HH")}hs</h4>
                <img
                  src={`/${forecast.weather[0].icon}.svg`}
                  width="50px"
                  height="50px"
                />
                <h4>{Math.round(forecast.main.temp)}°</h4>
              </div>
            ))
        : ""}

<FaChevronCircleRight className="chevron"/>

    </div>
  );
}

export default Forecast;
