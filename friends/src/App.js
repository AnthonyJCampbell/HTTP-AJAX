import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  componentDidMount () {
    axios.get('http://localhost:5000/friends')
    .then(response => console.log(response))
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
