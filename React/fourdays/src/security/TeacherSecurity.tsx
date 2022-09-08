import React from 'react'
import { Navigate } from 'react-router-dom'
import { JsxElement } from 'typescript'
import TeacherNavBar from '../navbars/TeacherNavBar'
import { control } from '../util'

function TeacherSecurity( item: { component: JSX.Element} ) {

  const jwt = control()
  let managerRole = false
  if ( jwt !== null ) {
    jwt.result.authorities.map( item => {
        if (item.authority === "ROLE_teacher") {
            managerRole = true
        }
    })
  }

  return (
    managerRole === false
    ?
    <Navigate to='/' replace />
    :
    <><TeacherNavBar/>{item.component}</>
  )
}
export default TeacherSecurity