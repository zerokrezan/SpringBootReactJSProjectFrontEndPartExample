import React from "react";
import UserService from "../services/UserService";
import axios from "axios";

class UserViewComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           users:[], 
           show: false, // State to handle modal show/hide
           inputFirstName: "", // State for input field 1
           inputLastName: "", // State for input field 2
           inputEmail: "", // State for input field 3
           currentUserID: 0
        }
        
    }

    componentDidMount(){
      UserService.getUsers().then((response) =>{
        this.setState({users: response.data})
        });
    }

    deleteUserByID(id){
        axios.delete('http://localhost:8080/api/users', {
             params: { 
                id: id
            },
          }
          );
        window.location.reload(true)  
    }

    renameUser = (id) => {
      this.setState({
        currentUserID: id,
        show: true})
    }

    updateUserByID(id){
      axios.put(`http://localhost:8080/api/users`, null, {
        params: {
          id: id,
          firstName: this.state.inputFirstName,
          lastName: this.state.inputLastName,
          email: this.state.inputEmail
      }
    })

    }
    

 

    handleClose = (id) => {
      this.setState({
        show: false,
        currentUserID: id
      })
        //this.updateUserByID(id)
        //this.setState({ show: false }); // Method to close the modal
        //this.setState({currentUserID: null})
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
        

        //element.hidden = true;
        //element.setAttribute('disabled', 'true');
        //alert(element.id);
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
                            <td>User Id</td>
                            <td>User First Name</td>
                            <td>User Last Name</td>
                            <td>User Email</td>
                            <td>Delete</td>
                            <td>Rename</td>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td><button type="button" className="btn btn-primary" //style={{backgroundColor:"rgb(255,0,0)"}}
                                     onClick={()=> this.deleteUserByID(user.id)}>Delete User <span class="bi bi-trash-fill" 
                                    style={{fontSize: "1rem", color: "rgb(255, 0, 0)"}}></span></button></td>
                                    <td><button type="button" className="btn btn-primary" onClick={()=> this.renameUser(user.id)}>Rename User </button></td>
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
                  <h5 className="modal-title">Popup Title</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={()=>this.handleClose(this.state.currentUserID)}
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
                    onClick={()=>this.handleClose(this.state.currentUserID)}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={()=>this.handleClose(this.state.currentUserID)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

                

            </div>
        )
    } 

}

export default UserViewComponent;