import { userConfig } from "./configs"
import { IJwt } from "./models/IJwt"

export const userLogin = ( username: string, password: string ) => {
    const sendData = {
        username: username,
        password: password
    }
    return userConfig.post<IJwt>('user/auth', sendData)
}