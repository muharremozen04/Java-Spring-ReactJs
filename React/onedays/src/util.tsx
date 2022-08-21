// arrow fnc
export const fncSum = ( num1:number, num2:number ) : number | string => {
    if ( num1 > 5 ) {
        return "Sonuç Başarısız"
    }else {
        return num1 + num2
    }
}


export const fncMinus = ( num1: number, num2: number ) => {
    return num1 - num2
}

export const btnClick = () => {
    console.log("BtnClick Call")
} 