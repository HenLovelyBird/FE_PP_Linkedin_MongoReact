import React, { Component } from 'react';
import {Container} from 'reactstrap'
import Main from './Main'
import Login from './Login'

class App extends Component {
    state = { 
        loggedIn: false
    }
    handleLogin = () => {
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    }
    render() { 
        return ( 
            <Container fluid className="px-0">
                {this.state.loggedIn ? 
                    <Main />
                    :
                    <Login handleLogin={this.handleLogin} history={this.props.history}/>
                }
            </Container>

        );
    }
}
 
export default App