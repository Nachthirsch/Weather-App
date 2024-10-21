import React, { useEffect, useState } from "react";
import axios from "axios";

import Weather from "./components/Weather.js";
import AddCity from "./components/AddCity.js";
import ShowWeather from "./components/ShowWeather.js";
import Watermark from "./components/Watermark.js";

function App() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity(city);
  };

  const addCity = async (city) => {
    await axios.post("/api/cities", { city });
    getCities();
    setCity("");
  };

  const getCities = async () => {
    const { data } = await axios("/api/cities");
    const cities = data.cities.map((city) => city.city_name);
    setCities(cities);
  };

  const getWeather = async (city) => {
    const { data } = await axios(`/api/weather/${city}`);
    setWeather(data);
  };

  useEffect(() => {
    getCities();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:py-20">
      <header className="mb-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-light text-gray-800 mb-2">Weather Dashboard</h1>
        <p className="text-sm text-gray-600">Current weather for your favorite cities</p>
      </header>

      <AddCity handleSubmit={handleSubmit} handleInputChange={(e) => setCity(e.target.value)} newCity={city} />

      <div className="mt-12">
        <Weather cities={cities} handleSelectCity={(e) => getWeather(e.target.value)} />
      </div>

      {weather && (
        <div className="mt-12">
          <ShowWeather data={weather} />
        </div>
      )}

      <Watermark />
    </div>
  );
}

export default App;
