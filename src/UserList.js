import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react'

export default function userList() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [listOfUser, SetListOfUser] = useState([])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(function (response) {
        // handle success
        console.log(response);
        SetListOfUser(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }, [])
    
      return (
        <div>
        <ul>  
        {listOfUser.map(user => (
          <li key={user.id}>
            Name:{user.name}<br/>
            Email: {user.email}<br/>
            Username: {user.username}<br/>
            Adress: {user.address.street},{user.address.suite},{user.address.city},{user.address.codepostal}<br/>


          </li>
          ))}
          </ul>
        </div>
      );
}
