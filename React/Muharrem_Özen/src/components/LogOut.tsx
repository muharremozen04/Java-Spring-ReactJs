import { useNavigate } from "react-router-dom"

function LogOut() {

    const navigate = useNavigate()  
      const fncLogout = () =>  {
        sessionStorage.removeItem('user')
        localStorage.removeItem('user')
        navigate('/')
      }
      return (
        <>
    
            <li className="nav-item">
                <a className="nav-link btn btn-Info"  data-bs-toggle="modal" data-bs-target="#exampleModal" role='button'>Logout</a>
            </li>
    
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">User Logout</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Are you sure logout!
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button  data-bs-dismiss="modal" onClick={ fncLogout } type="button" className="btn btn-Info">Logout</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
      )
    }
    
    export default LogOut