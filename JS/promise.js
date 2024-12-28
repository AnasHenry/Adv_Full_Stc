function LocFind(){
    return new Promise((resolve,reject)=>{
        traffic_rate=50;
        if(traffic_rate<=50){
            resolve("Traffic is moderate.");
        }else{
            reject("Traffic is high");
        }
    })
}
LocFind().then((ResMsg)=>{
    console.log(ResMsg);
}).catch(function(RejMsg){
    console.log(RejMsg)
})