import React, { Component } from 'react';
import { Toast, ToastBody, ToastHeader, Col } from 'reactstrap';
import {  FaBars, FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";



let Toaststyle ={
    width : "900px",
    height : "250px"
}


class NewsFeedBox extends Component {
    state= { 
        isDelete: false,
        liked: false,
        count:0
    };

countUpdate=async()=>{
    try {
        const responce = await fetch("http://localhost:7000/likes/".concat(this.props.newsData._id))
        if(responce.ok){
            const totalLikes = await responce.json()
            this.setState({
                count: totalLikes.LikesCount
            })

            
        }
    } catch (error) {
        console.log(error)
    }

}

componentDidMount= async ()=>{
    await this.countUpdate()
  

};



    like = async ()=>{
        try {
            const responce = await fetch(`http://localhost:7000/likes/addlike/${this.props.newsData._id}/test 4`,{
                method: "POST"
            })
            if(responce.ok){
                const totalLikes = await responce.json()
                this.setState({
                    
                    liked:true
                })
                await this.countUpdate()
            }
        } catch (error) {
            console.log(error)
        }
    
    }

    unlike = async  ()=>{
        try {
            const responce = await fetch(`http://localhost:7000/likes/deletelike/${this.props.newsData._id}/test 4`,{
                method: "DELETE"
            })
            if(responce.ok){
                const totalLikes = await responce.json()
                this.setState({
                    
                    liked:false
                })

                await this.countUpdate()
            }
        } catch (error) {
            console.log(error)
        } 
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
                {

                  this.state.liked===false ? <FaRegThumbsUp size={25} onClick={this.like}/> : <FaThumbsUp size={25} onClick={this.unlike}/>

                }
                {this.state.count<=1 ? <span>{this.state.count} like</span> : <span>{this.state.count} likes</span>}
                
            </Col>

        ): (" ");
 
 
 
    }



    // we are doing this to make the delete work autonmatically withouy refreshing the page
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
}

export default NewsFeedBox;