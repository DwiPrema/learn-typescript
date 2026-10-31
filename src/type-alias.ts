//penggunaan union type dan bisa diterapkan pada type alias
export type ID = string | number;

//contoh pembuatan type alias
export type Category = {
    id: ID;
    name: string;
}

export type Product = {
    id: ID;
    name: string;
    price: number;

    //Penggunaan type alias
    category: Category;
}