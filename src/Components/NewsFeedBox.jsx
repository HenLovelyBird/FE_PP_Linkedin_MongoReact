import React, { Component, Row } from 'react';
import { Toast, ToastBody, ToastHeader, Col } from 'reactstrap';
import {  FaBars } from "react-icons/fa";

let Toaststyle ={
    width : "900px",
    height : "250px"
}

class NewsFeedBox extends Component {
    state= { 
        isDelete: false,
        comment: []
        
    }// we are doing this to make the delete work autonmatically withouy refreshing the page
    delete = async()=>{
        let username = "user21";
        let password = "2ruxa4MRJdUgg6cz";
        let token = btoa(username + ":" + password);
        let response = await fetch("http://localhost:7000/posts/" + this.props.newsData._id,{
              method: "DELETE",
            
          }) 
          console.log(response)
          this.setState({isDelete: true})
          return response
         
    }

    // postComment = async()=>{
    //     get id of post
    //     map
    //     let response = await fetch("http://localhost:7000/comments/:postId/",{
    //         method: "POST"
    //     })
    //     if (response )
    //     console.log(response)
    //     this.setState({postComment: true})
    //     return response
    // }
// get id of the post

    // uploadPucture=async()=> {
    //     var formData = new FormData();
    //     console.log(this.state.file)
    //     formData.append("profile", this.state.file)
    //     try{
    //         let response = await fetch("http://localhost:7000/profiles/:username/picture",{
    //             method: "POST",
    //             body: formData
                
    //         })
    //         let result = await response.json();
    //     } catch(err) {
    //         console.log(err)
    //     }
    //     this.props.modalOpen()
    // }
    render() {
        console.log(this.props)
        return this.state.isDelete === false? ( 
            <Col md="6">
                 <Toast style={Toaststyle} style={{marginTop: '20px'}}>
                <div className="mx-5 float-right" > <FaBars />
                        </div>
                    <ToastHeader>
                        <div>{this.props.newsData.username}</div>
                    </ToastHeader>
                    <ToastBody>{this.props.newsData.text}
                    </ToastBody>
                    <button style={{marginLeft: "5"}}onClick={this.delete}>Delete</button>
                    
                    <Toast><ToastHeader><ToastBody>Comment: </ToastBody></ToastHeader></Toast>
                </Toast>
            </Col>

        ): (" ");
    }
}

export default NewsFeedBox;