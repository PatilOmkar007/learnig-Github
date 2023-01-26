const fs=require('fs');
var path=require('path');
var dirPath=path.join(__dirname,'files')
console.log(dirPath)
fs.writeFileSync(dirPath+'/hello.txt','inside the files folder');
fs.readdir(path.join(__dirname),(err,items)=>{
    items.forEach((i)=>{
        console.log(i);
    })
});

//crud operations
//create
fs.writeFileSync(dirPath+'/fileName.txt','file description');

//read
fs.readFile(dirPath+'/fileName.txt','utf8',(err,data)=>{
    console.log(data);
});
//rename
fs.rename(`${dirPath}/fileName.txt`,`${dirPath}/newFileName.txt`,(err)=>{
    if(err)console.log('lol')
});
fs.readdir(dirPath,(err,files)=>{
    files.forEach((i)=>{
        console.log(i);
    })
})