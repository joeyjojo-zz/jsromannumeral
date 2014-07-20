
var RomanNumeralGenerator = function(){
    this.generate = function(n){
        if (n > 3999){ throw new Error('Number is too large')};
        if (n < 1){ throw new Error('Number is too small')};
        return "I";
    };
};
