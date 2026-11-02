describe("Function", function () {
    it("should support in typescript", function () {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello("Dwi")).toBe("Hello Dwi")

        function printHello(name: string): void {
            console.info(`Hello ${name}`);
        }

        printHello("Dwi")
    })


    //Function Rest Parameter
    it("should support rest parameter", function () {
        function sum(...values: number[]): number {
            let total = 0;

            for (const value of values) {
                total += value;
            }

            return total;
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15)
    })

    //Function Optional Parameter
    it("should support optional parameter", function () {
        function sayHello(firstName: string, lastName?: string): string {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`
            } else {
                return `Hello ${firstName}`
            }
        }

        expect(sayHello("Dwi")).toBe('Hello Dwi')
        expect(sayHello("Dwi", "Premayasa")).toBe('Hello Dwi Premayasa')
    })


    //Function Overloading in Typescript
    it("should support function overloading", function () {
        function callMe(value: number): number
        function callMe(value: string): string
        function callMe(value: any): any {
            if (typeof value === "string") {
                return value.toUpperCase()
            } else if (typeof value === "number") {
                return value * 10
            }
        }

        expect(callMe(10)).toBe(100)
        expect(callMe("dwi")).toBe("DWI")
    })


    //Function sebagai parameter
    it("should support function as parameter", function () {
        function sayHello(name: string, filter: (name: string) => string): string {
            return `Hello ${filter(name)}`;
        }

        function toUpper(name: string): string {
            return name.toUpperCase();
        }

        //Bisa memanggil function lain
        expect(sayHello("Dwi", toUpper)).toBe("Hello DWI")

        //Bisa menggunakan arrow function
        expect(sayHello("Dwi", (name: string): string => name.toUpperCase())).toBe("Hello DWI")

        //Bisa menggunakan anonymous function
        expect(sayHello("Dwi", function(name: string): string {
            return name.toUpperCase()
        })).toBe("Hello DWI")
    })
})