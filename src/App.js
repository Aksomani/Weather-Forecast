import './App.css';
import Search from './components/search/Search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState, useEffect } from 'react';
import Forecast from './components/Forecast/Forecast';
import axios from 'axios';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = axios.get(`${WEATHER_API_URL}/weather`, {
      params: {
        lat,
        lon,
        appid: WEATHER_API_KEY,
        units: 'metric' 
      }
    });

    const forecastFetch = axios.get(`${WEATHER_API_URL}/forecast`, {
      params: {
        lat,
        lon,
        appid: WEATHER_API_KEY,
        units: 'metric' 
      }
    });

    axios.all([currentWeatherFetch, forecastFetch])
      .then(axios.spread((currentWeatherResponse, forecastResponse) => {
        setCurrentWeather({ city: searchData.label, ...currentWeatherResponse.data });
        setForecast({ city: searchData.label, ...forecastResponse.data });
      }))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    console.log("forecast", forecast);
  }, [forecast]);

  return (
    <div className="container">
      <Search onSearchChange={handleSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
