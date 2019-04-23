import React, {Component} from 'react'
import './Counter.css'
export class Counter extends Component {

  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  incrementCounter = () => {
    // Everytime you call setState, the render function is called automatically
    this.setState({
      count: this.state.count + 1
    })
  }

  decrementCounter = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Counter</h1>
        <div className="row">
          <button className="btn" onClick={this.decrementCounter}>-</button>
          <h2 className="counter">{this.state.count}</h2>
          <button className="btn" onClick={this.incrementCounter}>+</button>
        </div>
      </div>
    )
  }
}
