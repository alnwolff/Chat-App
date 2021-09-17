import React, { Component } from 'react';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';

export default class ChatScreen extends Component {

    state = {
        messages: []
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
