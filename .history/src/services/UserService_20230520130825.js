import axios from "axios";

const USERS_REST_API_URL = 'http://localhost:8080/api/users';

class UserService{
      async getUsers(){
       const users = await axios.get(USERS_REST_API_URL, {
        auth: {
          username: localStorage.getItem('username'),
          password: localStorage.getItem('password')
        }
      });
       console.log({users});
       return users;
      }
    /* getUsers() {
        console.log('Fetching users from API');
        return axios.get(USERS_REST_API_URL)
          .then(response => {
            console.log('Received response from API:', response);
            return response.data;
          })
          .catch(error => {
            console.error('Error fetching users from API:', error);
            throw error;
          });
      } */
}

export default new UserService();