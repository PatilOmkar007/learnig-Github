const input = process.argv;
const fs=require('fs');
console.log(input[2]);

if(input[2]=='make'){
    fs.writeFileSync(input[3],input[4]);
}
else if(input[2]=='delete'){
    fs.unlinkSync(input[3]);
}
else if(input[2]=='apnd'){
    fs.appendFileSync(input[3],input[4])
}
else{
    console.log('invalide input');
}