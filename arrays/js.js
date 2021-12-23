let arr = ['A', 'A', 'A', 'A', 'B', 'C', 'C', 'C', 'A', 'C', 'C', 'C', 'C', 'C']
// let arr = [1,2,3,4,5,6,66,777,5,3,333,4,4,4,4,4,4]

//A = 4
//C = 5
//B = 1
//X = 0

function foo1(arr, letter) {
    const seriesOne = arr.reduce(
        (acc, item) => {
            const last_element = acc[acc.length - 1];
            if (last_element && last_element[0] === item && item === letter) {
                last_element[1]++;
            } else if (last_element && last_element[0] && last_element[-1] === item || item === letter) {
                acc.push([item, 1]);
            } else {
                acc.push([letter, 0]);
            }
            return acc;
        },
        []
    );
    return seriesOne.sort((a, b) => b[1] - a[1])[0]
}

// console.log(foo1(arr, 'A'))

//C
function foo2(arr) {
    const seriesTwo = arr.reduce(
        (acc, item) => {
            const last_element = acc[acc.length - 1];
            if (last_element && last_element[0] === item) {
                last_element[1]++;
            } else {
                acc.push([item, 1]);
            }
            return acc;
        },
        []
    );
    return seriesTwo.sort((a, b) => b[1] - a[1])[0]
}

// console.log(foo2(arr))


///////////////////////////////////


// bowling

// let rounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let pin = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// let aux2 = 0;
// let maxVal = 11;
// for (let round = 0; round <= rounds.length -1; round++) {
//     maxVal = maxVal - aux2;
//     console.log('Pins Remaining: ' + (maxVal-1));
//     let pins = getRandomPin(0, maxVal);
//     console.log(pins)
//     aux2 += pins;
//     if (pins === 10){
//         console.log('Round-' + (round + 1) +' | STRIKE!');
//         break; //leaves the function because when strike occurs no second round is played
//     }else{
//         console.log('Round-' + (round + 1) +' | pins striked: ' + pins);
//     }
// }
// console.log('Total pins striked: ' + aux2);
//
// function getRandomPin(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }


//Пузырьковая сортировка


let arrNew = [1, 2, 65, 34, 76, 4, 22, 55, 77, 87];


function bubbleSort(arr) {
    for (let i = 0; i <= arr.length; i++) {
        for (let j = arr.length - 1; j > 0; j--) {
            if (comparator(arr[j], arr[j + 1]) > 0) {
                swap(arr, j, j + 1)
            }
        }
    }
    return arr
}


const comparator = (a, b) => a - b
const swap = (arr, i, j) => {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

// console.log(bubbleSort(arrNew))

///////////////////////////////////////////////////////

//Сортировка выбором

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i

        for (let j = i + 1; j < arr.length; j++) {
            if (comparator(arr[min], arr[j]) > 0) {
                min = j
            }
        }
        if (min !== i) swap(arr, i, min)
    }
    return arr
}

// console.log(selectionSort(arrNew))

/////////////////////////////////////////////////////////

//Сортировка вставками

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = i;

        while (arr[current - 1] !== undefined && comparator(arr[current], arr[current - 1]) < 0) {
            swap(arr, current - 1, current);
            current--;
        }
    }
    return arr
}

// console.log(insertionSort(arrNew))


///////////////////////////////////////////////////////////

//Линейный поиск (полный перебор)

function linearSearch(arr, wanted) {
    let found = []
    arr.forEach((el, i) => {
        if (comparator(el, wanted) === 0) found.push(i)
    })
    return found
}

// console.log(linearSearch(arr, 2))

let number = '101'
// console.log(parseInt(number, 2))


///////////////////////////////////////


function getFib(n) {
    if (n < 2) {
        return n;
    }
    return getFib(n - 1) + getFib(n - 2)
}

// console.log(getFib(10))


//////////////////////////////////////////////////


// let arr1 = ['a', 'b', 'c'];
// console.log(`${arr1[0]} + ${arr1[1]} + ${arr1[2]}`)

// let arr2 = [1,2,3];
// console.log(arr2.reduce((acc, item) => {
//     return acc += item;
// }, 0));

// let arr3 = [2, 5, 3, 9];
// function multArr(arr) {
//     let result = 0
//     result = arr[0] * arr[1] + arr[2] * arr[3]
//     return result
// }
// console.log(multArr(arr3))


// let arr4 = [];
//
// arr4[3] = 'a';
// arr4[8] = 'b';
// console.log(arr4.length)


// let obj = {
//     'Минск': 'Беларусь',
//     'Москва': 'Россия',
//     'Киев': 'Украина'
// };
// function objToString(obj) {
//      for(let key in obj){
//          console.log(`${key} это ${obj[key]}`)
//     }
// }
// objToString(obj)

// const obj = {
//     Kolya: '200',
//     Vasya: '300',
//     Petya: '400'
// }
// for(let key in obj) {
//     console.log((`${key} sallary ${obj[key]} usd`))
// }

// let arr5 = [2, 5, 9, 15, 0, 4]
// for(let i = 0; i <= arr5.length; i++) {
//     if (i > 3 && i < 10) {
//         console.log(i)
//     }
// }

// let arr6 = [1, 2, 5, 9, 15, 0, 4]
// for(let i = 0; i <= arr6.length; i++) {
//     if(i === 4) {
//         console.log("It is here")
//         break
//     }
// }


//Выведите на экран только
// те числа из массива, которые начинаются на цифру 1, 2 или 5.
let arr7 = [10, 20, 30, 50, 235, 3000];

// for (let i = 0; i < arr7.length - 1; i++) {
//     let currentStr = arr7[i].toString()
//     if (currentStr.startsWith('1')
//         || currentStr.startsWith('2')
//         || currentStr.startsWith('5')
//     ) {
//         console.log(arr7[i])
//     }
// }


// for(let i = 0; i < arr7.length - 1; i += 2){
//     let sum = arr7[i] + arr7[i + 1];
//     console.log(sum)
// }


//
// for(let i = 0; i < arr7.length - 1; i += 2){
//     let sum = arr7[i] + arr7[i + 1];
//     console.log(sum)
// }

// for(let i = 0; i < arr7.length; i++){
//     console.log(arr7[i])
//     if(i % 3 === 2) {
//         console.log('*')
//     }
// }


// let arr8 = [1,2,3,4,5,6,7,8,9]
// let result = ''
// for(let i = 0; i <= arr8.length ; i++) {
//     let minus = '-'
//     result += i + minus
// }
// console.log( result)


// let num = 1000
// let sum = 0
// while (num > 50) {
//     num = num / 2
//     sum++
// }
// console.log(num , sum)




let user = {
    name: "John",
    surname: "Smith",

    fullName() {
        return `${this.name} ${this.surname}`;
    }
};

console.log(user.fullName());























