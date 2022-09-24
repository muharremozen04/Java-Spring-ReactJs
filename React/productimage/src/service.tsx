import axios from "axios";
import { IProductImage } from "./models/IProductImage";

const config = axios.create({
    baseURL: 'http://localhost:8090/',
    timeout: 15000
})


// image list
export const imageList = ( pid: number ) => {
    return config.get<IProductImage>('image/list/'+pid)
}

// image delete
export const imageDelete = ( iid: number ) => {
    return config.get<IProductImage>('image/delete/'+iid)
}

// image add
export const imageAdd = ( pid: number, file: string ) => {
    const sendData = {
        pid: pid,
        file: file
    }
    return config.post<IProductImage>('image/add', sendData)
}
