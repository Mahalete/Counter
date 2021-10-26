import React, { Component } from "react";

class Main extends Component {
  state = {
    counter: 0,
  };
  addOneHandler = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  removeOneHandler = () => {
    this.setState({ counter: this.state.counter - 1 });
  };
  resetHandler = () => {
    this.setState({ counter: 0 });
  };

  addFiveHandler = () => {
    this.setState({ counter: this.state.counter + 5 });
  };
  removeFiveHandler = () => {
    this.setState({ counter: this.state.counter - 5 });
  };

  render() {
    let circleClass = `${
      this.state.counter === 0
        ? ""
        : this.state.counter % 2 === 0
        ? "even"
        : "odd"
    } circle`;
    return (
      <div>
        <h2 className={circleClass}>{this.state.counter}</h2>
        <button onClick={this.addOneHandler}>Add one</button>
        <button onClick={this.removeOneHandler}>Remove</button>
        <button onClick={this.resetHandler}>Reset</button>
        <button onClick={this.addFiveHandler}> Add Five</button>
        <button onClick={this.removeFiveHandler}> Remove Five</button>
      </div>
    );
  }
}

export default Main;
