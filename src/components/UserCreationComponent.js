import React from "react";
import UserService from "../services/UserService";

class UserCreationComponent extends React.Component {
    constructor(props){
        super(props)
        this.state={
          firstName:"",
          lastName:"",
          email:"",
          password:"",
        }
    }

    postCreatedUser  = (firstName, lastName, email, password) => {
      this.setState({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
      });
      this.post(firstName, lastName, email, password);
  }


  async post(firstName, lastName, email, password){
    UserService.postCreatedUser(firstName,lastName,email, password);
    };

    postData() {  
      const firstName =document.getElementById("exampleInputFirstName").value;
      const lastName=document.getElementById("exampleInputLastName").value;
      const email= document.getElementById("exampleInputEmail").value;
      const password= document.getElementById("exampleInputPassword").value;
      if(this.checkDataBeforePosting(firstName, lastName, email, password)){
        // Send data to the backend via POST
        this.postCreatedUser(firstName, lastName, email, password);
      }
      else{
        alert("Invalid or incomplete entry!");
      }
    }
    //TODO: magical variable for length checking
    checkDataBeforePosting(firstName, lastName, email, password){
      if(firstName <1 || lastName <1 || email <1 || password <8){
        return false;
      }else{
        return true;
      }

    }
    
    render() {

        return(
          <div className="container">
            <h1>Create new User</h1>
            <form>

              <div className="form-group">
                <div style={{textAlign:"left"}}>
                  <label  htmlFor="exampleInputEmail1"> FirstName</label>
                </div>
                <input type="text" className="form-control" id="exampleInputFirstName"  placeholder="First Name"/>
              </div>

              <div className="form-group">
                <div style={{textAlign:"left"}}>
                  <label htmlFor="exampleInputLastName">LastName</label>
                </div>
                <input type="text" className="form-control" id="exampleInputLastName" placeholder="Last Name"/>
              </div>

              <div className="form-group">
                <div style={{textAlign:"left"}}>
                  <label htmlFor="exampleEmail">Email</label>
                </div>
                <input type="email" className="form-control" id="exampleInputEmail" placeholder="Email"/>
              </div>

              <div className="form-group">
                <div style={{textAlign:"left"}}>
                  <label htmlFor="examplePassword">Password</label>
                </div>
                <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password"/>
              </div>

            <div style={{position:"fixed",bottom:"680px",right:"50%"}}>
              <button type="submit" className="btn btn-primary" onClick={()=>this.postData()}>Create User</button>
            </div>
          
            </form>
          </div>
          
          
      );
    
    }
    
    
}    
export default UserCreationComponent;