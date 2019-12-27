import React, { Component } from 'react';
import Axios from 'axios';
import Display from './Components/Display/Display';
import Form from './Components/Form/Form';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      positions: [],
      form: false
    }
  }

  componentDidMount() {
    this.get()
  }

  get = () => {
    Axios.get('/api/positions').then(res => this.setState({positions: res.data}))
  }

  switchForm = () => {
    this.setState({form: !this.state.form})
  }

  render() {
    
    return (
      <div className="App">
        {/* Header Component here */}
        {this.state.form ? <Form get={this.get} position={{}} switchForm={this.switchForm} /> : <button onClick={this.switchForm}>Add</button>}
        {this.state.positions.map(element => <Display get={this.get} position={element} />)}
        {/* Footer Component here */}
      </div>
    );
  }
}

export default App;
