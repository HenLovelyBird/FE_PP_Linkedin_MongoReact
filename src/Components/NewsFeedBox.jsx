import React, { Component } from 'react';
import { Toast, ToastBody, ToastHeader, Col } from 'reactstrap';
import {  FaBars } from "react-icons/fa";

let Toaststyle ={
    width : "900px",
    height : "250px"
}

class NewsFeedBox extends Component {
    state= { 
        isDelete: false
        
    }// we are doing this to make the delete work autonmatically withouy refreshing the page
    delete = async()=>{
        let username = "user21";
        let password = "2ruxa4MRJdUgg6cz";
        let token = btoa(username + ":" + password);
        let response = await fetch("https://striveschool.herokuapp.com/api/posts/" + this.props.newsData._id,{
              method: "DELETE",
              headers: {
                  "authorization" : "Basic " + token,
              }
          }) 
          console.log(response)
          this.setState({isDelete: true})
          return response
         
    }
    render() {
        console.log(this.props)
        return this.state.isDelete === false? ( 
            <Col md="4">
                 <Toast style={Toaststyle}>
                <div className="mx-5 float-right"> <FaBars />
                        </div>
                    <ToastHeader>
                        <div>{this.props.newsData.username}</div>
                    </ToastHeader>
                    <ToastBody>{this.props.newsData.text}
                    <img src={this.props.newsData.image} />
                    </ToastBody>
                    
                    <button onClick={this.delete}>Delete</button>
                </Toast>
            </Col>

        ): (" ");
    }
}

export default NewsFeedBox;