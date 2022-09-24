import React, { useEffect, useState } from 'react'
import { userLogin } from '../services/service'
import { useNavigate } from 'react-router-dom'


function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(false)

    
    const fncLogin = (evt:React.FormEvent) => {
        evt.preventDefault()
        userLogin(email, password).then(res => {
          const user = res.data.user[0]
          if ( user.durum && user.bilgiler ) {
            const stUser = JSON.stringify(user.bilgiler)
            sessionStorage.setItem('user', stUser)
            if(remember === true){
              localStorage.setItem('user',stUser)
            }
            navigate('/product')
          }else {
            alert( user.mesaj )
          }
        })
      }

  return (
    <>
        <div className='row'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <h3>User Login</h3>
                <form onSubmit={fncLogin} method='post'>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input  onChange={(evt) => setEmail(evt.target.value)} required type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input onChange={(evt) => setPassword(evt.target.value)} type="password" className="form-control" id="password" />
                </div>
                <div className="mb-3 form-check">
                <input onClick={(evt) => setRemember(!remember)} type="checkbox" className="form-check-input" id="remember" />
                    <label className="form-check-label" htmlFor="remember">Remember</label>
                </div>
                <button type="submit" className="btn btn-primary"><i className="bi bi-person"></i> Login</button>
                </form>
            </div>
            <div className='col-sm-4'></div>
        </div>
    </>
  )
}

export default Login


