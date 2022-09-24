import * as CryptoJS from 'crypto-js'
import { IJwt } from './models/IJwt';
import { Bilgiler } from './models/ILogin';

const key = process.env.REACT_APP_KEY ? process.env.REACT_APP_KEY : 'coreAppKey'

export const encrypt = (plaintText: string) => {
    const ciphertext = CryptoJS.AES.encrypt(plaintText, key).toString();
    return ciphertext
}

export const decrypt = ( ciphertext: string ) => {
    const bytes  = CryptoJS.AES.decrypt(ciphertext, key);
    const plaintText = bytes.toString(CryptoJS.enc.Utf8);
    return plaintText
}


export const control = () : Bilgiler | null => {
    const stRemember = localStorage.getItem('user')
    if(stRemember){
        sessionStorage.setItem('user',stRemember)
    }

    const stData = sessionStorage.getItem('user')
    if(stData){
        try{
            const jwt = JSON.parse(stData) as Bilgiler
            return jwt
        } catch (error) {
            sessionStorage.removeItem('user')
        }
    }
    return null
}