import React, { Component } from 'react';
import axios from 'axios';

export default class SendMessageForm extends Component {
    state = {
        message: ''
    }

    handleChange = e => {
        const value = e.target.value;
        this.setState({
            message: value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const message = this.state.message;
        const author = this.props.user;

        if (message.length > 0 ){
            axios.post(
                `https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0?token=${process.env.REACT_APP_API_KEY}`, 
                {"message": message,"author": author}, 
                {headers: {'Content-Type': 'application/json'}}
                )
                .then(response => {
                    this.props.getMessages()
                    this.setState({
                        message: ''
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }

        
    }

    render() {
        return (
            <div id='form-container'>
                <form onSubmit={this.handleSubmit}>

                    <input
                        type= 'text'
                        name= 'new-message'
                        id= 'new-message'
                        value= {this.state.message}
                        placeholder='Message'
                        onChange= {this.handleChange}
                    />

                    <button type='submit'>Send</button>
                    
                </form>
            </div>
        )
    }
}
