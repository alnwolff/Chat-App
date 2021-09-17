import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {

    handleLogout = () => {
        this.props.setUser('');
    }

    render() {
        return (
            <section className='header'>
                <p id='logo'>Chat App!</p>
                {this.props.location.pathname === '/chat' ? 
                    <Link to='/' onClick={() => this.handleLogout()}><p>Leave the Chat</p></Link> 
                    : <></>
                }
            </section>
        )
    }
}

export default withRouter(NavBar);