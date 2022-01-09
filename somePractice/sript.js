// lucky number

let num = 441122334444566;

function findLuckyNum(num) {
    num = [...String(num)];
    console.log(num)
    let result = {};
    for(let i = 0; i < num.length; i++) {
        if(result[num[i]]){
            result[num[i]]++;
        } else {
            result[num[i]] = 1;
        }
    }
    let finishResult = 0
    for(let key in result) {
        if(result[key] == key){
            finishResult = Math.max(finishResult, key)
        }
    }
    return finishResult;
}

// console.log(findLuckyNum(num));



function solution(number){
    let arr = []
    for(let i = 0; i <= number; i++) {
        if(i % 5 === 0){
            arr.push(i)
        } else if ( i % 3 === 0) {
            arr.push(i)
        }
    }
    return arr.reduce((acc, i) => acc + i)
}
// console.log(solution(10))



function likes(names) {
    let arr = names
    if(arr.length === 0) {
        console.log('no one likes this')
    } else if (arr.length === 1) {
        console.log(`${arr[0]} likes this`)
    } else if(arr.length === 2) {
        console.log(`${arr[0]} and ${arr[1]} like this}`)
    } else if(arr.length === 3) {
        console.log(`${arr[0]}, ${arr[1]} and ${arr[2]} like this`)
    } else {
        console.log(`${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`)
    }
}
// likes(['Maks','Maks','Maks','Maks','Maks'])



//Implement a function that accepts 3 integer values a, b, c. The function should
// return true if a triangle can be built with the sides of given length and false
// in any other case.

function isTriangle(a,b,c){
    if (a + b > c && a + c > b && b + c > a) {
        return true
    } else {
        return false;
    }
}

// console.log(isTriangle(1,2, 3))


//Complete the solution so that the function will break up camel casing, using a space between words.
// complete the function

function solution(string) {
    let arr = string.split(/(?=[A-Z])/).join(' ')
    return arr
}

// console.log(solution('camelCase'));


//Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(str) {
    return str.replace(/[aouieAOUIE]/g, '');
}

// console.log(disemvowel("This website is for losers LOL!"))


// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

function squareDigits(num){
    let newNum = String(num).split('').map(Number)
    for (let i = 0; i < newNum.length; i++) {
        newNum[i] *= newNum[i]
    }
    let finishNum = +newNum.join("");
    return finishNum
}

// console.log(squareDigits(34567));

//You are going to be given a word. Your job is to return the middle character
// of the word. If the word's length is odd, return the middle character. If the
// word's length is even, return the middle 2 characters.

function getMiddle(s){
    let arr = s.split('')
    let result
    if(arr.length % 2 !== 0) {
        result = arr[Math.floor(arr.length / 2)]
    } else if (arr.length % 2 === 0){
        result = arr[Math.ceil(arr.length / 2) - 1] + arr[Math.ceil(arr.length / 2)]
    }
    return result
}

// console.log(getMiddle('motherfuckers'))



//Create a function taking a positive integer as its parameter and returning a string
// containing the Roman Numeral representation of that integer.



function solution1(number){
    const roman = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    if(number === 0) {
        return '';
    }
    for (let i  = 0; i < roman.length; i++ ) {
        if(number >= roman[i][0]) {
            return roman[i][1] + solution1(number - roman[i][0])
        }
    }
}

// console.log(solution1(324));




//Define a function that takes one integer argument and returns logical value
// true or false depending on if the integer is a prime.

// function isPrime(num) {
//     if(num > 0 ){
//         for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
//             if(num % i !== 0) {
//                 return false
//             } else if (num === 0) {
//                 return true
//             }
//             return num > 1
//         }
//     } else if (num < 0 || num === 0) {
//         return false
//     }
// }
//
// console.log(isPrime(8));



function isPrime(n) {
    if(n < 2) {
        return true
    }

    let num = Math.sqrt(n)
    while(num <= n) {
        if(n % 2 === 0){
            return false
        }
        num++
    }
    return true
}
// console.log(isPrime(7));



//Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
//
// Example 1:
// a1 = ["arp", "live", "strong"]
//
// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
//
// returns ["arp", "live", "strong"]



function inArray(array1,array2){
    let result = [];
    for(let i = 0; i < array1.length; i++) {
        for(let j = 0; j < array2.length; j++) {
            if(array2[j].includes(array1[i])){
                result.push(array1[i]);
            }
        }
    }
    result =  Array.from(new Set(result));
    return result.sort()
}


a1 = [ "strong", "arp", "live"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]


 // console.log(inArray(a1, a2));




//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
//
// You can find some examples in the test fixtures.

function humanReadable (seconds) {
    if(seconds <= 359999) {
        let secondsInHours = 3600;
        let secondsInMinutes = 60;

        let hours = Math.floor(seconds/secondsInHours);
        let minutes = Math.floor((seconds - hours * secondsInHours) / secondsInMinutes);
        let secondsIn = seconds - (hours * secondsInHours + minutes * secondsInMinutes);

        if (hours < 10){
            hours = '0' + hours ;
        }
        if (minutes < 10) {
            minutes = '0' +  minutes;
        }
        if (secondsIn < 10) {
            secondsIn = '0' + secondsIn ;
        }
        return `${hours}:${minutes}:${secondsIn}`;
    }
}

console.log(humanReadable (323454));











