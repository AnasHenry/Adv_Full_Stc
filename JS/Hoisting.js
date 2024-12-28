console.log(a);//OUTPUT: undefined
var a = 20;
console.log(a);//OUTPUT: 20

console.log(b);
const b = 3.14;
console.log(b);
//OUTPUT: ReferenceError: Cannot access 'b' before initialization

console.log(c);
let c = 4;
console.log(c);
//OUTPUT: ReferenceError: Cannot access 'c' before initialization

//Function Hoisting:

submitFrom("Form submitted succesfully",databaseSharing);

function databaseSharing(){
    console.log("Data stored successfully");
}

function submitFrom(Formmsg,dbs){
    dbs();
    console.log(Formmsg);
}
