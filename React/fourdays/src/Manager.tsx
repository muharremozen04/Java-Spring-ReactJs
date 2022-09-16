import React, { useEffect } from 'react'
import { managerGet, register } from './services'

function Manager() {

  useEffect(() => {
    managerGet().then(res => {
      console.log(res.data);
    })

    const sendItem = {
      firstName: "Zehra",
      lastName: "Bilki",
      email: "zehra@mail.com",
      password: "12345",
      enabled: true,
      tokenExpired: true,
      roles: [
          { id: 2, name: "ROLE_teacher" }
      ]
    }
    register(sendItem).then( res => {
      console.log(res);
    })

  }, [])
  

  return (
    <div>Manager</div>
  )
}

export default Manager