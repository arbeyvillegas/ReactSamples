import React from 'react';
import TemperatureInput from './temperature-input';
import BoilingVerdict from './boiling-verdict';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}
