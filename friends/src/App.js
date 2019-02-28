import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

// Components
import Friend from './Components/Friend';
import FriendForm from './Components/FriendForm';
import EditForm from './Components/EditForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      friends: [],
      updating: false,
      updatingFriend: {
        name: '',
        age: 0,
        email: ''
      }
    }
  }


  
  componentDidMount () {
    axios.get('http://localhost:5000/friends')
    .then(response => this.setState({friends: response.data}))
    .catch(err => console.log(err));
  }

  addNewUser = (name, age, email) => {
    axios.post('http://localhost:5000/friends', { name, age, email })
      .then(res => this.setState({friends: res.data}))
      .catch(err => console.log(`Something's amiss. ${err}`))
  };

  updateUser = (id) => {
    const updatingFriend = this.state.friends.filter(friend=> friend.id === id)[0];
    this.setState(prevState => ({friends: prevState.friends, updating: true, updatingFriend}));
  }

  changeUser = (name, age, email, id) => {
    axios.put(`http://localhost:5000/friends/${id}`, { name, age, email })
      .then(res => this.setState({updating: false, friends: res.data}))
      .catch(err => console.log(err));
  }

  deleteUser = (id) => {
    console.log(`You are deleting person with ID: ${id}`);
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    let isUpdating = this.state.updating;
    let form;
    if (isUpdating) {
      form = <EditForm updatingFriend={this.state.updatingFriend} changeUser={this.changeUser}/>
    } else {
      form = <FriendForm addNewUser={this.addNewUser} />
    }

      return (
        <div className="App">
          {form}
          {this.state.friends.map((friend) => {
          return (
            <Friend key={friend.id} friend={friend} updateUser={this.updateUser} deleteUser={this.deleteUser} />
          );
        })}
        </div>
      );
    }
}

export default App;
