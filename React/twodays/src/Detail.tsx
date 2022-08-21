import React from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './components/NavBar'

function Detail() {

  const { id } =  useParams()

  return (
    <>
        <NavBar/>
        <h1>Detail - { id }</h1>
    </>
    
  )
}

export default Detail