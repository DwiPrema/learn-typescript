describe("Object", function () {
    it("should support in typescript", function () {

        // menggunakan object type, namun untuk study case lebih rumit dan memerlukan banyak atribut, itu lebih baik tetap menggunakan type alias / interface
        const person: {id: string, name: string} = {
            id: "1",
            name: "Dwi"
        }

        console.info(person)

    })
})