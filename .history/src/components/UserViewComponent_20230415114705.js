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

    renameUser(id){
        this.popUp(id)
    }

    popUp(id){

    }

    handleClose = () => {
        this.setState({ show: false }); // Method to close the modal
      };
    
      handleInputChange = (event) => {
        const { id, value } = event.target;
        this.setState({ [id]: value }); // Update state based on input field ID
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
                                    <td><button type="button" className="btn btn-primary" onClick={()=> this.setState({show:true})}>Rename User </button></td>
                                </tr>
                                )
                        }
                    </tbody>

                </table>
                {this.state.show && (
          <div
            className="modal fade show"
            tabIndex="-100"
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
                    onClick={this.handleClose}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    {/* Render your input fields here */}
                    <div className="form-group">
                      <label htmlFor="field1">Field 1</label>
                      <input
                        type="text"
                        className="form-control"
                        id="field1"
                        placeholder="Enter Field 1"
                        value={this.state.field1}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="field2">Field 2</label>
                      <input
                        type="text"
                        className="form-control"
                        id="field2"
                        placeholder="Enter Field 2"
                        value={this.state.field2}
                        onChange={this.handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="field3">Field 3</label>
                      <input
                        type="text"
                        className="form-control"
                        id="field3"
                        placeholder="Enter Field 3"
                        value={this.state.field3}
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
                    onClick={this.handleClose}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.handleClose}
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