export interface IProductImage {
    status: boolean;
    result: ResultImage[] | number | ResultImage;
}

export interface ResultImage {
    iid:  number;
    pid:  number;
    file: string;
}
