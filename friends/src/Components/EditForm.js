import React, { Component } from 'react'

class EditForm extends Component {
    constructor (props) {
        super(props);

        this.state = {
            nameInput: props.updatingFriend.name,
            ageInput: props.updatingFriend.age,
            emailInput: props.updatingFriend.email,
            id: 0,
        };
    }

    componentDidUpdate = () => {
        const id = this.props.updatingFriend.id;
        if (id !== this.state.id) {
            this.setState({
                nameInput: this.props.updatingFriend.name,
                ageInput: this.props.updatingFriend.age,
                emailInput: this.props.updatingFriend.email,
                id,
            })
        }
    }
    postHandler = (event) => {
        event.preventDefault();
        console.log('it')
        this.props.changeUser(
            this.state.nameInput, 
            Number(this.state.ageInput),
            this.state.emailInput,
            this.state.id,
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
                <h2>Edit {this.state.nameInput}:</h2>
                New Name <input type="text" value={this.state.nameInput} onChange={this.nameChange}/><br/>
                New Age <input type="number" value={this.state.ageInput} min="18" max="100" onChange={this.ageChange} /><br/>
                New Email <input type="text" value={this.state.emailInput} onChange={this.emailChange} /><br/>
                <button onClick={this.postHandler}>Add Friend</button>
            </form>
        );
    }
}

export default EditForm;
