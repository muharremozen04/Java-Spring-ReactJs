import React, { useEffect, useState } from 'react';
import { ProBilgiler } from '../models/IProduct';
import { NavLink, useNavigate } from 'react-router-dom';
import { productList, userLogin } from '../services/service';
import NavBar from './Navbar';

function Product() {


//Ürünlerle ilgili
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
    
    <NavBar />
       <hr />
   

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
    
    </>
  );
}

export default Product;