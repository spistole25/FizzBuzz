const fizz_buzz = require('./fizz_buzz');

describe("FizzBuzz", () => {

    test('[3] should be fizz', () => {
        expect (fizz_buzz([3])).toBe('fizz')
    })
});