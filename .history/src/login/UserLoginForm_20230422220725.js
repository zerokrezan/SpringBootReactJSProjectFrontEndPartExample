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

function UserLoginForm() {

  useEffect(() => {
    window.history.pushState({}, '', '/login');
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    console.log("login");
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        username: email,
        password: password,
      }),
      credentials: "include",
    })
      .then((response) => {
        if (response.ok) {
          // Redirect to the home page or a protected page
          window.location.href = "/";
        } else {
          throw new Error("Invalid login credentials");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
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