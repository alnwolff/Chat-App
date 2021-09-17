import React, { Component } from 'react'

export default class MessageList extends Component {
    render() {
        return (
            <ul>
               {this.props.messages.map(message => {
                   return (
                       <li>
                           <div>
                               <p>{message.author}</p>
                               <p>{message.message}</p>
                           </div>
                       </li>
                   )
               })} 
            </ul>
        )
    }
}
