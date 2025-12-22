// Javascrit variable 
// Varaable ? > Container to store data values
/* Multiline */
var num1 = 23;   //Topic:- object
var num = 54;
// console.log(num1 + num)


// console.log("hello")
var str1 = "Yugant is string"; // string
var bol1 = true; //boolean
var b = false;
// console.log(bol1 , b);  

var und = undefined; // undifined
var nu = null;  //Null (Nothing)
// console.log(und );
// console.log(nu);   

//Topic:- data type of 2 type? 
// 1)primitive data type : undefined,null,number,string,boolean,symbol
// 2) Reference data type: Arrays and Objects

// Array
// var arr = [1, 2, 8, 4, 5];
// var arr = [1, 2, "Yugant", 8, 4, 5]; // mix bhi work kr ta h but yaa arry hi khelaya ga 
// console.log(arr[2],arr[1]);

//Topic:- Operators in javaScrpit
// Arithemethatic Oprators
var a = 10;
var b = 30;
// console.log("The value of a + b is" , a+b);
// ismee ma same rha ta ha +,-,*,/, also same use in called oprators
// var c = b;
// c = +2; // use mutliple operators
// console.log(c);
//  Comparision oprators
// console.log(a==b)
// console.log(a>=b) //Many oprators us like k if else condition
//  Topic:- Logical And oprators
//  console.log(true && true) // only true wla true rha ga baki sab false
//  console.log(true && false)
//  console.log(false && true)

//  Topic:- Logical And oprators
// console.log(false || true)
// console.log(false || false) // isma ma false flase ho ga tabhi false ho ga baki sab condition ma true hi rha ga yaa

// Lgoica Not > true , false > ualta work kr ta h 
// console.log(!false);   //(!) symbol(Not)

// Topic :- Function  use logic
// DRY =  function ko bhot bar use kr sakta hai   ***********
// function avg(a, b) {
//     c = (a + b) / 2;
//     // return c;
// }
// c1 = avg(10, 10);
// c2 = avg(5, 5);
// console.log(c1 ,c2)

// topic >= Condition in Javascripit 
// Condition statement
/*
var age =50 ;
if(age<10){
    console.log("Your a small child ")
    }
    else if(age>22){
        console.log("Your are a uncle")
    }
    else if(age>40)
    {
        console.log("Your a old men")
    }
    else{
        console.log("Your are a kid");
    }
*/
// loop
// var arr = [1, 2, 3, 5, 8];
// console.log(arr)
// for(var i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// arr.forEach(function(Element){  // element no le rha h esma apna naam bhi rakh sakta hai (confusion)
//     console.log(Element);
// })
// let j = 0; // using same var in javascript ma use only let 
// const y = 3;// constant ha yaa
// let z=0;
// while(z<arr.length){    // while loop phla condition check kr ta h phir chal ta h 
//     console.log(arr[z])
//     z++;
// }
// loop     
// do{          // do while loop at lest one time chal ta hi h do k case ma  
//     console.log(arr[z]);
//     z++;
// }                            **** Do y galta h or samj nhi ayaa hai
// while (z <arr.length);   
// var ary = [1,2,3,4,5,6,7];
// // console.log(ary)
// for(var i=0;i<ary.length;i++){
//     if(i==3){
//         // break; //break ka baad koi line nhi aii gai 
//         continue;  // vo line chor k continue kaam kra ga 
//     }
//     console.log(ary[i])
// }

let myArr = ["Fan", "Yugant", 32,null,true]
// Array Method
console.log(myArr.length);
// myArr.pop();  // pop ma pecha sa ak nikala g (variable) 
// myArr.push("Yugant");// Add ho gya yugant push kr diya array m
// myArr.shift()// first word nikal gya "Fan"
// myArr.unshift("fan") // Add on kr diya first line ma
// console.log(myArr.unshift("Yugant"));  // add word new array ki length return kr de ga
const newLen = myArr.unshift("Yugant")  // same work new array ki length return 5+1=6 {upper wla jesa same work kra ga}
console.log(newLen);// arrat=y Method
console.log(myArr);







