//    pallindrome and reverse string
// const str = "madam";

// let data1 =  str.split("")
// console.log(data1)
// let data2 = data1.reverse();
// console.log(data2)
// let data3 = data2.join("");
// console.log(data3)

// if(str === data3){
//     console.log("its pallindrome");

// }else{
//     console.log("its not ")
// }


// set new array and remove duplicate values

// let arr = [10, 45, 2,2,2,2,2, 89, 34]

// let data = [...new Set(arr)]
// console.log(data)

// find vowels 

// let str = "balasmilan";

// let data = str.match(/[aeiou]/gi);
// console.log(data.length)

//  find factorials

// function fn(n){
//     let result = 1;

//     for (i =1;i<=n;i++){
//         result *=i
//     }
//     console.log(result)
// }
// fn(10)

// function fn(a){
//     let f = 1;
//     for(i=1;i<=a;i++){
//         f *=i
//     }
//     console.log(f)
// }
// fn(5)
 
// Fibonacci Series
// its like 0 1 1 2 3 5 8 13 21 34 

// function f(n){
//     let a =0;
//     let b = 1;

//     for(i=1; i<=n;i++){
//         console.log(a)
//        let temap= a+b;
//     //    console.log(temap)
//        a=b;
//        b=temap;
//     }
// }
// f(5)

// search a duplicate value

// let arr = [1,2,3,2,4,5,1,5];

// let d= arr.filter((a,b)=>arr.indexOf(a) !== b )
// console.log(d)


//  first later capitle 

// let str = "milan";
// let d = str.charAt(0).toUpperCase()+str.slice(1)
// console.log(d)

// exchange values

// let a = "milan";
// let b = "balas";

// [a,b]= [b,a]
// console.log(a);
// console.log(b)

// let str = "millan";


// console.log(str.length)

// count Characters in String

// function fn(str){
//     let obj= {

//     }

//     for(let c of str){
//         obj[c] = (obj[c] || 0) +1;
//     }
//     console.log(obj)

// }
// fn("millaan")


// find a even number or odd

// let arr = [1,2,3,4,5,6,7,8,9]

// let d = arr.filter(a=>a % 2 !==0)
// console.log(d)


// check number is odd or even without use a modulas

// let a = 6;

// if(Math.floor(a/2)*2 ===a){
//     console.log("even")
// }else{
//     console.log("odd")
// }


// find number is odd or even without use a modulas

// let arr = [1,2,3,4,5,6,7,8]

// let d = arr.filter(a=>Math.floor(a/2)*2 !==a);
// console.log(d)


// remove duplicate values in array 

//  let arr = [1, 2, 2, 3, 4, 4, 5];

// let unique = [...new Set(arr)];
// console.log(unique);


// find a largest number in array 

// let array = [10, 45, 2, 89, 34];

// let d = Math.max(...new Set(array));
// console.log(d)


// find a second largest number in array

// let array = [10, 45, 2, 89, 34];

// let d = array.sort((a,b)=>b-a)[1]
// console.log(d)

// find a second minimum number in array

// let array = [10, 45, 2, 89, 34];

// let d = array.sort((a,b)=>a-b)[1]
// console.log(d)



// sum of array

// let array = [10, 45, 2, 89, 34];

// let d = array.reduce((a,b)=>a+b)
// console.log(d)

// multiply into 2

// let array = [10, 45, 2, 89, 34];

// let d = array.map(a=>a*2)
// console.log(d)

// convert this in one array

// let array = [10, 45, 2, 89,[4,6,7], 34];

// let d = array.flat()
// console.log(d)

// nested array convert in one array

// let array = [10, 45, 2, 89,[4,6,[456,455],7], 34];
// let d = array.flat(Infinity)
// console.log(d)

// check annagrams
// Two words have the same letters, but the letters are arranged in a different order.

// let a = "listen"
// let b = "silent"

// let a1 = a.split('').sort().join('')  
// let b1 = b.split('').sort().join('')  
// if(a1==b1){
//     console.log("yes")
// }else{
//     console.log("no")
// }

// Remove Falsy Values

// let arr = [0,1,false,2,"",3];

// let result = arr.filter(Boolean);

// console.log(result);

// find same values in these arrays

// let arr1 = [12,2,3,4,5,5,6]
// let arr2 = [1,2,3]

// let d = arr1.filter(a=>arr2.includes(a))
// console.log(d)