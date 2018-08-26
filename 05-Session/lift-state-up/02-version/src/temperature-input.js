import React from 'react';

export default class TemperatureInput extends React.Component {
  scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

  constructor(props) {
    super(props);
    this.state = { temperature: '' };
  }

  handleChange = e => {
    this.setState({ temperature: e.target.value });
  };

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {this.scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
