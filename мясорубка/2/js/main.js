// let arr = [12, 15, 20, 25, 59, 79]

// let sum = 0
// let count = 0
// for(let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//     count++
// }
// console.log(sum / count);


// let arr = [1, 2, 3];
// let arr2 = [];
// for(let i = arr.length - 1; i >= 0; i--) {
//     let elem = arr[i]
//     arr2.push(elem)
// }
// console.log(arr2);


// const friends = [
//     { name: 'alex', pizzas:  'pepperoni'},
//     { name: 'mike', pizzas: 'salami' },
//     { name: 'stas', pizzas: 'meat' },
//     { name: 'anna', pizzas: 'fish' }
// ];
// let fPizza = []
// for(let i = 0; i < friends.length; i++) {
//     fPizza.push(friends[i].pizzas)
// }
// console.log(fPizza);


// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
// let count = {}
// for(i = 0; i < fruits.length; i++) {
//     let one_fruit = fruits[i]
//     if(count[one_fruit]) {
//         count[one_fruit] += 1;
//     }
//     else {
//         count[one_fruit] = 1
//     }
// }
// console.log(count);

// let arr = [0, 1, false, 2, undefined, '', 3, null] 
// let arr2 = []
// for(let i = 0; i < arr.length; i++) {
//     let massive = arr[i]
//     if (massive) {
//         arr2.push(massive)
//     }
// }
// console.log(arr2);

const arr9 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  for (let i = 0; i < arr9.length; i++) {
    for (let j = 0; j < arr9[i].length; j++) {
      if (i !== j) {
        arr9[i][j] = 0;
      }
    }
  }
  
  console.log(arr9);