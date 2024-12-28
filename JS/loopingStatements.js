//for loop c style
for(a = 10;a>=0;a--){
    console.log(a);
}

//while loop
var x = 50;
while(x!=0){
    console.log(x);
    x-=10;
}

//do-while
var y = 54;
do{
    console.log(y);
    y-=9;
}while(y!=0);

//for in
array = [10,20,30,55,'a',[45,54],"Cool"];
for( x in array){
    console.log("Element at",x,"is",array[x]);
}

//for of
for(x of array){
    console.log(x);
}
