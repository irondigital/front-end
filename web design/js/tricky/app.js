// const data = "milanbalas";

// const wovels = "aeiouAEIOU";

// const matches = data.match(/[aeiou]/gi);
// console.log(matches)
// console.log(matches.length)

// now we have two Array

// var str = [1,2,3,4]
// var num = ["milan","balas"];

// var data = num;
//      num = str;
//      str = data;
//      console.log(data)
//      console.log(num)
//      console.log(str)


// let num = 10;

// if(num % 2 ==0){
//     console.log("its a even")
// }else{
//     console.log("odd")
// }

// let num = 7;

// if( Math.floor(num/2)*2 ===num){
//     console.log("even")
// }else{
//     console.log("odd")
// }


// let array = [1,2,3,4,5,6,7,8,9,0]

// let even = array.filter(num =>(Math.floor(num/2)*2 !== num));
// console.log(even)

// let arr = [10, 15, 20, 25, 30, 35];

// let even = arr.filter(num => num % 2 === 0)
// console.log(even);
// let sum = even.reduce((acc, val) => acc + val, 0);
// console.log(sum);

// let arr = [1, 2, 2, 3, 4, 4, 5];

// let unique = [...new Set(arr)];
// console.log(unique);


// let array = [1,2,3,4,5,6]

// const data = array.filter(num => Math.floor(num/2)*2 === num)
// console.log(data)
// console.log(data.length)

// let array = [10, 45, 2, 89, 34];

// let largest = Math.max(...array);
// console.log(largest); // 89

// let array = [1, 2, 3, 4, 5];

// const data = array.reverse()
// console.log(data)



// let array = [1, 2, 3, 4, 5];

// const data = array.forEach(num => console.log(num / 2));
// console.log(data)

//  let array = [1, 2, 3, 4, 5];
//   let data = Math.max(...array);
//     console.log(data)

// let array = [1, 2, 3, 4, 5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5];

// let data = [... new Set(array)]
// console.log(data)

    // let array = [1, 2, 3, 4, 5];
    // let data = array.forEach(num => {
    //     if(num % 2 === 0){
    //         console.log(num)
    //     }
    // }           )

    // let array = [1, 2, 3, 4, 5];
    // let data = array.reduce((acc, val) => acc + val,2);
    // console.log(data)

//     let i = 1;

// while (i <= 3) {
//   console.log(i);
//   i++;
// }

// let arr = [10, 20, 30];

//   let daya = Math.max(...arr);
//     console.log(daya)
// const data = "milanbalas";
// const promise = new Promise((resolve,reject)=>{
//     if(data.length <5){
//         resolve("data is greater than 5")
//     }else{
//         reject("data is less than 5")
//     }
// })
// promise.then((m)=>{
//     console.log(m)
// }).catch((err)=>{
//     console.log(err)
// })


   

// 


// let arr =[20,30,40,50,60]

// let data = Math.max(...arr);
// console.log(data)

// for this wee find second largest number in the array
// let data = arr.sort((a,b)=>b-a)[1]
// console.log(data)

// let data = arr.reduce((a,b)=>a+b,0)
// console.log(data)


// let arr = [1,22,33,44,33,22,44,55,1,50];

// let unique = [...new Set(arr)];
// console.log(unique);

// let arr = [ 1, 22, 33, 44, 55, 50 ]

// const data  = Math.max(...arr)
// console.log(data)


// let arr = [ 10,,5,4,3,2,1, 22, 33, 44, 55, 50 ]

// const data  = arr.sort((a,b)=>a-b)[5]
// console.log(data)

// const data = arr.sort((a,b)=>b-a)[1]
// console.log(data)

// const data = arr.reduce((a,b)=>a+b,0)
//  console.log(data)

// let str = "hello i am a milan balas"

// let data = str.match(/["aeiou"]/gi);
//  console.log(data)
// console.log(data.length)


//  let str = "hello i am a milan balas";

//  let data = str.padStart(5,"lo")
//  console.log(data)

// check pallindrome;

// let str = "madam";
// let data = str.split("");
// console.log(data)
// let reverse = data.reverse();
// console.log(reverse)
// let join = reverse.join("");
// console.log(join)
// if(str === join){
// console.log("its a pallindrome")
// }else{
// console.log("its not a pallindrome")
// }

// let data = "nayan"
// let data1 =  data.split("")
// console.log(data1);
// let data2 = data1.reverse("");
// console.log(data2)
// let data3 = data2.join("")
// console.log(data3)
//  if(data == data3){
//  console.log("its palindrome")
// }else{
//     console.log("not palindrome")
// }

// let str = "hello i am a from gujarat";

// let str1 = str.match(/["aeiou"]/gi)
// console.log(str1)
// const data = str1.join("");
// console.log(data)





// let str = "hello i am a from gujarat";

// let data = str.match(/["aeiou"]/gi);
// console.log(data)
// console.log(data.length)

// const data1 = data.filter(vowel => vowel.toLowerCase() === "e");
// console.log(data1)
// console.log(data1.length)
// const data1 = data.reverse();
//   const data2 = data1.join("");
// if(data2 === data1){
//     console.log("its a pallindrome")
// }else{
//     console.log("its not a pallindrome")
// }



// const data = "hello i am a programmer";
//  const data1 = [...new Set(data)].join("");
//     console.log(data1)
 
// let arr = [10, 5, 20, 8]

// let data = Math.max(...arr);
// console.log(data)
// let arr = [10, 5, 20, 8]
// let max = Math.min(...arr)
// console.log(max)
// let arr = [1,2,2,3,4,4]

// let unique= [...new Set(arr)]
// console.log(unique)
//   let arr = [1,2,2,3,4,4]
//   let un = [...new Set(arr)]
//   console.log(un)


// let arr = [10, 5, 20, 8];
// let data = arr.sort((a,b)=>a-b)[1]
// console.log(data)

//  let arr = [10, 5, 20, 8];
//  let data = arr.sort((a,b)=>b-a)[3]

// console.log(data)

// let arr = [1, [2, [3, 4]], 5]
// const data = arr.flat(Infinity);
// console.log(data)

// let arr = [1, [2, [3, 4]], 5];
// const data  = arr.flat(Infinity);
// console.log(data)

// let val = 10;
// if(val % 2 ==0){
//     console.log("this is a prime number")
// }else{
//     console.log("this")
// }


// 1 
// 2 3
// 4 5 6 
// 7 8 9 10

// let num=1;
// let col = 1;

// for(i=1;i<=4;i++){
//     let row = ""
//     for(j=1;j<=i;j++){
//         row += num + " ";
//         num++;
        
// } 
      
//     console.log(row);
// }

// 1
// 2 7
// 3 6 8
// 4 5 9 10

let first = 1;
let second = 7;
let third = 8;
let fourth = 10;

for(i=1;i<=4;i++){
    let row = " "
    for(j=1;j<=i;j++){
      if(j===1){
        row += first++ + " "
      }else if(j===2){
        row += second-- + " "
      }else if(j===3){
        row += third++ + " "
      }else if(j===4){
        row += fourth++ + " "
      }
    }
    console.log(row)
}