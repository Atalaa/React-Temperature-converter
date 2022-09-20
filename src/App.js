import React, { useState } from 'react';
import './style.css';
import TemperatureConverter from './TemperatureConverter';

//Parent
export default function App() {
  const unitTable = {
    c: 'Celsius',
    f: 'Fahrenheit',
  };

  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  function handleCelsiusChange(e) {
    //👇️ take parameter passed from Child component
    setCelsius(e.target.value);
    setFahrenheit(toFahrenheit(e.target.value));
  }
  function handleFahrenheitChange(e) {
    //👇️ take parameter passed from Child component
    setFahrenheit(e.target.value);
    setCelsius(toCelsius(e.target.value));
  }

  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  return (
    <>
      <TemperatureConverter
        unit={unitTable.c}
        value={celsius}
        onChangeProps={handleCelsiusChange}
      />
      <TemperatureConverter
        unit={unitTable.f}
        value={fahrenheit}
        onChangeProps={handleFahrenheitChange}
      />
    </>
  );
}
