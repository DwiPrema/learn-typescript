import { CustomerType, type Customer } from "../src/enum"

describe("Enum", function(){
    it("should support in typescript", function () {

        const customer: Customer = {
            id: 1,
            name: "Dwi",

            //contoh penggunaan enum
            type: CustomerType.GOLD
        }

        console.info(customer);

    })
})