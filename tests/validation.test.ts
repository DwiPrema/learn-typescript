import {z, ZodError} from "zod";

describe("zod", () => {
    it("should support validation", async () => {
        const schema = z.string().min(3).max(100);

        const request = "dwi";

        const result = schema.parse(request);

        expect(request).toBe("dwi");
    })


    it("should support validate primitive data type", () => {

        const usernameSchema = z.email();
        const isAdminSchema = z.boolean();
        const priceSchema = z.number().min(1000).max(1000000);

        const username = usernameSchema.parse("madedwiprema08@gmail.com")
        console.info(username)

        const isAdmin = isAdminSchema.parse(true);
        console.info(isAdmin);

        const price = priceSchema.parse(1000)
        console.info(price)
    })


    //Konversi Tipe Data Menggunakan Zod
    it("should support data conversion", () => {

        //coerce berfungsi untuk data convertion
        const usernameSchema = z.coerce.string().min(3).max(100);
        const isAdminSchema = z.coerce.boolean();
        const priceSchema = z.coerce.number().min(1000).max(1000000);

        //ini masih bisa walaupun int, karna ada coerce yang mengkonversi menjadi string
        const username = usernameSchema.parse(123)
        console.info(username)

        const isAdmin = isAdminSchema.parse(true);
        console.info(isAdmin);

        const price = priceSchema.parse(1000)
        console.info(price)
    })

    it("should support date validation", async () => {
        const birthDateSchema = z.coerce.date().min(new Date(1980, 0, 1)).max(new Date(2025, 0, 1));

        const birthDate = birthDateSchema.parse("1990-01-01");
        console.info(birthDate);

        const birthDate2 = birthDateSchema.parse(new Date(1990, 0, 1));
        console.info(birthDate2);
    })

    it("should return zod error if invalid", async () => {
        const schema = z.email().min(3).max(100)

        try {
            schema.parse("dw")
        } catch (err) {
            
            if(err instanceof ZodError) {
                err.issues.forEach((error) => {
                    console.info(error.message)
                })
            }
        }
    })

    it("should can validate object", async () => {
        const loginSchema = z.object({
            username: z.email(),
            password: z.string().min(6).max(20)
        });

        const request = {
            username: "madedwiprema08@gmail.com",
            password: "dwipremayasa",
            ignore: "ignore",
            name: "Dwi Premayasa"
        }

        const result = loginSchema.parse(request)
        console.info(result)
    })

    it("should support nested object", async () => {

        //Nested Object Validation
        const createUserSchema = z.object({
            id: z.string().max(100),
            name: z.string().max(100),
            address: z.object({
                street: z.string().max(100),
                city: z.string().max(100),
                zip: z.string().max(100),
                country: z.string().max(100)
            })
        })

        const request = {
            id: "123",
            name: "Dwi",
            address: {
                street: "Jalan Majapahit",
                city: "Denpasar",
                zip: "12321",
                country: "Indonesia",
            }
        }

        const result = createUserSchema.parse(request)

        console.info(result)
    })
})