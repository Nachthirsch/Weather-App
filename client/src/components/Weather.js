import React from "react";

const Weather = ({ cities, handleSelectCity }) => {
  console.log(cities);
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg p-6 my-3">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Current Weather</h2>
      <div className="relative">
        <select onChange={handleSelectCity} className="block w-full appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 pr-8">
          {cities.length > 0 &&
            cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Weather;
