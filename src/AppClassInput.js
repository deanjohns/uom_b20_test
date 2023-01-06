import './App.css';
import React, { Component } from 'react';

class AppClassInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div className='input_main'>
        <input className='app_input' name="name" value={this.props.name} onChange={e => this.props.changeName(e.target.value)} />
      </div>
    )
  }

}

export default AppClassInput;