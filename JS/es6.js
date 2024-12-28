//Destructuring Operator
var marks = [99,98,97];
var [m1,m2,m3] = marks;
console.log(m1);

var marks1 = [96,98,97];
var [m1,m2] = marks1;
console.log(m1);

//Ternary operator
a = 1034;
out = (a%2==0) ? "Even" : "Odd";
console.log(a,"is",out);

//Spread Operator
lst1 = ["Llama","Kangaroo","Jackal","Lizard"];
lst2 = ["Shark","Dolphin","Whale","Squid"];
complst = [...lst1,...lst2];
console.log(complst);

//Rest Operator
function restOPEx(...args){
    console.log(args);
}
restOPEx("Kangaroo","Shark","Dolphin","Jackal","Lizard",45,54,63,72,89.21);

//Scope;
var a = 5;
var c = 45;
const p = 3.14;
console.log("o",a);
console.log("o",p);
console.log("o",c);
{
    let a = 54; 
    let b = 22;
    var c = 31; //c = 31 is the same as var c = 31;
    console.log("b",a);
    console.log("b",b);
    console.log("b",c);
}
console.log("o",p);
console.log("o",a);
console.log("o",c);