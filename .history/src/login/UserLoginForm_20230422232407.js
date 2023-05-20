import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    console.log("login");
    event.preventDefault();
      axios.post(
        'http://localhost:8080/login',
        {
          // data to sent to the server - post body
          // it can be an empty object
          username: username,
          password: password

        }
      )
      .then((response) => {
        if (response.ok) {
          // Redirect to the home page or a protected page
          window.location.href = "/users";
        } else {
          console.log(response)
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
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
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


export default UserLoginForm;