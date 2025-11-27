// let arr = ["programming", "code", "javascript", "react"];
// let newArr = [];
// let firstStrs = [];
// let result = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr[i] = [...arr[i].split("")];
// }
// for (let j = 0; j < newArr.length; j++) {
//   firstStrs += [...newArr[j][0].toUpperCase()];
// }
// let newFirstStrs = firstStrs.split("");
// for (let t = 0; t < newArr.length; t++) {
//   newArr[t].splice(0, 1);
// }
// for (let k = 0; k < arr.length; k++) {
//   result[k] = [firstStrs[k], ...newArr[k]].join("");
// }
// console.log(result);

// function callback(x) {
//   console.log("callback start");
//   console.log(x);
//   console.log("callback finish");
// };

// function main(x) {
//   console.log("main start");
//   callback(x);
//   func(x);
//   console.log("main finish");
// };

// main("hello");

// let friends = ["Alvarez", "Jessica", "Jason", "William"];
// for(let item of friends) {
//     console.log(item);
// };

// friends.forEach((item, index, array) => {
//     console.log(item);
// });

// friends.map((item, index, array) => {
//     console.log(item, index, array);
// });

// let filter = friends.filter((item) => {
//     if(item.length > 5) {
//         return item;
//     }
// });
// console.log(filter);

// let res = friends.findIndex(item => item.length === 7)
// console.log(res);

// let res = friends.indexOf('Jason')
// console.log(res);

// let res = friends.find(item => item.length === 7)
// console.log(res);

// let res = friends.includes('Jack', 3)
// console.log(res);

// let res = friends.every(item => item === 'Alverez')
// console.log(res);

// let res = friends.some(item => item === 'Alvarez')
// console.log(res);

// let arr = [1, 2, 3, 4, 5, 6];
// let res = arr.reduce((acc, curr) => acc + curr, 0);
// console.log(res);
// let res = 0;
// for(let num of arr) {
//     res+= num
// }
// console.log(res);

 
// let fruits = [
//     "apple",
//     "pineapple",
//     "apple",
//     "pineapple",
//     "mango",
//     "mango",
//     "mango",
//     "banana",
//   ];
  
//   let res = fruits.reduce((acc, item) => {
//     if (acc[item]) {
//       acc[item]++;
//     } else {
//       acc[item] = 1;
//     }
//     return acc;
//   }, {});
//   // {apple: 1} // 1krug
//   // {apple: 1, pineapple: 1} // 2krug
//   // {apple: 2, pineapple: 1} // 3krug
//   // {apple: 2, pineapple: 2} // 4krug
//   console.log(res);
  





///////////////////////////////


//CALLBACK FUNCTION

// function callback(a, b) {
//   return a + b
// }
// console.log(callback(2, 5));

// function parentFunc(fn) {
//   console.log(fn);
// }

// parentFunc(callback);



// МЕТОД МАССИВА


// function logger(fn) {
//   for(let i = 0; i < this.length; i++) {
//     fn(this[i], i, this);
//   };
// };

// Array.prototype.logger = logger;
// nums.logger((item, index, array) => console.log(item, index, array));


//FOR_EACH/MAP FUNCTIONS

// const friends = ['Vasya', 'Petya', 'Jessica'];

// friends.forEach(item => console.log(item));
// ///////////
// friends.map((item) => {
//   return 'hello' + item;
// })
// console.log(friends);



// REDUCE
// let arr = [1, 2, 3, 4, 5, 6];
// let res = arr.reduce((acc, curr) => acc + curr, 0)
// console.log(res);


// // 12
// let checkTask = {
//   students: ['Helley', 'Joe', 'Tommy'],
//   title: 'Our student:',
//   showList() {
//       this.students.forEach(item => console.log(`${this.title}: ${item}`)) 
//   },
// };
// checkTask.showList()



// // 14
// let stishok = 'Сложный путь у программиста, Только горе - не беда, Если выбрал путь тернистый - То тогда тебе - сюда! '

// function checkTask(input) {
//    let array = input.split(' ');
//    let changed = array.map(item => {
//        if(item.length  4) {
//            return item[0] + (item.length - 2) + item[item.length - 1]
//        } else {
//            return item
//        }
//    });
//    return changed.join(' ')
// }
// console.log(checkTask(stishok))


let checkTask = {
    currentFloor: 1,
    printFloor: function() {
        return this.currentFloor
    },
  
    upOneFloor: function() {
        if(this.currentFloor < 16) {
            this.currentFloor++;
            return this.currentFloor
        }  
        else {
            return 'Error!'
        }
    },
  
    downOneFloor: function() {
        if(this.currentFloor > 1) {
            this.currentFloor--;
            return this.currentFloor
        }
        else{
            return 'Error!'
        }
    },
  
    toFloor: function(floor) {
        if(floor < 1 || floor > 16) {
            return 'Error!'
        }
        
        while (this.currentFloor < floor) {
            this.upOneFloor()
            return this.printFloor()
        }
  
        while (this.currentFloor > floor) {
            this.downOneFloor()
            return this.printFloor()
        }
  
        return `Вы на ${floor}`
    }
  } 