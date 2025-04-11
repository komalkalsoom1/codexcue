import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import axios from 'axios';

const App = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windSpeed, setWindSpeed] = useState(null);
  const [cityName, setCityName] = useState("");
  const [weatherIcon, setWeatherIcon] = useState("01d");

  const API_KEY = "2cbacb641ae2922370381839d819fa45";

  const fetchWeather = async () => {
    if (!search) return;
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`
      );

      setTemperature(data.main.temp);
      setHumidity(data.main.humidity);
      setWindSpeed(data.wind.speed);
      setCityName(data.name);
      setWeatherIcon(data.weather[0].icon);
    } catch (error) {
      console.log("Error fetching weather:", error);
      setCityName("City not found");
      setTemperature(null);
      setHumidity(null);
      setWindSpeed(null);
      setWeatherIcon("01d");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-900 to-black text-white font-sans p-4">
      
      {/* Search Bar */}
      <div className="flex items-center bg-white rounded-full px-5 py-2 mb-10 w-80 shadow-lg text-black">
        <input
          type="text"
          placeholder="Search city..."
          className="flex-1 outline-none bg-transparent text-lg placeholder-gray-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
        />
        <IoSearch
          className="cursor-pointer text-xl hover:text-blue-600 transition duration-200"
          onClick={fetchWeather}
        />
      </div>

      {/* Weather Icon */}
      <img
        src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt="weather icon"
        className="w-20 h-20 mb-2"
      />

      {/* Temperature*/}
      <h1 className="text-6xl font-bold mb-2">
        {temperature !== null ? `${temperature}°C` : "--"}
      </h1>
       {/* City Name */}
      <h2 className="text-2xl font-semibold text-gray-300 mb-8">
        {cityName || "Search for a city"}
      </h2>

      {/* Humidity & Wind */}
      <div className="flex gap-10">
        {/* Humidity */}
        <div className="w-[200px] flex flex-col items-center bg-white/10 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
          <WiHumidity className="text-4xl text-cyan-300 mb-1" />
          <span className="text-xl font-semibold">
            {humidity !== null ? `${humidity}%` : "--"}
          </span>
          <p className="text-sm text-gray-300">Humidity</p>
        </div>

        {/* Wind Speed */}
        <div className="w-[200px] flex flex-col items-center bg-white/10 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
          <WiStrongWind className="text-4xl text-blue-300 mb-1" />
          <span className="text-xl font-semibold">
            {windSpeed !== null ? `${windSpeed} km/h` : "--"}
          </span>
          <p className="text-sm text-gray-300">Wind Speed</p>
        </div>
      </div>

      {/* Loading */}
      {loading && <p className="mt-4 text-gray-400 text-sm">Loading...</p>}
    </div>
  );
};

export default App;
