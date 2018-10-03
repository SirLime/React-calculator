import React, { Component } from "react";
import { Button } from "./components/Button";
import { Display } from "./components/Display";
import * as math from "mathjs";

class App extends Component {
  state = { inputValue: "", result: "" };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleEqual = () => {
    this.setState({
      inputValue: +math.eval(this.state.inputValue).toFixed(10)
    });
  };

  clearInput = () => {
    this.setState({
      inputValue: ""
    });
  };

  changeInput = value => {
    this.setState({ inputValue: this.state.inputValue + value });
  };

  render() {
    return (
      <div className="app">
        <div className="calculator">
          <Display input={this.state.inputValue} />
          <input onChange={this.handleChange} value={this.state.inputValue} />
          <div className="row">
            <Button handleClick={this.changeInput}>7</Button>
            <Button handleClick={this.changeInput}>8</Button>
            <Button handleClick={this.changeInput}>9</Button>
            <Button handleClick={this.changeInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.changeInput}>4</Button>
            <Button handleClick={this.changeInput}>5</Button>
            <Button handleClick={this.changeInput}>6</Button>
            <Button handleClick={this.changeInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.changeInput}>1</Button>
            <Button handleClick={this.changeInput}>2</Button>
            <Button handleClick={this.changeInput}>3</Button>
            <Button handleClick={this.changeInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.changeInput}>0</Button>
            <Button handleClick={this.changeInput}>.</Button>
            <Button handleClick={this.handleEqual}>=</Button>
            <Button handleClick={this.changeInput}>+</Button>
          </div>
          <Button handleClick={this.clearInput}>clear</Button>
        </div>
      </div>
    );
  }
}

export default App;
