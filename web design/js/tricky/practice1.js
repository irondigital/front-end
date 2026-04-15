// let name = 'MilanBalas';

// const get = name.match(/[aeiouAEIOU]/gi);
// console.log(get);

// const get2 = {};
// for (let char of get){
//     get2[char] = (get2[char] || 0)+1
//     console.log(char);

// }
// console.log(get2);

//  let arr = [33,4,44,55,66,90,95];

//  let arr2 = arr.sort((a,b) => b-a)[1];
//  console.log(arr2);
 
// let arr = [11,11,2,3,44,44,55,6];

// let arr1 = [...new Set(arr)];
// console.log(arr1);

// function add(n){
//    let result = 1
//     for(let i=1; i<=n; i++){
//     result *=i;
//     }
//     console.log(result);
// }
// add(5);

// function add(n){
// let a=1;
// let b=0;

// for(let i=1; i<=n; i++){
//     temp = a+b;
//     a=b;
 
//     b=temp;
//     console.log(temp)
// }

// }
// add(10);

// function add(n){

//     if(n<=1){
//         return "is not prime"
//     }else{
//         for(let i=2; i<n; i++){
//             if(n%i === 0){
//                 return "is not prime"
//             }
//         }
//         return "is prime"
//     }


// }
// console.log(add(3));

    // let arr = [1,2,3,4,5,6,7,8,9];

    // let arr2 = arr.reduce((a,b)=>a+b)
    // console.log(arr2);

//     let str = "balas"

// let s = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(s)

// let j = str.slice(0,5) + str.charAt(5).toUpperCase() + str.slice(6);
// console.log(j)


//  let a = "listen"
// let b = "silent"

// let a1 = a.split('').sort().join('')  
//   const db = console.log(a.split(''))
   
// let b1 = b.split('').sort().join('')  
// if(a1==b1){
//     console.log("yes")
// }else{
//     console.log("no")
// }

// let arr = [1,2,3,2,4,5,1,5];

// let d= arr.filter((a,b)=>arr.indexOf(a) !== b )
// console.log(d)
// let b=d.sort((a,b)=>a-b)
// console.log(b)

// let a = 8;

// if(Math.floor(a/2)*2 === a){
//     console.log("even")
// }else{
//     console.log("odd")
// }

// 1
// 1 2
// 1 2 3
// 1 2 3 4

// let n=4;
// for(let i=1; i<=n; i++){
//     let str = "";
//     for(let j=1; j<=i; j++){
//         str += j + " ";
//     }
//     console.log(str);
// }   

// 1 2 3
// 4 5 6 
// 7 8 9 

// let n=3;
// let count = 1;
// for(let i=1; i<=n; i++){
//     let str = "";
//     for(let j=1; j<=n; j++){
//         str += count + " ";
//         count++;
//     }
//     console.log(str);
// }

// 1
// 2 7
// 3 6 8
// 4 5 9 10

// let a = 1;
// let b = 7;
// let c = 8;
// let d = 10;

// let n=4;
// let count = 1;
// for(let i=1; i<=n; i++){
//     let str = "";
//     for(let j=1; j<=i; j++){
//         if(j===1){
//             str += a++ + " ";
//         }else if(j===2){
//             str += b-- + " ";
//         }else if(j===3){
//             str += c++ + " ";
//         }
//         else if(j===4){
//             str += d++ + " ";
//         }
//     }
//     console.log(str);
// }

// A
// B B
// C C C
// D D D D

//  let n=4;
//  for(let i=1; i<=n; i++){
//      let str = "";
//         for(let j=1; j<=i; j++){
//             str += String.fromCharCode(64+i) + " ";
//         }
//         console.log(str);
//  }

// *
// * *
// *   *
// *     *
// * * * * *

// let n=5;
// for(let i=1; i<=n; i++){
//     let str = "";
//     for(let j=1; j<=i; j++){
//         if(j===1 || j===i || i===n){
//             str += " * ";
//         }else{
//             str += "   ";   

//         }   
//     }
//     console.log(str);
// }


//    1
//   1 2
//  1 2 3
// 1 2 3 4

// let n=4;
// num = 1;
// for(let i=1; i<=n; i++){
//     let str = "";
//     for(let j=1; j<=n-i; j++){
//         str += " ";
//     }
//     for(let k=1; k<=i; k++){
//         str += k + " ";
//     }
//     console.log(str);
// }


//    1
//   2 3
//  4 5 6
// 7 8 9 10

// let n = 4;
// let num = 1;
// for(i=1;i<=n;i++){
//     let row = " ";
//     for(j=1;j<=n-i;j++){
//         row += " "
//     }
//     for(k=1;k<=i;k++){
//         row += num + " ";
//         num++
        
//     }
//     console.log(row)
// }
