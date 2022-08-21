import React from 'react'
import { NavLink } from 'react-router-dom'

function Dashboard() {
  return (
    <>
        <NavLink to='/'>App</NavLink> | <NavLink to='/dashboard'>Dashboard</NavLink>
        <div>Dashboard</div>
    </>
  )
}

export default Dashboard