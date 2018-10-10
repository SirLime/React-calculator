import React, { Component } from "react";
import { Button } from "./components/Button";
import { Display } from "./components/Display";
import * as math from "mathjs";
import "./style.css";

class App extends Component {
  state = { inputValue: "0", waitingForOperand: true, dotIsEntered: false };

  isInputUnusual = () => {
    let inputValue = this.state.inputValue;
    return (
      inputValue === "0" || inputValue === "Error" || inputValue === "too much"
    );
  };

  clearInput = () => {
    this.setState({
      inputValue: "0",
      dotIsEntered: false
    });
  };

  changeInput = value => {
    if (this.state.inputValue.length < 10) {
      this.setState({
        inputValue: this.isInputUnusual()
          ? value
          : this.state.inputValue + value,
        waitingForOperand: false
      });
    }
  };

  signInput = value => {
    if (this.isInputUnusual()) {
      return;
    } else if (!this.state.waitingForOperand) {
      this.setState({
        inputValue: this.state.inputValue + value,
        dotIsEntered: false,
        waitingForOperand: true
      });
    } else {
      this.setState({
        inputValue: this.state.inputValue.toString().slice(0, -1) + value,
        waitingForOperand: true,
        dotIsEntered: false
      });
      console.log("slice");
    }
  };

  inputDot = () => {
    console.log("dot");
    let { inputValue, dotIsEntered } = this.state;

    if (!dotIsEntered || !inputValue.match(/\./)) {
      this.setState({
        inputValue: this.isInputUnusual()
          ? "0."
          : this.state.waitingForOperand
            ? inputValue + "0."
            : inputValue + ".",
        dotIsEntered: true
      });
    } else {
      return;
    }
  };

  handleEqual = () => {
    try {
      let result = (+math.eval(this.state.inputValue).toFixed(10)).toString();
      this.setState({
        inputValue: result
      });
    } catch (error) {
      this.setState({
        inputValue: "Error"
      });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="calculator">
          <Display className="display" input={this.state.inputValue} />

          <div className="keyboard">
            <div className="operators-row">
              <Button handleClick={this.clearInput}>C</Button>
              <Button handleClick={this.signInput}>/</Button>
              <Button handleClick={this.signInput}>*</Button>
              <Button handleClick={this.signInput}>-</Button>
            </div>
            <div className="numbers">
              <Button handleClick={this.changeInput}>7</Button>
              <Button handleClick={this.changeInput}>8</Button>
              <Button handleClick={this.changeInput}>9</Button>
              <Button handleClick={this.changeInput}>4</Button>
              <Button handleClick={this.changeInput}>5</Button>
              <Button handleClick={this.changeInput}>6</Button>
              <Button handleClick={this.changeInput}>1</Button>
              <Button handleClick={this.changeInput}>2</Button>
              <Button handleClick={this.changeInput}>3</Button>
            </div>
            <Button name="zero" handleClick={this.changeInput}>
              0
            </Button>
            <Button name="dot" handleClick={this.inputDot}>
              .
            </Button>
            <Button name="equal" handleClick={this.handleEqual}>
              =
            </Button>
            <Button name="plus" handleClick={this.signInput}>
              +
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
