import React, { Component } from 'react';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import axios from 'axios';

export default class ChatScreen extends Component {

    state = {
        messages: []
    }

    getMessages = () => {
        axios.get(`https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=${process.env.AWESOME_UNIQUE_TOKEN}`)
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
            <div>
                <MessageList messages={this.state.messages}/>
                <SendMessageForm />
            </div>
        )
    }
}
