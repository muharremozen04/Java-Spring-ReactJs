import { useEffect, useState } from "react"
import { OrderList } from "../models/IOrderList"
import { orderList } from "../services/service"
import { control } from "../util"
import Navbar from "./Navbar"

function Order() {


    const jwt = control()
    const [orders, setOrders] = useState<OrderList[]>([])

    useEffect(() => {
      if(jwt){
        orderList(jwt.userId).then(res => {
          const arr = res.data.orderList[0]
          setOrders(arr)
          console.log(arr);
          
        })}
    }, [])
    
  return (
    <>
    <Navbar/>
    <div className='row'>
      { orders.map((item, index) =>
        <div key={index} className="card col-sm-4 mb-2">
          <img src={item.thumb} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{item.kisa_aciklama}</h5>
            <p className="card-text">{item.fiyat}</p>
          </div>
        </div>
      )}
      </div>

    </>
  )
}

export default Order