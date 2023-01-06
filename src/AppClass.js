import './App.css';
import React, { Component } from 'react';
import AppClassInput from './AppClassInput';

class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    }
  }

  componentDidMount() {
    this.setState({ name: "My default Class name" });
  }

  changeName = (value) => {
    this.setState({ name: value });
  }

  render() {
    return (
      <div className='app_main'>
        <h1 className='app_header'>{this.state.name}</h1>
        <AppClassInput name={this.state.name} changeName={this.changeName} />
      </div>
    )
  }

}

export default AppClass;