//    *********  Inch To Feet  ***********

// function inchToFeet(inch){
//     const feet = inch / 12;
//     return feet;
// }
// const height = inchToFeet(75);
// console.log(height);

//     **********  Milse To Kilomiter  **********

// function mileToKilomiter(mile){
//     const kilo = mile * 1.60934;
//     return kilo;
// }
// const total = mileToKilomiter(10);
// console.log(total)

// function kiloToMiter(kilo){
//     const miter = kilo * 1000;
//     return miter;
// }
// const total = kiloToMiter(5);
// console.log(total)


// function miterToKilo(miter){
//     const kilo = miter / 1000;
//     return kilo;
// }
// const total = miterToKilo(12000);
// console.log(total)

//     **********  Leap Year  *************

// function leapYear(year){
//     if(year % 4 === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// const folafol = leapYear(2032);
// const total = leapYear(2050);
// console.log(folafol, total)

//    ***********  Odd  Average   *********

// function oddAvarage(numbers){
//     const odd = [];
//     for(const number of numbers){
//         if(number % 2===1){
//             //  console.log(number)
//             odd.push(number);
//         }
//     }
//     // console.log(odd)
//     let sum = 0;
//     for(const number of odd){
//         sum = sum + number;
//     }
//     const count = odd.length
//     console.log(sum, count)
//     const Average = sum / count;
//     return Average
// }
// const numbers = [14, 15, 16, 17, 18, 19, 25, 23]
// const Average = oddAvarage(numbers)
// console.log('total', Average)

//      **********   Remove Duplicate Eliments  ******

// const friends = ['habil', 'kabil', 'bablu', 'hablu','kabil', 'habil']
// const flower = ['golap', 'joba', 'beli', 'togor','beli', 'joba']
// console.log(flower)
// function duplicate(array){
//     const item = [];
//     for(const number of flower){
//         if(item.includes(number) === false){
//             item.push(number)
//         }
//     }
//     return item;
// }
// const myFriend = duplicate(flower)
// console.log(myFriend)

//    *************  Math    ************

// const min = Math.min(10, 20, 15, 5, 7, 14, 28);
// console.log(min)
// const max = Math.max(10, 20, 15, 5, 7, 14, 28, 95);
// console.log(max)
// console.log(Math.PI)
// console.log(Math.abs(10-20))  parthokko kore dibe
// console.log(Math.round(2.25))  purno shongkha kore dibe
// console.log(Math.floor(2.25)) nicher purno shongkha kore dibe
// console.log(Math.ceil(2.25))  uporer purno shongkha kore dibe

//     ********  Date and Time  *********

// const today = new Date();
// console.log(today);
// const date = new Date('2062-10-09');
// console.log(date);

//    ********** Swap, Temp   **********

// let a = 5;
// let b = 7;
// console.log(a, b)
// const temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// let a = 5;
// let b = 7;
// console.log(a, b);
// [a, b] = [b, a];
// console.log(a, b);