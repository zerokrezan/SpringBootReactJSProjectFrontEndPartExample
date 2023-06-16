import axios from 'axios';

//[x]after logout, old auth data from previous user should be deleted in localStorage

function UserLogoutForm(){
  async function logout() {
    const formData = new FormData();
    formData.append('username', localStorage.getItem('username'));
    formData.append('password', localStorage.getItem('password'));
    try {
          await axios.post('http://localhost:8080/api/logout', formData, {
            auth: {username: localStorage.getItem('username'),
                   password: localStorage.getItem('password')},
            headers: { 'Content-Type': 'multipart/form-data' } 
          });
          // Clear any stored authentication data from localStorage or other storage mechanisms if needed
        } catch (error) {
          console.log("error: ");
          // Handle error if necessary
        }
        
        console.log("logout is performed")
        localStorage.clear();
        console.log(localStorage.length)
        window.location.replace('/')
      };

    console.log(localStorage.length)
    if(localStorage.length>0){
      logout();
    }
  }

export default UserLogoutForm;