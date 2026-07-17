// console.log("helllo World");
// // let,var,const
// var a=1;
// var a=5; //reassign,redeclare,function scoped
// console.log(a);
// function s(){
//     var b=10;
    
// }
// // console.log(b); //error: using b outside its scope
// if(true){
//     var c=5;
// }
// console.log(c)

// let a=10; //reassign,not rededclared,block scoped
// let a=11; // error a already declared.
// a=11;
// console.log(a);

// if(true){
//     let d=20;
// }
// console.log(d); //let is block scoped so d is defined inside that block

// const a=5; //not redeclared,not reassign,block scoped.

// console.log(a); // Undefined (hoisting will be used)
// var a=5;
// console.log(a); // 5

// console.log(a); // Error because hositing is nto there here.
// let a=5;
// console.log(a); // Error

// function sum(a,b){ //parameters
//     return a+b;
// }
// console.log(sum(5,6)); //Arguments:while calling

// const sum = function(a,b){
//     return a+b;
// }
// console.log(sum(5,6)); //error we cant call function before declaring.

// function sum(){
//     console.log(arguments)
//     return arguments[0]+arguments[1];
// }
// console.log(sum(5,6))


// const sum=(a,b)=>a+b;
// console.log(sum(5,6))

// a=[2,3,1,,4,"niket"];
// console.log(a[-1]); //give undefined, to use negative indexes,use at() keyword
// console.log(a.at(1));
// console.log(a.at(4));

// a.unshift(7); //removes element from first index
// console.log(a);

// console.log(a.findIndex(x=> x==4)); //for finding index we need to make arrow function

// console.log(a.sort());

// console.log(a.sort((a,b)=>b-a));
// console.log(a.sort((a,b)=>a-b)); // if a-b is negative then sorting donot take place.
// console.log(a.sort((a,b)=>a+b)); //swap

// MAP FILTER REDUCE
// for(item in a) {
//     console.log(item)
// }
