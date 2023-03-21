import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      step: 0,
    };
  }

  handleStepChange = (event) => {
    this.setState({ step: parseInt(event.target.value) });
  };

  handleIncrement = () => {
    const { count, step } = this.state;
    if (step > 0) {
      this.setState({ count: count + step });
    }
  };

  handleDecrement = () => {
    const { count, step } = this.state;
    if (step > 0 && count >= step) {
      this.setState({ count: count - step });
    }
  };

  render() {
    const { count, step } = this.state;
    return (
      <div>
        <h1 style={{marginLeft: "10px"}}>Steps</h1>
          <input className="step-input" type="number" min="0" value={step} style={{ marginLeft: "20px", width: "100px", height: "20px" }} onChange={this.handleStepChange} />
       <div className="counter-wrapper">
            <h2 style={{marginLeft: "10px"}}>Counter</h2>
          <button className="counter-button" style={{ padding: "13px", marginLeft: "20px", backgroundColor: "red", color: "white", fontSize: "20px" }} onClick={this.handleDecrement} disabled={count === 0}>
            -
          </button>
          <span className="counter-value" style={{marginLeft:"20px"}}>{count}</span>
          <button className="counter-button" style={{ padding: "13px", marginLeft: "20px", backgroundColor: "green", color: "white", fontSize: "20px"  }} onClick={this.handleIncrement} disabled={step === 0}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
