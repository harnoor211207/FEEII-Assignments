// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,3)); //5

// console.log(a(2,3)) //error value is not assigned.
// const a=function sum(a,b){
//     return a+b;
// }

// const a=function(a,b){ //Anonmyous function

// }

// ARROW FUNCTIONS(WITHOUT THE FUNCTION KEYWORD)


//use of curly braces require return statement
// const a=(a,b)=>{
//     return a+b;
// }
// console.log(a(2,3));

// // without using curly braces we dont need to writr return statement.
// const c=(a,b)=>(a+b);
    
// console.log(a(2,3));
// //  object making in js.
// const d=()=>({a:1,b:2}) //no this  keyword,argumments and super keyword.
// console.log(d())

// function sum(){
//     console.log(arguments);
//     console.log(arguments[0]+arguments[1]);
// }
// sum(2,4)
// // If u use 15 arguments u need to pass 15 parameters to avoid this situation 
// // use defined keyword arguments.


// but arrow function do not have arguments keyword, 
// so we do the same thing in them using rest operator.


// // REST OPERATOR(GATHER ELEMENTS)
// const sum=(...number)=>{ //this is rest operator not to be
// //  confused with spread operator 
//     console.log(number);
// }
// sum(1,2,3,4,5,6,7);//gather elements.

// // SPREAD OPERATOR(SPREAD ELEMENTS OF ARRAY)
// a=[1,2,3,4,5,6];
// console.log(...a);///spreads elements
// console.log(Math.max(...a));//6

// const b=[...a,7,8,9];
// console.log(b);

// FUNCTIONAL SCOPING

// function a(b){
//     b();
// }
// function b(){
//     console.log("Hello");
// }
// a(b)

// // higher order functions: functions that either receive a function
// // as a parameter or return a function.
// function a(b){
//     b();
// }
// function b(){
//     console.log("Hello");
// }
// const c=a(b);
// c();

// // LEXICAL SCOPING: When inner function can access outer function
// function outer(){
//     var a=3;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// outer();

// function outer(){
//     const a=3;
//     function inner(){
//         a++;
//         console.log(a);
//     }
//     inner();
// }
// outer();

// // arrays
// const arr = new Array(1, 2, 3, 4); // new keyword allocates dynamic memory at runtime
// console.log(arr);
// console.log(arr.at(-1)); // at() was added in 2023, you can use negative indexing with arrays using this

// for(item in a){
//   console.log(item);
// }

// // map, filter, reduce
//   // map, filter -> return new array
// a.foreEach((item) => {
//   console.log(item);
  
// })

// const b = a.map(item => item * item);
// console.log(b);

// const c = a.filter(item => item%2==0);
// console.log(b);

const student={
    name:"Harnoor",
    age:20,
    address:"Agra"
}
console.log(student.name);
console.log(student["name"]); // when key is a variable and it is dynammic  then use square bracketss\
