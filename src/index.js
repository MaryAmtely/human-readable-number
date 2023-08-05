module.exports = function toReadable (number) {
    const arrayDigits = Array.from(String(number), Number);

    let res = '';
    const hundred = 'hundred';
    const teen = 'teen';
    const ty = 'ty';
    let nums = {
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
        //  if ((number > 20) && (number < 30)) { //рабочий код
        //     res = twenty;
        //     switch (number) {
        //     case 21:
        //         res += ' ' + one;
        //         break;
        //     case 22:
        //         res += ' ' + two;
        //         break;
        //     case 23:
        //         res += ' ' + three;
        //         break;
        //     case 24:
        //         res += ' ' + four;
        //         break;
        //     case 25:
        //         res += ' ' + five;
        //         break;
        //     case 26:
        //         res += ' ' + six;
        //         break;
        //     case 27:
        //         res += ' ' + seven;
        //         break;
        //     case 28:
        //         res += ' ' + eight;
        //         break;
        //     case 29:
        //         res += ' ' + nine;
        //         break;
        //     }
        // }



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

        if (number > 100) {
            if ((arrayDigits[1] !== 0) && (arrayDigits[2] === 0)) {
                if (arrayDigits[1] == 1) {
                    res = nums[arrayDigits[0]] + ' ' + hundred + ' ' + ten + ' ' + nums[arrayDigits[2]];
                }
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

        return res;
}
