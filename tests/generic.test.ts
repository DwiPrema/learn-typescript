describe("generic", () => {

    //Generics memungkinkan kita bekerja dengan berbagai jenis tipe data sekaligus tetap mempertahankan keamanan tipe
    class GenericData<T> {
        value: T;

        constructor(value: T) {
            this.value = value
        }

        get(): T {
            return this.value
        }

        set(value: T){
            this.value = value
        }
    }

    it("should support multiple data type", async () => {

        //Contoh implementasi Generics, ketika tipe nya ditentukan: yaitu number, maka tidak bisa diubah lagi ke tipe data lain
        const dataNumber = new GenericData<number>(123);

        //Error
        // dataNumber.value = "dwi" // menimbulkan error karna dataNumber sudah ditentukan tipenya: yaitu number bukan string

        expect(dataNumber.value).toBe(123);

        //Contoh implementasi dengan tipe data string
        const dataString = new GenericData<string>("Dwi");

        const upper = dataString.value.toUpperCase()

        expect(upper).toBe("DWI")
    })

    //Generic Function
    function create<T> (value: T): T {
        return value
    }

    it("should support function generic", async ( ) => {
        const result: string = create<string>("Dwi");
        expect(result).toBe("Dwi")

        const result2: number = create<number>(123);
        expect(result2).toBe(123)
    })

    //Multiple Generic Type
    class Entry<K, V> {
        constructor(public key: K, public value: V){

        }
    }

    //Kita bisa membuat beberapa tipe generics
    class Triple<K, V, T> {
        constructor(public first: K, public second: V, public third: T) {
        }
    }

    it("should support multiple generic type", async  () => {

        //contoh implementasi multiple generic type
        const entry = new Entry<number, string>(1, "Hello");

        expect(entry.key).toBe(1)
        expect(entry.value).toBe("Hello")

        //contoh implementasi multiple generic type
        const triple = new Triple<number, string, boolean>(1, "Hello", true)

        expect(triple.first).toBe(1)
        expect(triple.second).toBe("Hello")
        expect(triple.third).toBe(true)
    })

    it("should support optional generic type", async () => {
        
        //tipe data tidak harus di deklarasi dengan diamond operator (<>), karna tipe datanya akan dideteksi oleh typescript sehingga tipe datanya menyesuaikan dengan nilai pertama kali saat membuat object
        const entry = new Entry("1", "Hello")
        //tapi hal di atas hanya berlaku jika generic type nya memang ada di constructor

        expect(entry.key).toBe("1")
        expect(entry.value).toBe("Hello")
    })

    //Contoh Generic Class Tanpa Constructor Parameter || bisa berisi generic parameter default
    class SimpleGeneric<T = string> {
        private value?: T;

        setValue(value: T) {
            this.value = value;
        }

        getValue(): T | undefined {
            return this.value;
        }
    }

    it("should create simple generic", async () => {

        //contoh ketika generic type tidak ada di constructor, dia akan mirip seperti tipe data any, namun karna kita menambahkan default generic parameter yaitu <T = string>, ketika dibawah tidak diisi apa" maka dia akan otomatis ke default nya yaitu string
        const simple = new SimpleGeneric();

        //conntoh yang benar
        // const simple = new SimpleGeneric<string>()

        //sehingga variable itu bisa menerima banyak tipe data, tapi susah divalidasi.
        //Oleh karna itu lebih baik tipe data di deklarasi ketika membuat instance nya (jika generics type tidak ada di constructror)
        simple.setValue("Dwi");

        // simple.setValue(100);
        // simple.setValue(true);

        //Akan error
        // expect(simple.getValue()!.toUpperCase()).toBe("Dwi")
    })

    interface Employee {
        id: string;
        name: string;
    }

    interface Manager extends Employee {
        totalEmployee: number;
    }

    interface VP extends Manager {
        totalManager: number;
    }

    //Generic Constraint tipe data hanya bisa dari interface Employee dan turunannya saja, karna itu yang kita tentukan
    class EmployeeData<T extends Employee> {
        constructor(public employee: T) {

        }
    }

    it("should support constraint", async () => {
        const data1 = new EmployeeData<Employee>({
            id: "100",
            name: "Dwi"
         })

         const data2 = new EmployeeData<Manager>({
            id: "100",
            name: "Dwi",
            totalEmployee: 100,
         })

         const data3 = new EmployeeData<VP>({
            id: "100",
            name: "Dwi",
            totalEmployee: 100,
            totalManager: 10,
         })


         //Kode dibawah ini akan error karna sring bukan constraint dari Employee
        //  const data4 = new EmployeeData<string>("Dwi")
    })

    it("should support array", async () => {

        //karna sudah ditentukan string, tipe data lain tidak bisa di push kesini
        const array = new Array<string>();
        array.push("Dwi");
        array.push("Premayasa");

        expect(array[0]).toBe("Dwi")
        expect(array[1]).toBe("Premayasa")
    })
 
    it("should support set", async () => {
        const set = new Set<string>();
        set.add("Dwi");
        set.add("Prema");
        set.add("Dwi");

        expect(set.size).toBe(2)
    })

    it("should support map", async () => {
        const map = new Map<string, number>();
        map.set("Dwi", 100);
        map.set("Prema", 96);

        expect(map.get("Dwi")).toBe(100)
        expect(map.get("Prema")).toBe(96)
    })

    //GENERIC PROMISE (bisa menggunakan <T>)
    async function fetchData(value: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                if(value == "Dwi") {
                    resolve("Hello " + value)
                } else {
                    reject("Not Found")
                }
            }, 1000)
        })
    }

    it("should support promise", async () => {
        const result = await fetchData("Dwi")

        expect(result).toBe("Hello Dwi");

        try {
            await fetchData("Budi")
        } catch (e) {
            expect(e).toBe("Not Found")
        }
    })
})