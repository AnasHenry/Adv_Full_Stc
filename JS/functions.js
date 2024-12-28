//Normal Functions without return statement
function norm1(stud){
    console.log(stud);
}
norm1(["CSE","IT","AIML"])

//Normal Functions with return statement
function norm2(stud){
    return stud[2];
}
console.log(norm2(["CSE","IT","AIML"]))

//In places where function keyword can't be used arrow functions are used. Example: inside class

//Arrow Functions without return statement
arrowFun = (stud) => {
    console.log(stud);
}
arrowFun(["CSE","IT","AIML"]);

//Arrow Functions with return statement
arF = (stud) => {
    return stud[2];
}
console.log(arF(["CSE","IT","AIML"]))

arrowFun1 = () =>{
    console.log("Function without argument and return type");
}
arrowFun1();

arrowFun2 = (arg1,arg2) => {
    console.log("Function with no return type and two arguments: ",arg1,arg2);
}
arrowFun2("It is cold!!!",59);
