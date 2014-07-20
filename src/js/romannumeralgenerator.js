UNIT_ARRAY = [
    '',
    'I',
    'II',
    'III',
    'IV',
    'V',
    'VI',
    'VII',
    'VIII',
    'IX'
];

TEN_ARRAY = [
    '',
    'X',
    'XX',
    'XXX',
    'XL',
    'L',
    'LX',
    'LXX',
    'LXXX',
    'XC'
];

HUNDREDS_ARRAY = [
    '',
    'C',
    'CC',
    'CCC',
    'CD',
    'D',
    'DC',
    'DCC',
    'DCCC',
    'CM'
];

THOUSANDS_ARRAY = [
    '',
    'M',
    'MM',
    'MMM'
];

INDEX_ARRAY = [
    UNIT_ARRAY,
    TEN_ARRAY,
    HUNDREDS_ARRAY,
    THOUSANDS_ARRAY,
];


var RomanNumeralGenerator = function(){
    this.generate = function(n){
        if (n > 3999){ throw new Error('Number is too large')};
        if (n < 1){ throw new Error('Number is too small')};

        var retVal = [];
        var nStr = n.toString();
        // put them in unit/tens/hundreds order
        var nArr = nStr.split('').reverse();


        for (var i=0;i<nArr.length;i++){
            retVal.push(INDEX_ARRAY[i][parseInt(nArr[i])]);
        }

        retVal.reverse();

        return retVal.join('');
    };
};
