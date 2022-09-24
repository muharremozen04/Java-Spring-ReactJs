import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './Product';
import ProductImage from './ProductImage';

const router = 
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Product />}  />
    <Route path='/productImage/:pid' element={<ProductImage />}  />
  </Routes>
</BrowserRouter>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( router );
