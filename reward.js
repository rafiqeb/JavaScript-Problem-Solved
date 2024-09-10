//     **********  Problem solved 1 *********

// function calculateMoney(ticketsale){
//     if(ticketsale < 0 || typeof ticketsale !== 'number'){
//         return 'error';
//     }
//     let result = ticketsale * 120 - (500 + (8 * 50));
//     return result;
// }
// console.log(calculateMoney(10))
// console.log(calculateMoney(1055))
// console.log(calculateMoney(93))
// console.log(calculateMoney(-30))
// console.log(calculateMoney('seven'))

//     ********* Problem solved 2  *********

// function checkName(name){
//     if(typeof name !== 'string'){
//         return 'invalid'
//     }
//     // let lastLatter = name[name.length - 1]
//     let lastLatter = name.slice(-1).toLowerCase()
//     let result = false
//     let chackArray = ['a', 'e', 'i', 'o', 'u', 'y', 'w']
//     for(let char of chackArray){
//         if(char === lastLatter){
//             result = true
//         }
//     }
//     return result ? 'Good name' : 'Bad name'
// }
// console.log(checkName('Salman'))
// console.log(checkName('RAFEE'))
// console.log(checkName('Jhankar'))
// console.log(checkName(199))
// console.log(checkName(['Rashed']))

//    ***********   Problem solve 3  ***********

// function deleteInvalids(array){
//     if(!Array.isArray(array)){
//         return 'Invalid a number'
//     }
//     let numberArray = []
//     for(let element of array){
//         if(typeof element === 'number' && isNaN(element) === false)
//             numberArray.push(element)
//         }
//         return numberArray;
// }
// console.log(deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], {ob: "lala"}]))
// console.log(deleteInvalids(["1", {num:2}, NaN]))
// console.log(deleteInvalids([1, 2, -3]))
// console.log(deleteInvalids({num:[1, 2, 3]}))

//    *************  Problem solved 4  ***********

// function password(obj){
//     if(obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || obj.birthYear.toString().length !== 4){
//         return 'Invalid'
//     }
//     let cappitalSiteName = obj.siteName[0].toUpperCase() + obj.siteName.slice(1)
//     let passwordString = cappitalSiteName + '#' + obj.name + '@' + obj.birthYear
//     return passwordString;
// }
// console.log(password({name: "kolimuddin", birthYear: 1999, siteName: "google"}))
// console.log(password({name: "rahat", birthYear: 2002, siteName: "Facebook"}))
// console.log(password({name: "toky", birthYear: 200, siteName: "Facebook"}))
// console.log(password({name: "misha", birthYear: 2002}))

//    **********  Problem solved 5  ***********

// function monthlySavings(arr, livingCost){
//     if(!Array.isArray(arr) || typeof livingCost !== 'number'){
//         return 'Invalid input';
//     }
//     let totalIncome = 0;
//     for(let payment of arr){
//         if(payment >= 3000){
//             let tex = payment * 0.2;
//             totalIncome += payment - tex;
//         }
//         else{
//             totalIncome += payment
//         }
//     }
//     let savings = totalIncome - livingCost;
//     if(savings >= 0){
//         return savings;
//     }
//     else{
//         return 'earn more';
//     }
//     // return savings >= 0? savings :'earn more';
// }
// console.log(monthlySavings([1000, 2000, 3000], 5400))
// console.log(monthlySavings([1000, 2000, 2500], 5000))
// console.log(monthlySavings([900, 2700, 3400], 10000))
// console.log(monthlySavings(100, [900, 2700, 3400]))