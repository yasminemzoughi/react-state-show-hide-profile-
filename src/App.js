import './App.css';
import React, { Component } from 'react'
import Counter from './Components/Counter';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state =  { show : false};
  }
handlelCick = () => this.setState({show : !this.state.show})
  render() {
    return (
      <div className="App">
        <button onClick={this.handlelCick} >toggle</button>
        {
          this.state.show && <Counter/>
        }
      </div>
    )
  }
}
