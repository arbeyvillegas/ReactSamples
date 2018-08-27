import React from 'react';

export default class SpeedLimit extends React.Component {

  handleChange = e => {
    this.props.onSpeedLimitChange(e.target.value);
  };

  render() {
    return (
      <fieldset>
        <legend>Enter speed limit in kph:</legend>
        <input type="number" onChange={this.handleChange} />
      </fieldset>
    );
  }
}
