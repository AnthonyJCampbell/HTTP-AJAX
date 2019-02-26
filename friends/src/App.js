import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

// Components
import Friend from './Components/Friend';
import FriendForm from './Components/FriendForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
    }
  }
  componentDidMount () {
    axios.get('http://localhost:5000/friends')
    .then(response => this.setState({friends: response.data}))
    .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <FriendForm />
        {this.state.friends.map((friend) => {
          return (
            <Friend key={friend.id} friend={friend}/>
          );
        })}
      </div>
    );
  }
}

export default App;
