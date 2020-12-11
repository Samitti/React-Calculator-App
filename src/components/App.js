import React, { Component } from 'react';
import '../App.css';
import Display from './Display';
import ButtonPannel from './ButtonPannel';
import calculate from '../logic/calculate';

class App extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const result = calculate(this.state, buttonName);
    this.setState(result);
  }

  render() {
    const { next, total } = this.state;
    const result = next || total || '0';
    return (
      <div className="App">
        <h1 className="App-header">Calculator</h1>
        <Display result={result} />
        <ButtonPannel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
