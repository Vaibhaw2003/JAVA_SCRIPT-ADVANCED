// var a = 40;
// var b = 54;
// var c = a;
// console.log(a);
// console.log(b);
// console.log(c);

// var = brasses scop nhi hota hai .(eshame value change hoti hai or value bracket ke under or bahar dono  likhi jati hai)[var add itself to windows object].
// let = brasses scop hota hai.(eshame value change hoti hai or value bracket ke under likhi jati hai)
// const = brasses scop hota hai. const me value change nhi hoti hai.

// var a = 49;

// function myName(){
//     let va = 20;
//     console.log(va);
// }

// const b = 30;
// console.log(b);

// var a = 40;
// var b = 54;

// -------browser context API-------

//spread operator---

// var a = [1,2,3,4,5];
// var b = [6,7,8,9,10];
// var c = [...a,...b]; //... spread operator
// console.log(c);

// falsey values and truthy values---

// falsey values--- 0,"",undefined,null,NaN,false, document.all;
// truthy values---"abc",[],{},function(){},true,1,-1,Infinity;

// if(1){
//     console.log("true");
// }else{
//     console.log("false");
// }

// for each loop---

//for each loop array ke liye use hota hai
// foreach kabhi bhi main array me change nhi karta hai----

// var arr = [1,2,3,4,5,6,7,8,9,10];
// arr.forEach(function(val){
//     console.log(val * 2);
// });


// forin loop---

// forin loop object ke liye use hota hai
// forin loop kabhi bhi main object me change nhi karta hai----

// var obj = {
//     name : "harshit",
//     age : 20,
//     type : "programmer",
//     os : "windows"
// }

// for(var key in obj){
//     console.log(`The ${key} of object is ${obj[key]}`);
// }


// var obj = {
//     name :"vaibhae singh",
//     age : 20,
//     type: "programmer",
//     os : "windows"
// }

// for(var key in obj){
//     console.log(key,obj[key]) ;
// }


// callback function---(asynchronous programming)-------

// setTimeout(function(){
//     console.log("timer");
// },3000);


// first class function---(synchronous programming)-------

// function xyz (a){
//     a();

// }
// xyz(function(){
//     console.log("hello world");
// });


// object me se value delete karna---

// var obj = {
//     name : "harshit",
//     age : 20,
//     type : "programmer",
//     os : "windows"  
// }

// delete obj.os;