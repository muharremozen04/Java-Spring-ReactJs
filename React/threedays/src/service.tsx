import { config } from "./axiosConfig";
import { ILogin } from "./models/ILogin";
import { IProduct } from "./models/IProduct";
import { IRegister } from "./models/IRegister";


// user login
export const userLogin = ( email:string, password:string ) => {
    const sendParams = {
        userEmail: email,
        userPass: password,
        face: "no"
    }
    return config.get<ILogin>("userLogin.php", { params: sendParams })
}


// user register
export const userRegister = ( name:string,surname:string,phone:string,email:string,pass:string ) => {
    const sendParams = {
        userName: name,
        userSurname: surname,
        userPhone: phone,
        userMail: email,
        userPass: pass
    }
    return config.get<IRegister>("userRegister.php", { params: sendParams })
}

// product list
export const productList = () => {
    const sendParams = {
        start: 0
    }
    return config.get<IProduct>("product.php", {params:sendParams})
}

