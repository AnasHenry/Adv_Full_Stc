array = [20,40,50];
for(var x of array){
    console.log(x);
}

//Object declaration.1
objT1 = {
    Name : "Susan",
    Study : "6th Grade",
    Location : "Canada"
};
console.log(objT1);

//Object declaration.2
objT2 = {};
objT2["Name"] = "Alex";
objT2["Study"] = "7th Grade";
objT2["Location"] = "USA";
console.log(objT2.Name,objT2.Study,objT2.Location);

//Object declaration.3
objT3 = new Object();
objT3["Name"] = "Jane Doe";
objT3["Study"] = "9th Grade";
objT3["Location"] = "New York";
console.log(objT3.Name,objT3.Study,objT3.Location);