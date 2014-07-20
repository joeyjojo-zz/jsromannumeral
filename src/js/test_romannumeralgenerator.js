
describe("The RomanNumeralGenerator must generate the roman numeral equivalent of any integer between 1 and 3999", function(){
    it("should be able to deal with any integer between 1 and 3999", function(){
        var rmngen = new RomanNumeralGenerator();
        expect(rmngen.generate(1)).toEqual('I');
        expect(rmngen.generate(5)).toEqual('V');
        expect(rmngen.generate(10)).toEqual('X');
        expect(rmngen.generate(20)).toEqual('XX');
        expect(rmngen.generate(3999)).toEqual('MMMCMXCIX');
    });

    it("should throw an exception if the integer provided is less than 1", function(){
        var rmngem = new RomanNumeralGenerator();
        expect(rmngen.generate(0)).toThrow();
    });

    it("should throw an exception if the integer provided is greater than 3999", function(){
        var rmngem = new RomanNumeralGenerator();
        expect(rmngen.generate(4000)).toThrow();
    });

    it("should throw an exception if not provided an integer", function(){
        var rmngem = new RomanNumeralGenerator();
        expect(rmngen.generate("1")).toThrow();
        expect(rmngen.generate(1.0)).toThrow();
    });
});
