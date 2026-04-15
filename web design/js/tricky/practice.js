// find a largest number in array
// let arr = [33,4,44,55,66,90,95];

// let a = Math.max(...arr);
// console.log(a);
// 



//    second largest arr without using sort method 

//    function arr(n){
//     let first = Math.max(...n);
//     console.log(first)

//     let filterd = n.filter(num=> num !== first);
//     console.log(filterd);

//     let second = Math.max(...filterd)
//    console.log(second)
//    }

// arr( [1,2,3,4,5,6,7,8])


// remove all the space 
// let str = "Hello World From JS";

// let str1 = str.replace(/\s/g,"");
// console.log(str1)
// // second logic 
// let data= str.split(" ")
// console.log(data);
// let data1 = data.join("")
// console.log(data1)



// find a vowels and also count a each character in this 

// let str = "balasmilanrambhai";

// const data = str.match(/[aeiuo]/gi);
// // console.log(data)
// let result = {};
// for(let char of data){
    
   
//     result[char] = (result[char] || 0) + 1;

//     console.log(char)
// }
// console.log(result)

// find a second largest array 

// let arr = [33,4,44,55,66,90,95];

// let a = arr.sort((a,b)=> b-a)[1]
// console.log(a)


// Remove Duplicate Elements
// let arr = [11,11,2,3,44,44,55,6];
// let a = [...new Set(arr)]
// console.log(a)
// let b = a.sort((a,b)=>a-b)
// console.log(b)

// count wovels in string 

// function vowels(str){
// let count = 0;
// let vowels = "aeiou"

// for(let char of str.toLowerCase()){
//     if(vowels.includes(char))
//         count++;
// }
// return count;
// }
// console.log(vowels("milanbalas"))

// factorial program 

// function factorial(n){
//     let result = 1;

//     for(let i =1; i<=n; i++){
//         result *= i;

//     }
//     return result;

// }
// console.log(factorial(6))

// Fibonacci Series

// function fino(n){
//     a=0;
//     b=1;

//     for(i=1;i<=n;i++){
//         console.log(a)
//        let temp = a+b;
//         a=b;
//         b=temp;
//     }
//     }
// fino(6)


// check its prime or not 

// function prime(n){
//     if(n<=1) return false;

//     for(i=2; i<n; i++){
//         if(n%i===0){
//             return false;
//         }
//     }
// return true;

// }
// console.log(prime(7))

// let arr = [1,2,34];
// let a = arr.reduce((a,b)=>a+b);
// console.log(a)

// capitalize first letter 



// let str = "balas"

// let s = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(s)

// let s = str.slice(0,5) + str.charAt(5).toUpperCase() + str.slice(6);
// console.log(s)

// let s = str.toUpperCase();
// console.log(s)
// let obj = {};
// for(let char of str){
//     obj[char] = (obj[char] || 0) + 1
//     console.log(char)
// }
// console.log(obj)

// let str = "hello guys my name is balas milan"

// let obj = {};

// for (let char of str){
// // console.log(char)
//   obj[char] = (obj[char] || 0) + 1
// }
// console.log(obj)

// let str = "liste";
// let str1 = "silet";
// let str2 = str.split('');
// console.log(str2)
// str3 = str2.sort();
// console.log(str3);
// str4 = str3.join('')
// console.log(str4)

// str5 = str1.split("");
// console.log(str5);
// str6 = str5.sort();
// console.log(str6);
// str7 = str6.join('')
// console.log(str7)

// if(str4 ===str7){
//     console.log("is anagram")
// }else{
//     console.log("its not")
// }


// let str = "milanbalas";

// let str1 = str.match(/[aeiou]/gi)
// console.log(str1) 

// let obj = {}
// for(let char of str1){
//     console.log(char)
//     obj[char] = (obj[char] || 0) + 1
// }
// console.log(obj)

// let arr = [1,2,34,,5,6,6,77,88,88]
 

//  let arr2 = arr.filter(num=>arr1.includes(num));
//  console.log(arr2)


// js pattern 

// * * * *
// * * * *
// * * * *
// * * * *

// let n = 4;

// for (let i = 1; i<=n;i++){
//     // console.log(i)
//     let row = ""
//     for(let j =1; j<=n; j++){
//        row += "*"
//     }
//     console.log(row);
// }


// *
// **
// ***
// ****

// let n = 4;

