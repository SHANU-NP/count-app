import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 

class Counter extends Component {

state = {
        count : 0
    }


handleIncrement = () => {
    this.setState({
      count : this.state.count + 1
    })
}

getCounter(){
    return this.state.count === 0 ? "Zero" : this.state.count;
}



render() {
    return (
      <div>

        <span className='badge badge-primary m-3'>{this.getCounter()}</span>
        <button onClick={this.handleIncrement}>increment</button>

        </div>
    )
  }
}

export default Counter;
