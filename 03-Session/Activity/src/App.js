import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function ColorContainer({color}) {
  const className = "color-container color-" + color;
  return <div className={className}></div>
}

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black"
    }
  }

  render() {
    return(
      <div className="color-picker">
        <div className="button-container">
          <button className="color-blue"   onClick={() => this.setState({ color: 'blue'})}></button>
          <button className="color-green"  onClick={() => this.setState({ color: 'green'})}></button>
          <button className="color-red"    onClick={() => this.setState({ color: 'red'})}></button>
          <button className="color-yellow" onClick={() => this.setState({ color: 'yellow'})}></button>          
        </div>
        <ColorContainer color={this.state.color}/>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Color Picker Challange</p>
        </header>
        <ColorPicker />
      </div>
    );
  }
}

export default App;
