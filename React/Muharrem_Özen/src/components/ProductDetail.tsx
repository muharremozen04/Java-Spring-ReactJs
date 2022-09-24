import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { ProBilgiler } from '../models/IProduct'
import NavBar from './Navbar'

function ProductDetail() {

  const [item, setItem] = useState<ProBilgiler>()
  const [bigImage, setBigImage] = useState('')
  const { pid } = useParams()
  const loc = useLocation()
  useEffect(() => {
    if ( loc.state ) {
        const itm = loc.state as ProBilgiler
        setItem(itm)
        setBigImage(itm.images[0].normal)
    }else {

    }
  }, [])
  
  return (
    <>
     <NavBar />
       <hr />
        <h2>Product Detail - {pid}</h2>
        { item &&
            <>
                <div className='row'>
                    <h3> { item.productName } </h3>
                    <div className='col-sm-6'>
                        <img src={bigImage} className="img-fluid" />
                        <div>
                            { item.images.map( (item, index) =>
                                <img key={index} role='button' onClick={() => setBigImage(item.normal)} src={item.thumb} className="img-thumbnail m-1" />
                            )}
                        </div>
                    </div>
                    <div className='col-sm-6'>
                        <div dangerouslySetInnerHTML={{__html: item.description}} ></div>
                    </div>
                </div>
            </>
        }
    </>
  )
}

export default ProductDetail