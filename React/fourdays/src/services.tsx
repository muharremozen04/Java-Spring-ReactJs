import { siteConfig, userConfig } from "./configs"
import { IJwt } from "./models/IJwt"
import { control } from "./util"

export const userLogin = ( username: string, password: string ) => {
    const sendData = {
        username: username,
        password: password
    }
    return userConfig.post<IJwt>('user/auth', sendData)
}


export const managerGet = () => {
    return siteConfig.get('manager/get')
}

export const register = ( data:any ) => {
    return siteConfig.post('user/register', data)
}