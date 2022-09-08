import React from 'react'
import { Navigate } from 'react-router-dom'
import { JsxElement } from 'typescript'
import ManagerNavBar from '../navbars/ManagerNavBar'
import { control } from '../util'

function ManagerSecurity( item: { component: JSX.Element} ) {

  const jwt = control()
  let managerRole = false
  if ( jwt !== null ) {
    jwt.result.authorities.map( item => {
        if (item.authority === "ROLE_manager") {
            managerRole = true
        }
    })
  }

  return (
    managerRole === false
    ?
    <Navigate to='/' replace />
    :
    <><ManagerNavBar/>{item.component}</>
  )
}

export default ManagerSecurity