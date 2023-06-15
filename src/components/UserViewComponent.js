import React from "react";
import UserService from "../services/UserService";

//[x]Update PopUp with title of the current user to be customized

//[x]optimize all axios-http requests (which belongs to User's operations) with needed auth and await attribute-> get all from UserService

class UserViewComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           users:[], 
           show: false,
           inputFirstName: "", 
           inputLastName: "", 
           inputEmail: "",  
           currentUserFirstName: null,
           currentUserLastName: null,
           currentUserEmail: null,
        }
    }

    componentDidMount(){
      UserService.getUsers().then((response) =>{
        this.setState({users: response.data})
        console.log(this.state.users)
        
        });
    }

    deleteUserByID(id){
        UserService.deleteUserById(id)
        window.location.reload(true)  
    }

    renameUser = (email, firstName, lastName) => {
      this.setState({
        currentUserFirstName: firstName,
        currentUserLastName: lastName,
        currentUserEmail: email,
        show: true})
    }

    updateUserByID(id){
      UserService.updateUserById(this.state.inputFirstName,this.state.inputLastName,id)
      window.location.reload(true)

    }
    
    handleClose = () =>{
      this.updateUserByID(this.state.currentUserEmail)
      this.handlePureClose()
    }

    handlePureClose = () => {
      this.setState({
        show: false,
        inputFirstName:"",
        inputLastName:"",
        inputEmail:""
      })
        
      };
    
    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({ [name]: value }); // Update state based on input field ID
      };

    disableTableContent() {
        
        const users = document.getElementById('users');
        const tbody = users.querySelectorAll('tbody');  
        for(let i=0; i<tbody.length;i++) { 
            tbody[i].hidden=true; 
        }
        
      };

    enableTableContent(){
        // window.location.reload(true) is equivalent to below:
       
        const users = document.getElementById('users');
        const tbody = users.querySelectorAll('tbody'); 
        for(let i=0; i<tbody.length;i++) { 
            tbody[i].hidden=false; 
        }

    }
    
    render(){
        return (
            <div className = "container">
                <h1 className = "text-center">Users List</h1> 
                <div className="">
                    <button type="button" className="btn btn-light" id="disableButton" onClick={()=> this.disableTableContent()}>Disable </button>
                    <button type="button" className="btn btn-light" onClick={()=> this.enableTableContent()}>Enable</button >
                </div>
        
                
                <table className="table table-striped" id="users">
                    <thead style={{color : "rgb(60, 179, 113)" }}>
                        <tr>
                            <td>User Email</td>
                            <td>User First Name</td>
                            <td>User Last Name</td>
                            <td>Delete</td>
                            <td>Rename</td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                          Array.isArray(this.state.users) && this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td><button type="button" className="btn btn-primary" //style={{backgroundColor:"rgb(255,0,0)"}}
                                     onClick={()=> this.deleteUserByID(user.id)}>Delete User <span className="bi bi-trash-fill" 
                                    style={{fontSize: "1rem", color: "rgb(255, 0, 0)"}}></span></button></td>
                                    <td><button type="button" className="btn btn-primary" onClick={()=> this.renameUser(user.id, user.firstName, 
                                      user.lastName)}>Rename User </button></td>
                                </tr>
                                )
                                
                        }
                    </tbody>

                </table>
                {this.state.show && (
          <div
            className="modal fade show"
            tabIndex="-1"
            role="dialog"
            style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  {
                    
                    <h5 className="modal-title">
                    <span style={{ fontSize: '20px', fontWeight: 'bold' }}>Rename User:</span>
                    <br />
                    <span style={{ paddingLeft: '180px',fontSize: '14px', display: 'inline-block', color: 'gray',whiteSpace: 'pre-wrap',}}>
                       {this.state.currentUserFirstName} {this.state.currentUserLastName} {this.state.currentUserEmail}
                    </span>
                  </h5> 
                  
                  
                 }
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={()=>this.handlePureClose()}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    {/* Render your input fields here */}
                    <div className="form-group">
                      <label htmlFor="inputFirstName">FirstName</label>
                      <input
                        type="text"
                        className="form-control"
                        name="inputFirstName"
                        placeholder="Enter FirstName"
                        value={this.state.inputFirstName}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputLastName">LastName</label>
                      <input
                        type="text"
                        className="form-control"
                        name="inputLastName"
                        placeholder="Enter LastName"
                        value={this.state.inputLastName}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="inputEmail">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        name="inputEmail"
                        placeholder="Enter Email"
                        value={this.state.inputEmail}
                        onChange={this.handleInputChange}
                      />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={()=>this.handlePureClose()}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={()=>this.handleClose(this.state.currentUserEmail)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) }
            </div>
        )
    } 

}
export default UserViewComponent
