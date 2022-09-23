import React, { useState, useReducer } from 'react';
import './style.css';
import TemperatureConverter from './TemperatureConverter';

//State object
const initialState = {
  celsius: 0,
  fahrenheit: 0,
};

//Reducer
function reducer(state, action) {
  switch (action.type) {
    case 'changed_celsius_value':
      return {
        ...state,
        celsius: action.newCelsius,
        fahrenheit: action.newFahrenheit,
      };
    case 'changed_fahrenheit_value':
      return {
        ...state,
        fahrenheit: action.newFahrenheit,
        celsius: action.newCelsius,
      };
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

//Parent
export default function App() {
  const [initialVal, dispatch] = useReducer(reducer, initialState);

  //Dispatcher
  function handleCelsiusChange(e) {
    dispatch({
      type: 'changed_celsius_value',
      newCelsius: e.target.value,
      newFahrenheit: toFahrenheit(e.target.value),
    });
  }

  //Dispatcher
  function handleFahrenheitChange(e) {
    dispatch({
      type: 'changed_fahrenheit_value',
      newFahrenheit: e.target.value,
      newCelsius: toCelsius(e.target.value),
    });
  }

  //Utilities
  function toCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function toFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  return (
    <>
      <TemperatureConverter
        unit={'Celsius'}
        value={initialVal.celsius}
        onChangeProps={handleCelsiusChange}
      />
      <TemperatureConverter
        unit={'Fahrenheit'}
        value={initialVal.fahrenheit}
        onChangeProps={handleFahrenheitChange}
      />
    </>
  );
}
