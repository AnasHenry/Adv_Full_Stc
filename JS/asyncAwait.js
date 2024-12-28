async function Fn1() {  //async await are indirect form of promises.
    setTimeout(()=>{
        console.log("Hello");
    },4000);
    return (await "Message 1");
}

arrFN = async () => {
    setTimeout(()=>{
        console.log("Hi");
    },2000);
    return (await "Message 2"); // with await, displays Promise { <pending> } ; without it { <'Message 2'> } 
}

Fn1().then((a)=>{  //to remove promise from displaying.
    console.log(a) //resolving promises.
})
console.log(arrFN())


