import React, { useState } from 'react';

//Child
export default function TemperatureConverter(props) {
  return (
    <fieldset>
      <legend>{props.unit}</legend>
      <br />
      <input value={props.value} onChange={props.onChangeProps} />
    </fieldset>
  );
}
