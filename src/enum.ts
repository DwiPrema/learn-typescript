export enum CustomerType {

    //di deklarasi ke string supaya hasilnya konsisten menggunakan string itu, karna defaultnya menggunakan index
    REGULAR = "REGULAR",
    GOLD = "GOLD",
    PLATINUM = "PLATINUM"
}

export type Customer = {
    id: number,
    name: string,
    type: CustomerType
}