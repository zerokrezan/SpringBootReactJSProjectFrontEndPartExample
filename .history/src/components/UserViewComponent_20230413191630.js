import React from "react";
import UserService from "../services/UserService";
import axios from "axios";

class UserViewComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           users:[] 
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

    hideUsers(){
        this.setState({users: null})
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
                            <td>Actions</td>
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
                                </tr>
                                )
                        }
                    </tbody>

                </table>

            </div>
        )
    } 

}

export default UserViewComponent;