// for (let i = 1; i<=n;i++){
//     // console.log(i)
//     let row = ""
//     for(let j =1; j<=i; j++){
//        row += "*"
//     }
//     console.log(row);
// }


// 1
// 1 2
// 1 2 3
// 1 2 3 4



// for(let i=1;i<=4;i++){
//     let row = "";
//     for(let j = 1; j<=i;j++){
//       row += j + " ";
        
//     }
//     console.log(row)
// }

// * * * 
// * * * 
// * * * 
// * * *  

 
//   for(i=1;i<=4;i++){
//     let row = " "
//     for(j=1;j<=3;j++){
//          row += "*" 
//     }
//     console.log(row)
//   }

   
// * * * 
// * * * 
// * * *  

 
//   for(i=1;i<=3;i++){
//     let row = " "
//     for(j=1;j<=3;j++){
//          row += "*" 
//     }
//     console.log(row)
//   }

// 1 2 3
// 4 5 6 
// 7 8 9 
//     let num = 1;
// for(i=1;i<=3; i++){
//     let row = "";
//     for(j=1;j<=3;j++){
//        row += num + " ";
//        num++
//     }
//     console.log(row)
// }

// 1
// 2 3
// 4 5 6
// 7 8 9 10

// let num = 1;

// for(i=1;i<=4;i++){
//     let row = ""
//     for(j=1;j<=i;j++){
//         row += num + " "
//         num++
//     }
//     console.log(row)
// }

// 1
// 22
// 333

//     let num = 1;
// for(i=1;i<=3; i++){
//     let row = "";
//     for(j=1;j<=i;j++){
//        row +=  i;
       
//     }
//     console.log(row)
// }


// 1
// 2 7
// 3 6 8
// 4 5 9 10

// let first = 1;
// let second = 7;
// let third = 8;
// let fourth = 10;

// for(i=1;i<=4;i++){
//     let row = " "
//     for(j=1;j<=i;j++){
//       if(j===1){
//         row += first++ + " "
//       }else if(j===2){
//         row += second-- + " "
//       }else if(j===3){
//         row += third++ + " "
//       }else if(j===4){
//         row += fourth++ + " "
//       }
//     }
//     console.log(row)
// }

// 1 4 7
// 2 5 8
// 3 6 9

// let first = 1;
// let second = 4;
// let third = 7;

// for(i=1;i<=3;i++){
//     let row = " "
//     for(j=1;j<=3;j++){
//        if(j===1){
//         row += first++ + " "
//        }else if(j===2){
//         row += second++ + " "
//        }else if(j===3){
//         row += third++ + " "
//        }
//     }
//     console.log(row)
// }


// 1 6 7
// 2 5 8
// 3 4 9

// let first = 1;
// let second = 6;
// let third = 7;

// for(i=1;i<=3;i++){
//     let row = " "
//     for(j=1;j<=3;j++){
//         if(j===1){
//             row += first++ + " "
//         }else if(j===2){
//             row += second-- + " "
//         }else if(j===3){
//             row+= third++ + " "
//         }
//     }
//     console.log(row)
// }

//  1 
//  1 1 
//  1 2 1
//  1 3 2 1

// let second = 1;
// let third  =1;
// let forth  =1;

// for(let i=1;i<=4;i++){
//     let row = " "
//     for(j=1;j<=i;j++){
//         if(j===1){
//             row += 1 + " ";
//         }else if(j===2){
//             row += second++ + " "
//         }
//         else if(j===3){
//             row += third++ + " "
//         }else if(j===4){
//             row += forth++ + " "
//         }
//     }
//     console.log(row)
// }

// 1
// 1 1
// 1 2 1
// 1 3 3 1


// let second = 1;
// let third  =1;
// let forth  =1;


// for(let i=1;i<=4;i++){
//     let row = " "
//     for(j=1;j<=i;j++){
//         if(j===1 || j===i){
//             row += 1 + " ";
//         }else{
//             row += (i - 1) + " "
//         }
       
//     }
//     console.log(row)
// }


// A
// A B
// A B C
// A B C D

// let first = "A";
// let second = "B";
// let third = "C";
// let forth = "D";

// for(i=1;i<=4;i++){
//     let row = " "
//     for (j=1;j<=i;j++){
//         if(j===1){
//             row += first + " "
//         }else if(j===2){
//             row += second + " "
//         }else if(j===3){
//             row += third + " "
//         }
//         else if(j===4){
//             row += forth + " "
//         }
//     }
//     console.log(row)
// }

