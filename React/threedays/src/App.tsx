import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IUser } from './models/IUser';
import { userLogin } from './service';

function App() {

  const [arr, setArr] = useState<IUser[]>([])
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    axios.get<IUser[]>(url).then( res => {
      const users = res.data
      setArr(users)
    
    }).catch( err => {
      console.error("Server Error : ", err.message)
      window.alert( err.message  )
    })
  }, [])
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const fncLogin = (evt:React.FormEvent) => {
    evt.preventDefault()
    
  }


  return (
    <>
      <h1>User Login</h1>
      <form onSubmit={fncLogin}>
        <input onChange={(evt) => setEmail(evt.target.value)} placeholder='Email'></input>
        <input type='password' onChange={(evt) => setPassword(evt.target.value)} placeholder='Password'></input>
        <button>Send</button>
      </form>

      <hr></hr>
      <h1>User List</h1>
      { arr.map((item, index) => 
        <li key={index}> { item.id } -  { item.title } - { item.body } </li>
      )}
    </>
  );

}

export default App;
