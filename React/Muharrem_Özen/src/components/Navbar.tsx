
import { NavLink } from 'react-router-dom'
import { control } from '../util'
import LogOut from './LogOut'

function Navbar() {

  const jwt = control()
  const userEmail = jwt?.userEmail

  return (
    <>
    <nav className="navbar navbar-expand-lg" >
    <div className="container-fluid">
      <NavLink className="navbar-brand" to='/product'>E-Ticaret</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

          <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to='/product'>Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/order'>Orders</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/order'>{userEmail}</NavLink>
          </li>
          <LogOut/>
          
        </ul>
        <form className="d-flex" role="search">

        </form>
      </div>
    </div>
  </nav>
  </>
  )
}

export default Navbar