//  A 
//  A B 
//  A B C
//  A B C D

// let a="A";
// let b = "B";
// let c = "C";
// let d = "D";


// for(i=1;i<=4;i++){
//     let row = " "
//     for (j=1;j<=i;j++){
//         if(j===1){
//             row += a + " "
//         }else if(j===2){
//             row += b + " "
//         }else if(j===3){
//             row += c + " "
//         }
//         else if(j===4){
//             row += d + " "
//         }
//     }
//     console.log(row)
// }


// A
// B C
// D E F
// G H I J

// let ch = 65;
// for(i=1;i<=4;i++){
//     let row = " "
//     for(j=1;j<=i;j++){
//         row += String.fromCharCode(ch) + " " ;
//         ch++;
//     }
//     console.log(row)
// }


// A
// B B
// C C C
// D D D D

// A
// B E 
// C F H 
// D G I J

// let a = "A";
// let b = "E";
// let c = "H";
// let d = "J"
// let ch = 65;
// let char = 69;
// let ch1 = 72;

// for(i=1;i<=4;i++){
//     let row = " "
//     for(j=1;j<=i;j++){
//         if(j===1){
//             row += String.fromCharCode(ch) + " "
//             ch++
//         }else if(j===2){
//            row += String.fromCharCode(char) + " "
//            char++;
//         }else if(j===3){
//            row += String.fromCharCode(ch1) + " "
//            ch1++;
//         }else if(j===4){
//            row += d + " "
//         }
//     }
//     console.log(row)
// }


// A
// B G 
// C F H
// D E I J

 
// let a = "A";
// let b = "G";
// let c = "H";
// let d = "J"
// let ch = 65;
// let char = 71;
// let ch1 = 72;

// for(i=1;i<=4;i++){
//     let row = " "
//     for(j=1;j<=i;j++){
//         if(j===1){
//             row += String.fromCharCode(ch) + " "
//             ch++
//         }else if(j===2){
//            row += String.fromCharCode(char) + " "
//            char--;
//         }else if(j===3){
//            row += String.fromCharCode(ch1) + " "
//            ch1++;
//         }else if(j===4){
//            row += d + " "
//         }
//     }
//     console.log(row)
// }


//  A 
//  B C 
//  D E F
//  G H I J
//  K L M N O

// let ch = 65;

// for(i=1; i<=5;i++){
//     let row = " "
//     for(j=1; j<=i; j++){
//         row += String.fromCharCode(ch) + " "
//         ch++
//     }
//     console.log(row)
// }

//  A
//  B B 
//  C C C
//  D D D D

// let ch = 64;

// for(i=1;i<=4;i++){
//     let row = " "
//     for(j=1;j<=i;j++){
//         row += String.fromCharCode(ch + i) + " "
//     }
//     console.log(row)
// }


// * * * * *
// *       *
// *       *
// *       *
// * * * * *


// let n = 5;
// for(i=1;i<=n;i++){
//     let row = " ";
//     for(j=1;j<=n;j++){
//         if(i===1 || i===n || j===1 || j===n){
//             row += "*"
//         }else{
//             row += " "
//         }
//     }
//     console.log(row)
// }

// *
// * *
// *   *
// *     *
// * * * * *

// let n = 5;

// for(i=1;i<=n;i++){
//     let row = " "
//     for(j=1;j<=i;j++){
//         if(j===1 || i===n ||j===i){
//             row += "*"
//         }else{
//             row += " "
//         }
//     }
//     console.log(row)
// }

//    1
//   1 2
//  1 2 3
// 1 2 3 4

// let n = 4;

// for(i=1;i<=n;i++){
//     let row = " "
//     for(j=1;j<=n-i;j++){
//         row += " "
        
//     }

//     for(k=1;k<=i;k++){
//             row += k +" "
//         }
//     console.log(row)
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


// 1 6 7
// 2 5 8
// 3 4 9

// let s=1;
// let h=6;
// let k=7;

// for(i=1;i<=3;i++){
//     let row = " "
//     for(j=1;j<=3;j++){
//         if(j===1){
//           row += s++;
//         }
//         else if(j===2){
//           row += h--;
//         }
//          else if(j===3){
//           row += k++;
//         }
    
//     }
//     console.log(row)
// }