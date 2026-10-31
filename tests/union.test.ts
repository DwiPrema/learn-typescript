describe('Union Type', function () {
    it('should support in typescript', function () {

        //penggunaan union type : artinya satu variabel ini bisa menerima tipe data berbeda sesuai yang di deklarasikan, selain itu tidak bisa
        let sample: number | string | boolean = "Eko";

        console.info(sample)
        
        sample = 100

        console.info(sample)

        sample = true

        console.info(sample)
    })

    it("should support function in typescript", function() {
        function process(value: number | string | boolean) {
            //sebaiknya menggunakan pengkondisian jika nanti variabel ini di manipulasi, seperti contoh: function .toUpperCase() yang hanya bisa diterima oleh tipe data string, jadi harus ada pengkondisian (if else)
            if(typeof value === "string") {
                return value.toUpperCase()
            } else if(typeof value === "number") {
                return value + 2
            } else {
                return !value
            }
        }

        expect(process("Dwi")).toBe("DWI");
        expect(process(100)).toBe(102);
        expect(process(true)).toBe(false);
    })
})