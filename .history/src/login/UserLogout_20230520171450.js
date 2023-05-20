import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';


function UserLogoutForm(){
    useEffect(() => {
        return axios.get('http://localhost:8080/logout')
        //window.history.pushState({}, '', '/login');
      }, []);


}
export default UserLogoutForm;