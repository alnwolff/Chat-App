import React, { Component } from 'react';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import axios from 'axios';

export default class ChatScreen extends Component {

    state = {
        messages: []
    }

    getMessages = () => {
        axios.get(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0?token=${process.env.REACT_APP_API_KEY}`)
            .then(response => {
                this.setState({
                    messages: response.data
                })
            })
    }
    
    componentDidMount() {
        this.getMessages()
    }

    render() {
        return (
            <div className='chat-container'>

                <MessageList user={this.props.user} messages={this.state.messages}/>

                <SendMessageForm user={this.props.user} getMessages={this.getMessages} />

            </div>
        )
    }
}
