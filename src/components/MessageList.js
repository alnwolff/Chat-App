import React, { Component } from 'react'

export default class MessageList extends Component {

    timeConverter = UNIX_timestamp => {
        var a = new Date(UNIX_timestamp);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = (a.getMinutes()<10?'0':'') + a.getMinutes()
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
        return time;
    }

    render() {
        return (
            <ul className='message-box'>
                {this.props.messages.map((message) => {
                    return (
                        <li key={message._id}>
                            {message.author === this.props.user ? (
                                <div className='user-message'>
                                    <div>
                                        <p>{message.message}</p>
                                        <p className='date'>{this.timeConverter(message.timestamp)}</p>
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
                        </li>
                    )
                })}
            </ul>
        )
    }
}
