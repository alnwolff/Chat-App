import React, { Component } from 'react'

export default class Login extends Component {

    handleChange = e => {
        const value = e.target.value;
        this.props.setUser(value)
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.history.push('/chat')
    }

    render() {
        return (
            <div className='login-box'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Please type your Name</label>
                    <input
                        type='text'
                        name='username'
                        onChange={this.handleChange}
                        required
                    />
                    <button id='login-bttn' type='submit'>Enter to the chat!</button>
                </form>
            </div>
        )
    }
}
