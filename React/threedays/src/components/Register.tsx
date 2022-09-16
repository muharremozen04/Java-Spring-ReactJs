import React, { useState } from 'react'
import { userRegister } from '../service'

function Register() {


  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const fncRegister = (evt:React.FormEvent) => {
    evt.preventDefault()
    userRegister(name, surname, phone, email, pass).then( res => {
        console.log( res.data )
    })
  }

  return (
    <>
        <h1>User Register</h1>
        <form onSubmit={fncRegister}>
            <input onChange={(evt) => setName(evt.target.value)} placeholder='Name'></input><br></br>
            <input onChange={(evt) => setSurname(evt.target.value)} placeholder='Surname'></input><br></br>
            <input onChange={(evt) => setPhone(evt.target.value)} placeholder='Phone'></input><br></br>
            <input onChange={(evt) => setEmail(evt.target.value)} placeholder='E-mail'></input><br></br>
            <input type='password' onChange={(evt) => setPass(evt.target.value)} placeholder='Password'></input><br></br>
            <button>Send</button>
        </form>
    </>
  )
}

export default Register