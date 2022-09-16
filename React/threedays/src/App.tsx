import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Register from './components/Register';
import { ProBilgiler } from './models/IProduct';
import { IUser } from './models/IUser';
import { productList, userLogin } from './service';

function App() {

  const [load, setLoad] = useState(false)
  const [arr, setArr] = useState<IUser[]>([])
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts"
    axios.get<IUser[]>(url).then( res => {
      const users = res.data
      setArr(users)
    
    }).catch( err => {
      console.error("Server Error : ", err.message)
      window.alert( err.message  )
    })
  }, [])
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const fncLogin = (evt:React.FormEvent) => {
    evt.preventDefault()
    setLoad(true)
    userLogin(email, password).then(res => {
      const user = res.data.user[0]
      if ( user.durum && user.bilgiler ) {
        const stUser = JSON.stringify(user.bilgiler)
        sessionStorage.setItem('user', stUser)
      }else {
        alert( user.mesaj )
      }
    }).finally(()=> {
      setLoad(false)
    })
  }

  const [products, setProducts] = useState<ProBilgiler[]>([])
  useEffect(() => {
    productList().then(res => {
      const arr = res.data.Products[0].bilgiler
      setProducts(arr)
    })
  }, [])
  
  const navigate = useNavigate()
  const gotoDetail = ( item: ProBilgiler ) => {
    navigate('/detail/'+ item.productId, { state: item } )
  }


  return (
    <>
      <h1>User Login</h1>
      { load &&
        <img src='./load.gif' width="40"></img>
      }
      
      <form onSubmit={fncLogin}>
        <input onChange={(evt) => setEmail(evt.target.value)} placeholder='Email'></input>
        <input type='password' onChange={(evt) => setPassword(evt.target.value)} placeholder='Password'></input>
        <button>Send</button>
      </form>
      <hr></hr>
      <Register />
      <hr></hr>
      
      <div className='row'>
      { products.map((item, index) =>
        <div key={index} className="card col-sm-4 mb-2">
          <img src={item.images[0].normal} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{item.productName}</h5>
            <p className="card-text">{item.brief}</p>
            <a onClick={() => gotoDetail(item) }  className="btn btn-primary" style={{ bottom: 0, position: 'absolute', right: 0, margin: 5,}} >Goto Datil</a>
          </div>
        </div>
      )}
      </div>

      <hr></hr>
      <h1>User List</h1>
      { arr.map((item, index) => 
        <li key={index}> { item.id } -  { item.title } - { item.body } </li>
      )}
    </>
  );

}

export default App;
