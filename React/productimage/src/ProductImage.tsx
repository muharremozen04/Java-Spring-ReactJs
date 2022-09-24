import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ResultImage } from './models/IProductImage'
import { imageAdd, imageDelete, imageList } from './service'


function ProductImage() {

  const { pid } =  useParams()
  const paramsPid = Number(pid)
  const [images, setImages] = useState<ResultImage[]>([])
  useEffect(() => {
    imageUpdate(paramsPid)
  }, [])

  const imageUpdate = ( pid: number ) => {
    imageList(pid).then( res => {
        setImages(res.data.result as ResultImage[])
    })
  }

  const fncImageDelete = ( iid: number ) => {
    imageDelete(iid).then( res => {
        if (  res.data.status  ) {
            imageUpdate(paramsPid)
        }
    })
  }


  const onChangeFile = (evt:any) => {
        if (evt.target.files.length < 1) {
            return;
        }
        
        for (let i = 0; i < evt.target.files.length; i++) {
            const file = evt.target.files[i];
            const fileReader = new FileReader();
            fileReader.onloadend = () => {
                const type = file.type
                if ( type === 'image/png' || type === 'image/jpeg' ) {
                    if ( file.size < 1000000 ) {
                        imageAdd(paramsPid, fileReader.result as string).then( res => {
                            imageUpdate(paramsPid)
                        })
                    }
                }
            }
            fileReader.readAsDataURL(file);
        }
    }
  
  
  return (
    <>
    <h2>Image Add</h2>
    <input type='file' multiple onChange={onChangeFile} ></input>

    <hr></hr>
    <h2>Image List</h2>
    <div className='row'>
        { images.map( (item, index) =>
            <div key={index} className='col-sm-3'>
                <div className="card m-1">
                    <img src={item.file} className="card-img-top" style={{ height: 250, }} />
                    <div className="card-body">
                    <a onClick={ () => fncImageDelete(item.iid) } role='button' className="btn btn-danger" style={{ position: 'absolute', bottom: 10, left: 10, }}>Delete</a>
                    </div>
                </div>
          </div>
        )}
    </div>
    </>
  )
}

export default ProductImage