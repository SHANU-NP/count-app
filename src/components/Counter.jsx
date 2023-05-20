import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; 

export default class Counter extends Component {

    state = {
        count : 0,
        tags : ['tag1','tag2','tag3']
    }

    counterFormater(){
        const {count} = this.state
        return count === 0 ? 'zero' : count;
    }

    getClasses(){
        const {count} = this.state
        let classes = "badge m-2 badge-"
        classes += count === 'zero' ? "warning" : "primary"
        return classes;
    }


render() {
    return (
      <div>

        <span className={this.getClasses()}>{this.counterFormater()}</span>
        <button className="btn btn-secondary">increment</button>
        <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>

      </div>
    )
  }
}
