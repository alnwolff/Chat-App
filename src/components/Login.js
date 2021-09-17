import React, { Component } from 'react'

export default class Login extends Component {

    handleChange = e => {
        const value = e.target.value;
        this.props.setUser(value)
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.history.push('/chat')
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Please type your name</label>
                    <input 
                        type='text'
                        name='username'
                        onChange={this.handleChange}
                        required
                    />
                    <button type='submit'>Enter to the Chat!</button>
                </form>
            </div>
        )
    }
}
