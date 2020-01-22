import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

import '../index.css'

class UpdateForm extends React.Component {

    state = { 
      experiences: ""
    }

    updateObj = (ev) => {
        let input = ev.target.value
        console.log("value", input)
        let idInput = ev.target.id
        console.log("id", idInput)
        this.state.profile[idInput] = input
        console.log(this.state)
    }

    handleSubmit = async(event) => {
      event.preventDefault()
      let username = "user16"
      let password = "c9WEUxMS294hN6fF"
      let token = btoa(username + ":" + password)
      let response = await fetch("https://striveschool.herokuapp.com/api/profiles/" + username, {
          method: "PUT",
          body: JSON.stringify(this.state.profile),
          headers: {
              "Authorization": "Basic " + token,
              "Content-Type" : "application/json"
          }
      })
      return response
    }

    render() { 
      console.log(this.state)
        return ( 
          <div className="modal-div">
          <div className="flex md-4 mr-5">
              <img className="modal-bg" src="https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg" alt="linkedIn background"></img>
          </div>
          <img src={this.props.profileInfo.image} className="modal-img" alt="profile pic"/>
          <Form className="update-form" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="examplePassword">Bio</Label>
            <Input type="text" onChange={this.updateObj} name="password" id="bio" placeholder={this.props.profileInfo.bio} />
          </FormGroup>
            <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" onChange={this.updateObj} name="email" id="email" placeholder={this.props.profileInfo.email} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Area</Label>
            <Input type="text" onChange={this.updateObj} name="password" id="area" placeholder={this.props.profileInfo.area} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Title</Label>
            <Input type="text" onChange={this.updateObj} name="password" id="title" placeholder={this.props.profileInfo.title} />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">ImageUrl</Label>
            <Input type="text" onChange={this.updateObj} name="password" id="image" placeholder={this.props.profileInfo.image} />
          </FormGroup>
        <Input
                  id="submitBtn"
                  type="submit"
                  class="btn btn-success"
                  value="SAVE"
                  onClick={this.props.closeModal}
              />
        </Form>
        </div>
        )
    }
    componentDidMount = async() => {
      this.setState({
        experiences: this.props.experiences
    })
  }
}
 
export default UpdateForm;