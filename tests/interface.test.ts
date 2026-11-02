import type { Seller } from "../src/seller"

describe("interface", function() {
    it("should support in typescript", function () {

        const seller: Seller = {
            id: 1,
            name: "Toko ABC",
            nib: "27814567",
            npwp: "4672385623",
        }

        seller.name = "Toko Dwi";

        //ini tidak akan bisa diubah, karna readonly
        // seller.nib = "367418432";

        console.info(seller);

    })

    //Function Interface
    it("should support function interface", function () {

        //Membuat Function Interface
        interface addFunction {
            (value1: number, value2: number): number;
        }

        //Mengimplementasikan function interface 
        const add: addFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        }

        expect(add(1,2)).toBe(3);
    })
})