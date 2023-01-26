
let p=new Promise((res,rej)=>{
    let a=20,b=30;
    if(a+b==50){
        res("Resolved");
    }
    else{
        rej("Rejected");
    }
})
p.then((msg)=>{
    console.log('we have '+msg);
}).catch((msg)=>{
    console.log("we have "+msg);
})