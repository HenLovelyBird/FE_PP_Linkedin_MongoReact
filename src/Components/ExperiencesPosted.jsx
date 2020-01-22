import React from 'react';

class ExperiencesPosted extends React.Component {
    state = {
      isDeleted: false,

    }

    delete = async()=>{
        let username = "user16";
        let password = "c9WEUxMS294hN6fF";
        let token = btoa(username + ":" + password);
        let response = await fetch("https://striveschool.herokuapp.com/api/profile/user16/experiences/" + this.props.allExp._id,{
              method: "DELETE",
              headers: {
                  "authorization" : "Basic " + token,
              }
          }) 
          console.log(response)
          this.setState({isDeleted: true});
          return response }
    render() {
    
        return this.state.isDeleted !=true ? (
        <div className="userexperiences mt-5">
        <ul className="explist">
          <li>{this.props.allExp.company}</li>
          <li>{this.props.allExp.role}</li>
          <li>{this.props.allExp.startDate}</li>
          <li>{this.props.allExp.description}</li>
          <li>{this.props.allExp.area}</li>
        </ul>
        <div className="ml-4">
          <button id="deleteexperience" onClick={this.delete}>Delete</button>
        </div>
      </div>
        ) : (<div>Your Post was Deleted!</div>)
        
}

}


export default ExperiencesPosted;
