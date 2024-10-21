import React from "react";

const ShowWeather = ({ data }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{data.name}</h2>
      <div className="mb-4">
        <img src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="Weather icon" className="w-20 h-20" />
      </div>
      <div className="flex items-center space-x-2 text-gray-700">
        <span className="text-lg">{data.weather[0].main}</span>
        <span className="text-3xl font-bold">{Math.floor(data.main.temp - 273.15)}&deg;C</span>
      </div>
    </div>
  );
};

export default ShowWeather;
