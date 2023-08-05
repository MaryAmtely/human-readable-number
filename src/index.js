module.exports = function toReadable (number) {
    const arrayDigits = Array.from(String(number), Number);

    let res = '';
    const hundred = 'hundred';
    const teen = 'teen';
    let nums = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };
    let nums2 = {
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
    }
    let nums3 = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }
    const zero = 'zero';
    const one = 'one';
    const two = 'two';
    const three = 'three';
    const four = 'four';
    const five = 'five';
    const six = 'six';
    const seven = 'seven';
    const eight = 'eight';
    const nine = 'nine';
    const ten = 'ten';
    const eleven = 'eleven';
    const twelve = 'twelve';
    const thirteen = 'thirteen';
    const fifteen = 'fifteen';
    const eighteen = 'eighteen';
    const twenty = 'twenty';
    const thirty = 'thirty';
    const forty = 'forty';
    const fifty = 'fifty';
    const sixty = 'sixty';
    const seventy = 'seventy';
    const eighty = 'eighty';
    const ninety = 'ninety';
    const oneHundred = 'one hundred';

        switch (number) {
            case 0:
                res = zero;
                break;
            case 1:
                res = one;
                break;
            case 2:
                res = two;
                break;
            case 3:
                res = three;
                break;
            case 4:
                res = four;
                break;
            case 5:
                res = five;
                break;
            case 6:
                res = six;
                break;
            case 7:
                res = seven;
                break;
            case 8:
                res = eight;
                break;
            case 9:
                res = nine;
                break;
            case 10:
                res = ten;
                break;
            case 11:
                res = eleven;
                break;
            case 12:
                res = twelve;
                break;
            case 13:
                res = thirteen;
                break;
            case 15:
                res = fifteen;
                break;
            case 18:
                res = eighteen;
                break;
            case 20:
                res = twenty;
                break;
            case 30:
                res = thirty;
                break;
            case 40:
                res = forty;
                break;
            case 50:
                res = fifty;
                break;
            case 60:
                res = sixty;
                break;
            case 70:
                res = seventy;
                break;
            case 80:
                res = eighty;
                break;
            case 90:
                res = ninety;
                break;
            case 100:
                res = oneHundred;
                break;
        }

         if ((number >= 14) && (number <= 19)) {
            switch (number) {
            case 14:
                res = four + teen;
                break;
            case 16:
                res = six + teen;
                break;
            case 17:
                res = seven + teen;
                break;
            case 19:
                res = nine + teen;
                break;
            }
        }

        if ((number > 20) && (number <= 99)) {
          if (arrayDigits[1] !== 0) {
            if (arrayDigits[0] == 2) {
                res = twenty + ' ' + nums[arrayDigits[1]];
            }
            if (arrayDigits[0] == 3) {
                res = thirty + ' ' + nums[arrayDigits[1]];
            }
            if (arrayDigits[0] == 4) {
                res = forty + ' ' + nums[arrayDigits[1]];
            }
            if (arrayDigits[0] == 5) {
                res = fifty + ' ' + nums[arrayDigits[1]];
            }
            if (arrayDigits[0] == 6) {
                res = sixty + ' ' + nums[arrayDigits[1]];
            }
            if (arrayDigits[0] == 7) {
                res = seventy + ' ' + nums[arrayDigits[1]];
            }
            if (arrayDigits[0] == 8) {
                res = eighty + ' ' + nums[arrayDigits[1]];
            }
            if (arrayDigits[0] == 9) {
                res = ninety + ' ' + nums[arrayDigits[1]];
            }
          }
        }

        if ((arrayDigits.length > 2) && (number % 100 === 0)) {
            res = nums[arrayDigits[0]] + ' ' + hundred;
        }

        if (number > 100) {
            if (number % 100 !== 0) {
                if ((arrayDigits[1] === 0) && (arrayDigits[0] !== 0)) { //сто один - сто девять 101-109
                    res = nums[arrayDigits[0]] + ' ' + hundred + ' ' + nums[arrayDigits[2]];
                }
                if ((arrayDigits[1] === 1) && (arrayDigits[2] === 0)) {
                    res = nums[arrayDigits[0]] + ' ' + hundred + ' ' + ten; // сто десять 110
                }
                if ((number % 10 === 0) && (arrayDigits[1] > 1)) {
                    res = nums[arrayDigits[0]] + ' ' + hundred + ' ' + nums3[arrayDigits[1]]; //деляться на 10, но больше 120
                }

                if ((arrayDigits[1] === 1) && (arrayDigits[2] !== 0)) {
                    res = nums[arrayDigits[0]] + ' ' + hundred + ' ' + nums2[arrayDigits[2]];
                }


            if ((arrayDigits[1] > 1) && (arrayDigits[2] !== 0)) {
                if (arrayDigits[1] == 2) {
                    res = nums[arrayDigits[0]] + ' ' + hundred + ' ' + twenty + ' ' + nums[arrayDigits[2]];
                }
                if (arrayDigits[1] == 3) {
                    res = nums[arrayDigits[0]] + ' ' + hundred + ' ' + thirty + ' ' + nums[arrayDigits[2]];
                }
                if (arrayDigits[1] == 4) {
                    res = nums[arrayDigits[0]] + ' ' + hundred + ' ' + forty + ' ' + nums[arrayDigits[2]];
                }
                if (arrayDigits[1] == 5) {
                    res = nums[arrayDigits[0]] + ' ' + hundred + ' ' + fifty + ' ' + nums[arrayDigits[2]];
                }
                if (arrayDigits[1] == 6) {
                    res = nums[arrayDigits[0]] + ' ' + hundred + ' ' +  sixty + ' ' + nums[arrayDigits[2]];
                }
                if (arrayDigits[1] == 7) {
                    res = nums[arrayDigits[0]] + ' ' + hundred + ' ' + seventy + ' ' + nums[arrayDigits[2]];
                }
                if (arrayDigits[1] == 8) {
                    res = nums[arrayDigits[0]] + ' ' + hundred + ' ' + eighty + ' ' + nums[arrayDigits[2]];
                }
                if (arrayDigits[1] == 9) {
                    res = nums[arrayDigits[0]] + ' ' + hundred + ' ' + ninety + ' ' + nums[arrayDigits[2]];
                }
            }
        }
    }

        return res;
}
