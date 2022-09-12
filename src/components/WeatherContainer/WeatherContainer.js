import { useEffect, useState } from "react";
import useGeolocation from "../../Hooks/Location";
import WeatherMain from "../WeatherMain/WeatherMain";
import WeatherAside from "../WeatherAside/WeatherAside";
import Date from "../date/Date";
import { FiSearch } from "react-icons/fi";
import Error from "../Error/Error";
import {MoonLoader} from "react-spinners"

function WeatherContainer() {
  const [dataWeather, setDataWeather] = useState([]);
  const [dataForecast, setDataForecast] = useState([]);
  const [located, setLocated] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${located}&units=metric&appid=418a9653d7ea0e6790a8a59b42e2c7ff&lang=es`;
  const url5 = `https://api.openweathermap.org/data/2.5/forecast?q=${located}&lang=es&units=metric&appid=418a9653d7ea0e6790a8a59b42e2c7ff&lang=es`;
  const location = useGeolocation();
  const [bg, setBg] = useState("");
  const [error, setError]=useState(false);
  const [loading, setLoading]=useState(false)

  useEffect(() => {
    async function getLocation(){
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&units=metric&appid=418a9653d7ea0e6790a8a59b42e2c7ff&lang=es`
      )
        .then((res) => res.json())
        .then((data) => {
          setDataWeather(data);
          setBg(<video loop muted autoPlay playsInline id="bg-video">
          <source src={`/bg/${data.weather[0].icon}.mp4`} type="video/mp4"/>
          </video>);
          setLoading(false)
        })
        .catch((err) => console.log(err))
        .finally(setLoading(true))
    };
    getLocation();
    async function getLocationExtend(){
      await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&lang=es&units=metric&appid=418a9653d7ea0e6790a8a59b42e2c7ff&lang=es`
      )
        .then((res) => res.json())
        .then((data) => {
          setDataForecast(data);
        });
    };
    getLocationExtend();
  }, [location.loaded === true]);


  const searchLocation = (event) => {
    if ((located !== "" && event === "search") || (located!=="" && event.key === "Enter")) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setDataWeather(data);
          setBg('')
          setTimeout(()=>{
            setBg(<video loop muted autoPlay playsInline id="bg-video">
            <source src={`/bg/${data.weather[0].icon}.mp4`} type="video/mp4"/>
            </video>);
          },1)    
          setLoading(false)     
        })
        .catch(err => console.log(err), setError(true))
        .finally(setLoading(true))
      fetch(url5)
        .then((res) => res.json())
        .then((data) => {
          setDataForecast(data);
        });
        setLocated("");
    }
  };

  useEffect(()=>{
    if(dataWeather.main){
      setError(false)
    }
  },[dataWeather])
 

  return (
    <div className="weatherContainer">
   
    <div className="background">
    {bg}
    </div>     
      
      {loading?
      <div className="loader">
      <MoonLoader
      color="
      #36d7b7
      "
      size={120}
      />
      </div>:
      !error?
      <WeatherMain dataWeather={dataWeather} dataForecast={dataForecast} /> :
      <Error/>
      }
      
  
      
      <div className="aside">
        <div className="input">
          <input
            value={located}
            onChange={(event) => setLocated(event.target.value)}
            onKeyDown={searchLocation}
            placeholder="Buscar otra ciudad"
            type="text"
          />
          <button onClick={(event) => searchLocation("search")}>
            <FiSearch />
          </button>
        </div>

        <Date />
        <hr />
        <WeatherAside {...dataWeather} />
      </div>
    </div>
  );
}

export default WeatherContainer;
