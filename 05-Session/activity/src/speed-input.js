import React from 'react';

export default class SpeedInput extends React.Component {

  constructor(props) {
    super(props);
    this.state = { speed: '' };
  }

  handleChange = e => {
    this.props.onSpeedChange(e.target.value);
  };

  render() {
    const speed = this.props.speed;
    const measurement = this.props.measurement;
    return (
      <fieldset>
        <legend>Enter speed in {measurement}:</legend>
        <input value={speed} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
