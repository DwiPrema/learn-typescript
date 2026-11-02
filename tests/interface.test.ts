import type { Employee, Manager } from "../src/employee";
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

    //Indexable Interface
    it("should support indexable interface dictionary", function () {
        interface StringDictionary {
            [key: string]: string
        }

        const dictionary: StringDictionary = {
            "name": "Eko",
            "address": "Indonesia"
        }

        expect(dictionary["name"]).toBe("Eko");
        expect(dictionary["address"]).toBe("Indonesia");
    })


    //Extending Interface 
    it("should support extend interface", function () {
        const employee: Employee = {
            id: "1",
            name: "Dwi",
            division: "IT"
        }

        console.info(employee);

        const manager: Manager = {
            id: "2",
            name: "Premayasa",
            division: "QA",
            numberOfEmployees: 10,
        }

        console.info(manager);
    })
})