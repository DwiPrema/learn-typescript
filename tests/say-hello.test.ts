import { sayHello } from "../src/say-hello"

describe('sayHello', function() {
    it("should return hello dwi", function() {
        expect(sayHello('Dwi')).toBe('hello Dwi')
    })
})