import axios from "axios";

export const config = axios.create({
    baseURL:'https://www.jsonbulut.com/json/',
    timeout: 15000,
    params: { "ref": "d1becef32825e5c8b0fc1b096230400b" }
    //headers:{ "Authorization": "Berer eyJhbGciOiJIUzI1NiJ9" }
})