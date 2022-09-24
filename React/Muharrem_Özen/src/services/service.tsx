import { config } from "../config/axiosConfig"
import { ILogin } from "../models/ILogin"
import { IOrderList } from "../models/IOrderList"
import { IProduct } from "../models/IProduct"


// product list
export const productList = () => {
    const sendParams = {
        start: 0
    }
    return config.get<IProduct>("product.php", {params:sendParams})
}


// user login
export const userLogin = ( email:string, password:string ) => {
    const sendParams = {
        userEmail: email,
        userPass: password,
        face: "no"
    }
    return config.get<ILogin>("userLogin.php", { params: sendParams })
}

// order list
export const orderList = (customerId:string) => {
    const sendParams = {
        musterilerID: customerId,
        random: Math.random()
    }
    return config.get<IOrderList>("orderList.php", {params:sendParams} )
}
