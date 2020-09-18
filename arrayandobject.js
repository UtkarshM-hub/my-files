console.log("this is arrays and object");

let city=["nagpur","mumbai","satara","kolhapur","delhi"];
let fruit=["mango","banana","apple","gugava","mac"];
let marks=[23,434,565,64,3435];
let mixed=[12,234,'shivam',['vaibhav','arjun'],'binod'];

console.log(city);
console.log(fruit);
console.log(marks);
console.log(mixed);

let arr= new Array("shivam","shreyash","chinmay","vaibhav","anish");
console.log(arr[4]);

let value=marks.indexOf(565);
console.log(value);

// Mutating and Modifying arrays
// marks.push(100);
// console.log(marks);
// marks.pop();
// console.log(marks);
// marks.shift();
// console.log(marks);
// marks.unshift(45);
// console.log(marks);
// marks.splice(0,1);
// console.log(marks);
// marks.reverse();
// console.log(marks);
// let conc=marks.concat(fruit);
// console.log(conc);

let proid={
    name:'shivam',
    lname:'zanjurne',
    college:'IOPE',
    marks:100,
    score:100,
    willpower:0,
    fullname:()=>{
        console.log(`hello ${proid.name} ${proid.lname} welcome to our website`);
    },
}
console.log(proid.fullname());
console.log(proid.name);
console.log(proid.lname);
console.log(proid.college);
console.log(proid.marks);
console.log(proid.score);
console.log(proid.willpower);

