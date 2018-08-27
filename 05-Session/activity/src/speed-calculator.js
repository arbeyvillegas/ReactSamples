import React from 'react';
import SpeedInput from './speed-input';
import SeepdResult from './speed-result';
import SpeedLimit from './speed-limit';

export default class SpeedCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { speed: '', measurement: 'kph', speedLimit: '' };
  }

  handleKmsChange = speed => {
    this.setState({ measurement: 'kph', speed });
  };

  handleMilesChange = speed => {
    this.setState({ measurement: 'mph', speed });
  };

  handleSpeedLimitChange = limit => {
    this.setState({ speedLimit: limit });
  };

  toKilometers(mph) {
    return mph * 1.6093;
  }

  toMiles(kph) {
    return kph / 1.6093;
  }

  tryConvert(speed, convert) {
    const input = parseFloat(speed);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }

  render() {
    const measurement = this.state.measurement;
    const speed = this.state.speed;
    const kph =
      measurement === 'mph' ? this.tryConvert(speed, this.toKilometers) : speed;
    const mph =
      measurement === 'kph' ? this.tryConvert(speed, this.toMiles) : speed;

    let content = null;
    if (this.state.speedLimit && this.state.speedLimit !== '') {
      content = (
        <div>
          <SpeedInput
            measurement="kph"
            speed={kph}
            onSpeedChange={this.handleKmsChange}
          />
          <SpeedInput
            measurement="mph"
            speed={mph}
            onSpeedChange={this.handleMilesChange}
          />
          <SeepdResult speed={kph} limit={parseFloat(this.state.speedLimit)} />
        </div>
      );
    }

    return (
      <div>
        <SpeedLimit onSpeedLimitChange={this.handleSpeedLimitChange} />
        {content}
      </div>
    );
  }
}
