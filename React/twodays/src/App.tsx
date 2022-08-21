import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const fncLogin = (evt:React.FormEvent) => {
      evt.preventDefault()
      if ( email === 'ali@mail.com' && password === '12345' ) {
        // goto dashboard
        // window.location.href = '/dashboard'
        navigate('/dashboard')
      }else {
        alert("Kullanıcı adı yada şifre hatalı!")
      }
  }


  // Name / Surname
  // email
  // password
  // age

  return (
    <>
      <NavLink to='/'>App</NavLink> | <NavLink to='/dashboard'>Dashboard</NavLink>

      <h3>Login Form</h3>
      <form onSubmit={fncLogin} className='col-4'>
        <div className='mb-3'>
            <input type='email' required onChange={(evt)=> setEmail(evt.target.value) } className='form-control' placeholder='E-Mail' />
        </div>
        <div className='mb-3'>
            <input type='password' required onChange={(evt)=> setPassword(evt.target.value) } className='form-control' placeholder='Password' />
        </div>
        <button type='submit' className='btn btn-success'>Send</button>
      </form>
    </>
  );
}

export default App;
