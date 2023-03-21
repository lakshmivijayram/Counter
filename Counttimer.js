import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 0,
      timerID: null,
      inputDisabled: false
    };
  }

  handleInputChange = event => {
    this.setState({ timeLeft: parseInt(event.target.value) });
  };

  startTimer = () => {
    const timerID = setInterval(() => {
      if (this.state.timeLeft > 0) {
        this.setState(prevState => ({
          timeLeft: prevState.timeLeft - 1,
          inputDisabled: true
        }));
      } else {
        clearInterval(timerID);
        this.setState({ inputDisabled: false });
      }
    }, 1000);
    this.setState({ timerID });
  };

  render() {
    return (
      <div className="App">
        <h1>Countdown Timer</h1>
        <input type="number" value={this.state.timeLeft} style={{padding: "5px"}} onChange={this.handleInputChange} disabled={this.state.inputDisabled}/>&nbsp;
        <button onClick={this.startTimer} style={{padding: "5px", width: "70px"}} disabled={this.state.inputDisabled}>
          Start
        </button>
        <div className="countdown" style={{left: "-41px", position: "relative"}}>{this.state.timeLeft}</div>
      </div>
    );
  }
}

export default App;
