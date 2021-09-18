import React, { Component } from 'react'

export default class MessageList extends Component {

    state = {
        last10 : []
    }

    timeConverter = timestamp => {
        var a = new Date(timestamp);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = (a.getMinutes()<10?'0':'') + a.getMinutes()
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
        return time;
    }

    getLast10 = messages => {
        const last10 = messages.slice(-10)
        this.setState({
            last10: last10
        })
    } 

    scrollToBottom = () => {
        this.messagesEnd.scrollIntoView();
    }

    componentDidMount() {
        this.getLast10(this.props.messages)
    }

    componentDidUpdate(prevProps) {
        if (this.props.messages !== prevProps.messages) {
          this.getLast10(this.props.messages)
        }
        if (this.state.last10.length > 0) {
                    this.scrollToBottom();
                }
      }

    render() {
        return (
            <ul className='message-box'>
                {this.state.last10.map((message) => {
                    return (
                        <li key={message._id}>
                            {message.author === this.props.user ? (
                                <div className='user-message'>
                                    <div>
                                        <p>{message.message}</p>
                                        <p className='date right'>{this.timeConverter(message.timestamp)}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className='others-message' key={message._id}>
                                <div>
                                    <p id='author'>{message.author}</p>
                                    <p>{message.message}</p>
                                    <p className='date'>{this.timeConverter(message.timestamp)}</p>
                                </div>
                                </div>
                            )}
                            <div style={{ float:"left", clear: "both" }}
                                ref={(el) => { this.messagesEnd = el; }}>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}
