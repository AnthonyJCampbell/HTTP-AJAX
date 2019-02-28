import React, { Component } from 'react';

class FriendForm extends Component {
    constructor () {
        super();

        this.state = {
            nameInput: '',
            ageInput: 0,
            emailInput: '',
        };
    }


    postHandler = (event) => {
        event.preventDefault();
        this.props.addNewUser(
            this.state.nameInput, 
            Number(this.state.ageInput),
            this.state.emailInput,
        );
    }

    nameChange = (event) => {
        this.setState({
            nameInput: event.target.value,
        })
    }
    ageChange = (event) => {
        this.setState({
            ageInput: event.target.value,
        })
    }
    emailChange = (event) => {
        this.setState({
            emailInput: event.target.value,
        })
    }

    render() {
        return (
            <form>
                <h2>Add A Friend:</h2>
                Name <input type="text" onChange={this.nameChange}/><br/>
                Age <input type="number" min="18" max="100" onChange={this.ageChange} /><br/>
                Email <input type="text" onChange={this.emailChange} /><br/>
                <button onClick={this.postHandler}>Add Friend</button>
            </form>
        )
    };
}

export default FriendForm;
