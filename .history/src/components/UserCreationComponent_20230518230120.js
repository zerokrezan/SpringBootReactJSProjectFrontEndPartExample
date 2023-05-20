import React from "react";
import axios from "axios"; 
import { Alert } from "bootstrap";

class UserCreationComponent extends React.Component {
    constructor(props){
        super(props)
        this.state={
          firstName:"",
          lastName:"",
          email:""
        }
    }

    post  = (firstName, lastName, email) => {
      this.setState({
      firstName: firstName,
      lastName: lastName,
      email: email
      });
    // },() => {
    //   await axios.post(
    //     'http://localhost:8080/api/newUser',
    //     {
    //       // data to sent to the server - post body
    //       // it can be an empty object
    //     },
    //     {
    //       // specify query parameters
    //       params: {
    //         firstName: this.state.firstName,
    //         lastName: this.state.lastName,
    //         email: this.state.email
    //       },
    //     }
    //   ); 
    // });
  }

  async post(firstName, lastName, email){
    const postCreatedUser = await axios.post(
        'http://localhost:8080/api/newUser',
        {
          // data to sent to the server - post body
          // it can be an empty object
        },
        {
          // specify query parameters
          params: {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email
          },
        }
      ); 
      console.log(postCreatedUser)
      return postCreatedUser;
    };

  

  async getUsers(){
    const users = await axios.get(USERS_REST_API_URL, {
     auth: {
       username: "rezanbahar@hotmail.de",
       password: "123456"
     }
   });
    console.log({users});
    return users;
   }

    postData() {  
      const firstName =document.getElementById("exampleInputFirstName").value;
      const lastName=document.getElementById("exampleInputLastName").value;
      const email= document.getElementById("exampleInputEmail").value;
      if(this.checkDataBeforePosting(firstName, lastName, email)){
        // Send data to the backend via POST
        this.post(firstName, lastName, email);
      }
      else{
        alert("Invalid or incomplete entry!");
      }
    }

    checkDataBeforePosting(firstName, lastName, email){
      if(firstName <1 || lastName <1 || email <1){
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

            <div style={{position:"fixed",bottom:"680px",right:"50%"}}>
              <button type="submit" className="btn btn-primary" onClick={()=>this.postData()}>Create User</button>
            </div>
          
            </form>
          </div>
          

          
        
        // <div>
        // style={{
        //   textAlign: 'center',
        //   width: '100px',
        //   border: '1px solid gray',
        //   borderRadius: '5px'
        // }}>
        //   <button type="button" className="btn btn-light" onClick={()=> this.handleClick()}>Send data to backend</button >
        // </div>
      );
    
    }
    
    
}    
export default UserCreationComponent;