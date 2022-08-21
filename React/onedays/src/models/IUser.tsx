 export interface IUser {
    name: string,
    surname?: string,
    age: number,
    status?: boolean,
    address?: IAddress,
    class?: IClass[],
}

interface IAddress {
   title: string,
   detail: string,
   no: number 
}

interface IClass {
    no: number,
    name: string
}