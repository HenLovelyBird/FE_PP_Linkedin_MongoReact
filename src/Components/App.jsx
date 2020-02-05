import React, { Component } from "react";
import { Container, Row, Col, Fade } from "reactstrap";
import Main from "./Main";
import Login from "./Login";
import NewLogin from "./NewLogin";
import { connect } from "react-redux";
import { loginWithThunk } from "../actions/user";
import { BrowserRouter as Router, Switch } from "react-router-dom";


let divStyle = {
  position: "absolute",
  top: "28%",
  left: "32%"
  // border: "0.5px solid gray",
  // width: "500px",
  // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  // backgroundColor: "white",
  // padding: "50px",
  // height: "300px"
};

// const mapStateToProps = state => state
// const mapDispatchToProps = dispatch => ({
//   loadBooks: searchString => dispatch(loadWithThunk(searchString))
// })

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  handlelogin: (user, pass) => dispatch(loginWithThunk(user, pass))
});

class App extends Component {
  state = {
    isLoading: true,
    signup: false
    // currentuser: "",
    // currentpass: ""
  };

  keepSignUP = () => {
    this.setState({
      signup: true
    });
  };



  updateState = () => {
    this.setState({
      signup: false
    });
  };

  //  getCredentials = async (e) => {
  //     e.preventDefault();
  //     let username = document.querySelector("#username").value
  //     let password = document.querySelector("#password").value
  //     let response = await GetAPI(username, password)
  //     localStorage.setItem('username', username)
  //     localStorage.setItem('password', password)
  //     response ? this.setState({ logged: true }) : this.setState({ wrongPass: true })

  //   }

  handleLogin = (user, pass) => {
    this.setState({
      loggedIn: !this.state.loggedIn,
      currentuser: user,
      currentpass: pass
    });

    localStorage.setItem("username", this.state.currentuser);
    localStorage.setItem("password", this.state.currentpass);
  };

  // logout = () => {
  //   this.setState({ loggedIn: false });
  //   localStorage.clear();
  //   // localStorage.setItem('username', undefined)
  //   // localStorage.setItem('password', undefined)
  // };

  render() {
    console.log(this.props);
    return (
      <>
        <Router>
          {this.props.utils.loggedIn ? (
            this.state.isLoading ? (
              <Fade>
               
                <div>
                  <h4>Loading...</h4>
                </div>
              </Fade>
            ) : (
              <Switch>
                <Container fluid className="px-0">
                  {/* <Main logout={this.logout} /> */}
                  <Main />
                </Container>
              </Switch>
            )
          ) : (
            <Container>
              <Row className="ml-0">
                <Col>
                  <button
                    type="button"
                    className="btn btn-primary "
                    onClick={() => this.setState({ signup: true })}
                  >
                    Sign Up
                  </button>
                </Col>
              </Row>
              <Row className="mt-3 ml-0">
                <Col>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.setState({ signup: false })}
                  >
                    Login
                  </button>
                </Col>
              </Row>
            </Container>
          )}

          

          {!this.props.utils.loggedIn && this.state.signup && (
            <div className="container col-7">
              <NewLogin
                keepsignup={this.keepSignUP}
                updateState={this.updateState}
              />
            </div>
          )}
          {!this.state.signup && (

             !this.props.utils.loggedIn && (<Login history={this.props.history} />)
            // <Login handleLogin={this.handleLogin} history={this.props.history} />
          )
          
          
          }
        </Router>
      </>
    );
  }

  // componentDidUpdate=(prevProps,prevState)=>{
  //   if(prevState.isLoading)
  //   this.setState({
  //     isLoading: false
  //   })
  // }
  // resetLoader =()=>{
  //   this.setState({
  //     isLoading: false
  //   });
  // }

 

  componentDidMount = async () => {
    let savedUser = JSON.stringify(localStorage.getItem("username"));
    let passnow = JSON.stringify(localStorage.getItem("password"));

    if (savedUser && savedUser !== "undefined") {
      await this.props.handlelogin(JSON.parse(savedUser, passnow));
      this.setState({
        loggedIn: true
      });
      
     

      setTimeout(() => {
        this.setState({
          isLoading: false
        });
      }, 2000);
    }

    // if (localStorage.getItem("username") && !localStorage.getItem("username")===undefined) {
    //   let user1 = Object.values(localStorage)[0]
    //    this.props.handlelogin(localStorage.getItem("username"), localStorage.getItem("password"))
    //   console.log(localStorage.getItem("username"), localStorage.getItem("password"))
    //   // this.props.utils.loggedIn
    //   //   ? this.setState({
    //   //       loggedIn: true,
    //   //       currentuser: localStorage.getItem("username"),
    //   //       currentpass: localStorage.getItem("password")
    //   //     })
    //   //   : this.setState({ loggedIn: false });
    // } else {
    //   this.setState({ loggedIn: false });
    // }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
