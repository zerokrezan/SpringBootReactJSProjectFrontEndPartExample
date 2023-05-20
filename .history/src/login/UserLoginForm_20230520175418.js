import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

/* function UserLoginForm() {
  const [loginPageHtml, setLoginPageHtml] = useState('');

  useEffect(() => {
    axios.get('/login')
      .then(response => {
        setLoginPageHtml(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    
    <div dangerouslySetInnerHTML={{ __html: loginPageHtml }}></div>
    );
    
} */

// function UserLoginForm() {

//   const navigate = useNavigate();
//   useEffect(() => {
//     //window.history.pushState({}, '', '/login');
//   }, []);
  
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);


//   function handleSubmit(event){
//     console.log("login");
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('username', encodeURIComponent(email))
//     formData.append('password', password);
//     console.log(email)
//     console.log(formData)
//     console.log(formData.getAll)
//       axios.post(
//         'http://localhost:8080/login',
//         formData ,
//         {headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
//       )
//       .then((response) => {
//         if (response.ok || response.status === 200) {
//           // Redirect to the home page or a protected page
//           navigate('/users');
//           //window.location.href = "/";
//         } else {
//           throw new Error("Invalid login credentials");
//         }
//       })
//       .catch((error) => {import React, { useEffect, useState } from 'react';

/* function UserLoginForm() {
  const [loginPageHtml, setLoginPageHtml] = useState('');

  useEffect(() => {
    axios.get('/login')
      .then(response => {
        setLoginPageHtml(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    
    <div dangerouslySetInnerHTML={{ __html: loginPageHtml }}></div>
    );
    
} */

function UserLoginForm() {

  const navigate = useNavigate();
  useEffect(() => {
    //window.history.pushState({}, '', '/login');
  }, []);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  async function handleSubmit(event){
    console.log("login");
    event.preventDefault();
    const formData = new FormData();
    formData.append('username', encodeURIComponent(email))
    formData.append('password', password);
    console.log(email)
    console.log(password)
    console.log(formData)
    await axios.post(
      'http://localhost:8080/login',
      formData ,
      //{auth: {username: email, password: password}},
      {headers: { 'Content-Type': 'multipart/form-data' } }
    )
      .then((response) => {
        if (response.ok || response.status === 200) {
          console.log(response.responseUrl)
          console.log(response.status)
          // Redirect to the home page or a protected page
          //navigate('/users'); //same as below:
          //window.location.href = "/users";
        } else {
          throw new Error("Invalid login credentials");
        }
      })
      .catch((error) => {
        console.error(error);
      }); 

    // set the state of the user
    // store the user in localStorage
    localStorage.setItem('username', email)
    localStorage.setItem('password', password)
    console.log(localStorage)

  }
 

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}

  

export default UserLoginForm;