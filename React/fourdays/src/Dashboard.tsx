import React from 'react'
import { Navigate } from 'react-router-dom'
import { control } from './util'

function Dashboard() {

  const jwt = control()
  const fncRouter = ( role:string ) => {
    if ( role === 'ROLE_manager' ) {
        return <Navigate to='/manager' replace />
    }
    if ( role === 'ROLE_teacher' ) {
        return <Navigate to='/teacher' replace />
    }
  }

  return (
    jwt === null 
    ?
    <Navigate to='/' replace />
    :
    <>
        { fncRouter(jwt.result.authorities[0].authority) }
    </>

  )
}

export default Dashboard