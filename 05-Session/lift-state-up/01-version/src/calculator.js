import React from 'react'
import ReactDOM from 'react-dom';
import BoilingVerdict from './boiling-verdict';

class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.state = {temperature: ''};
    }
  
    handleChange = (e) => {
      this.setState({temperature: e.target.value});
    }
  
    render() {
      const temperature = this.state.temperature;
      return (
        <fieldset>
          <legend>Enter temperature in Celsius:</legend>
          <input
            value={temperature}
            onChange={this.handleChange} />
  
          <BoilingVerdict
            celsius={parseFloat(temperature)} />
  
        </fieldset>
      );
    }
  }

  export default Calculator;