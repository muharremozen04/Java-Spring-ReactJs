import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import { IUser } from './model/IUser'

function Dashboard() {

  const location = useLocation()
  let user:IUser = {email:'', password:''}
  if ( location.state ) {
    user = location.state as IUser
  }
  

  return (
    <>
        <NavBar/>
        <div>Dashboard</div>
        <div> { user.email } </div>
    </>
  )
}

export default Dashboard