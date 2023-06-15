import axios from "axios";

const USERS_REST_API_URL_USERS = 'http://localhost:8080/api/users';
const USERS_REST_API_URL_NEWUSER = 'http://localhost:8080/api/newUser';

class UserService{
      async getUsers(){
       const users = await axios.get(USERS_REST_API_URL_USERS, {
        auth: {
          username: localStorage.getItem('username'),
          password: localStorage.getItem('password')
        }
      });
       console.log({users});
       console.log(localStorage.getItem('username'));
       console.log(localStorage.getItem('password'));
       return users;
      }

      deleteUserById(id){
        axios.delete(USERS_REST_API_URL_USERS,{
          auth: {
            username: localStorage.getItem('username'),
            password: localStorage.getItem('password')
          },
          params: { 
                id: id
          }
          });
      }

      updateUserById(firstName,lastName,id){
        axios.put(USERS_REST_API_URL_USERS, null, {
          auth: {
            username: localStorage.getItem('username'),
            password: localStorage.getItem('password')
          },
          params: {
            firstName: firstName,
            lastName: lastName,
            id: id
          }
      });
      }

      async postCreatedUser(firstName,lastName,id, password){
        await axios.post(
          USERS_REST_API_URL_NEWUSER,
          {
            // data to sent to the server - post body
            // it can be an empty object
          },
          {
            auth: {
              username: localStorage.getItem('username'),
              password: localStorage.getItem('password')
            },
            // specify query parameters
            params: {
              firstName: firstName,
              lastName: lastName,
              id: id, 
              password: password
            },
          }
        ); 
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