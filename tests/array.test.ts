describe('Array', function () {
    it("test array", function () {
        const name: string[] = ["Dwi", "Prema", "Yes"];
        const age: number[] = [16, 18, 17];
        const hobbies: ReadonlyArray<string> = ["Playing Game", "Playing Game", "Basketball"];

        console.info(name);
        console.info(age);
        console.info(hobbies);
    })

    it("should support tuple", function() {
        const person : readonly [string, string, number] = ["Dwi", "Prema", 30];
        console.info(person);

        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
    })
})