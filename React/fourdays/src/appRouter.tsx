import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

// import components
import Login from './Login'

export const routes =
<BrowserRouter>
    <ToastContainer/>
    <Routes>
        <Route path='/' element={<Login/>} />
    </Routes>
</BrowserRouter>