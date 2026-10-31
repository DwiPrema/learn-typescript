// contoh penggunaan interface
export interface Seller {
    id: number;
    name: string;

    //optional atribut menggunakan tanda "?"
    address?: string;

    //readonly yang artinya datanya tidak bisa dirubah
    readonly nib: string;
    readonly npwp: string;
}