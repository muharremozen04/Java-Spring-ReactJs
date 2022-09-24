import React from 'react'
import { NavLink } from 'react-router-dom'

function Product() {

  const urls = [
    { id: 10, title: 'Buzdolabı' },
    { id: 11, title: 'TV' },
    { id: 12, title: 'Tablet' },
    { id: 13, title: 'iPhone 13' },
    { id: 14, title: 'Android' },
    { id: 15, title: 'Sansung' },
  ]  


  return (
    <>
        <h2>Product List</h2>
        <table className="table table-hover">
        <thead>
            <tr>
            <th scope="col">No.</th>
            <th scope="col">id</th>
            <th scope="col">title</th>
            <th scope="col">Image</th>
            </tr>
        </thead>
        <tbody>

            { urls.map( (item, index) => 
            <tr key={index}>
                <th scope="row">{ index + 1 }</th>
                <td>{ item.id }</td>
                <td>{ item.title }</td>
                <td>
                    <NavLink to={'/productImage/' + item.id} className='btn btn-secondary btn-sm' >Add Image</NavLink>
                </td>
            </tr>
            )}

           
        </tbody>
        </table>
    </>
  )
}

export default Product