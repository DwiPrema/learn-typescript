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
})