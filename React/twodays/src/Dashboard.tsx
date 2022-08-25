import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar'
import { IPerson } from './model/IPerson'
import { IUser } from './model/IUser'
import { personAdd, personDelete, personList } from './Util'

function Dashboard() {

  const location = useLocation()
  let user:IUser = {email:'', password:''}
  if ( location.state ) {
    user = location.state as IUser
  }
  
  const [persons, setPersons] = useState<IPerson[]>([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const sendForm = (evt:React.FormEvent) => {
    evt.preventDefault()
    const item:IPerson = {
      name: name,
      email: email,
      tel: tel
    }
    personAdd(item)
    setName('')
    setEmail('')
    setTel('')
    setPersons( personList() )
  }

  useEffect(() => {
    setPersons( personList() )
  }, [])
  
  const fncDelete = (index:number) => {
    const newItems = personDelete( index )
    setPersons( newItems )
  }

  return (
    <>
        <NavBar/>
        <div className='row'>
          <div className='col-sm-6'>
            <h3>Add Person</h3>
            <form onSubmit={sendForm}>
              <div className='mb-3'>
                <input value={name} onChange={(evt) => setName(evt.target.value)} required type='text' placeholder='Name/Surname' className='form-control' />
              </div>
              <div className='mb-3'>
                <input value={email} onChange={(evt) => setEmail(evt.target.value)} required type='email' placeholder='E-mail' className='form-control' />
              </div>
              <div className='mb-3'>
                <input value={tel} onChange={(evt) => setTel(evt.target.value)} required type='tel' placeholder='Telephone' className='form-control' />
              </div>
              <button type='submit' className='btn btn-success'>Save</button>
            </form>
          </div>
          <div className='col-sm-6'>
            <h3>Person List</h3>
            <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">E-Mail</th>
                <th scope="col">Telephone</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>

            { persons.map(( item, index ) =>
              <tr key={index}>
                <td>{ item.name }</td>
                <td>{ item.email }</td>
                <td>{ item.tel }</td>
                <td><button onClick={()=> fncDelete(index) } className='btn btn-danger'>Delete</button></td>
              </tr>
            )}

              
            </tbody>
          </table>
          </div>
        </div>
    </>
  )
}

export default Dashboard