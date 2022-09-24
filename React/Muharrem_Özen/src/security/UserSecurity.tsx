import { Navigate } from "react-router-dom"

function UserSecurity(item: { component: JSX.Element}) {

    const data = sessionStorage.getItem('user')

    let hasLogin = false
    if(data){
        hasLogin = true
    }

  return (
    hasLogin === false 
    ?
    <Navigate to = '/' replace/>
    :
    <>{item.component}</>
  )
}

export default UserSecurity