import React, { useState } from "react";

const AddCity = ({ handleSubmit, handleInputChange, newCity }) => {
  const [error, setError] = useState("");

  const validateForm = (value) => {
    if (!value.trim()) {
      setError("City name cannot be empty");
      return false;
    }
    if (!/^[a-zA-Z\s]+$/.test(value)) {
      setError("City name should only contain letters and spaces");
      return false;
    }
    setError("");
    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm(newCity)) {
      handleSubmit(e);
    }
  };

  const onChange = (e) => {
    handleInputChange(e);
    if (error) {
      validateForm(e.target.value);
    }
  };
  return (
    <form className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md" onSubmit={onSubmit}>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="w-full sm:w-2/3">
          <input className={`w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 transition duration-300 ease-in-out ${error ? "border-red-500 focus:ring-red-500" : "focus:ring-teal-500"}`} placeholder="Type your favorite city" type="text" onChange={onChange} value={newCity} />
          {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
        <button className="w-full sm:w-1/3 bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50" type="submit">
          Add City
        </button>
      </div>
    </form>
  );
};

export default AddCity;
