export interface IRegister {
    user: User[];
}

export interface User {
    durum:       boolean;
    mesaj:       string;
    kullaniciId: string;
}
