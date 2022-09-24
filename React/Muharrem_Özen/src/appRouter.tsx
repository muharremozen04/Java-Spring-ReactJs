import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


// import components
import Login from './components/Login';
import Order from './components/Order';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';


export const routes =
<BrowserRouter>
    <ToastContainer/>
    <Routes>
        <Route path='/product' element={<Product/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/detail/:pid' element={<ProductDetail/>} />
        <Route path='/' element={<Login/>} />
      
    </Routes>
</BrowserRouter>