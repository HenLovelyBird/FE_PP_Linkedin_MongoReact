import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import ErrorMessage from './Alerts/ErrorMessage'
import LoginTranslator from './LoginTranslator'
import {  connect } from "react-redux"
import {loginWithThunk} from "../actions/user"



const mapStateToProps = state => state

const mapDispatchToProps = dispatch =>({

  handlelogin: (user,pass) => dispatch(loginWithThunk(user,pass)) 

})

let divStyle ={
    position: "absolute",
    top: "28%",
    left: "32%",
    border: "0.5px solid gray",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    backgroundColor: "white",
    padding: "50px",
    width: "500px",
    height: "300px"
}

let labelStyle = {
    width: "80px",
    fontWeight: "bold",
    fontSize: "16"
}

let btnStyle = {
    borderRadius: '10%',
    backgroundColor: "#0088D9",
    border: "none"
}

class Login extends Component {
    state = { 
        token: {
            username: '',
            password: '',
            
        },
        error: false
    }

    handleChange = (ev) => {
        this.state.token[ev.target.id] = ev.target.value
    }

    login = async()=>{
        this.setState({
            error: false
        })
        // let usersToken = btoa(this.state.token.username + ":" + this.state.token.password)
        let response = await fetch(`http://localhost:7000/profiles/username/${this.state.token.username}`)
        if(response.ok){
            // this.props.history.push('/Profile')
            console.log("response ok")
            this.props.handleLogin(this.state.token.username,this.state.token.password)
        } else {
            this.setState({
                error: true
            })
        }
    }

    render () {
        return ( 
            <div style={divStyle}>
            <Form inline>
                <Row className="mb-2"> 
                    <LoginTranslator />
                    <Col md="4">
                        <Label style={labelStyle}>Login</Label>
                    </Col>
                    <Col md="8">
                        <Input onChange={this.handleChange } type="text" name="email" id="username" placeholder="user420" />
                    </Col>
                </Row>
                <Row className="mb-2">
                    <Col md="4">
                        <Label style={labelStyle}>Password</Label>
                    </Col>
                    <Col md="8">
                        <Input onChange={this.handleChange} type="password" name="password" id="password" placeholder="don't tell!" />
                    </Col>
                </Row>
          </Form>
          <div style={{marginLeft: "150px", marginTop: "40px"}}>
          <Button style={btnStyle} onClick={()=>this.props.handlelogin(this.state.token.username,this.state.token.password)}>Submit</Button>
          </div>
          {!this.props.utils.loggedIn && <ErrorMessage style={{height: "70px", fontSize: "12px"}} />}
           {/* {this.props.utils.loggedIn && <ErrorMessage style={{height: "70px", fontSize: "12px"}} />}  */}


          </div>
         );

         
    }

    ///////////////////////////////////////////////////////////
    //small form with sign up button//

    

}
 
export default connect(mapStateToProps,mapDispatchToProps)(Login);