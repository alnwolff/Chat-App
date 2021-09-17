import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class NavBar extends Component {

    handleLogout = () => {
        this.props.setUser('');
        console.log(this.props.location.pathname);
    }

    render() {
        return (
            <section className='header'>
                <p id='logo'>Chat App!</p>
                {this.props.location.pathname === '/chat' ? 
                    <Link to='/' onClick={() => this.handleLogout()}><p className='logout'>Leave the Chat</p></Link> 
                    : <></>
                }
            </section>
        )
    }
}

export default withRouter(NavBar);