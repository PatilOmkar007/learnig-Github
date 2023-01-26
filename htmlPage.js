const express = require("express");
const path=require("path");

const app=express();
let dirPath=path.join(__dirname,'htmlPages');

app.arguments(express.static(dirPath));

app.listen(4646);