import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Container} from 'reactstrap';
import Navigation from './Navigation';
import Profile from './Profile';
import CurrentUserPage from './CurrentUserPage';
import Newsfeed from './Newsfeed';


class Main extends React.Component {

   
    render() {
        return (<>
            
            <Navigation logout={this.props.logout}/>
            
            <Container className="parentcontainer">
              
                    <Route path="/Profile" exact component={Profile} />
                    <Route path="/currentUserPage:userId" component={CurrentUserPage} />
                    <Route path="/" component={Newsfeed}/>
             
            </Container>   
       
        </>);
    }
}

export default Main;