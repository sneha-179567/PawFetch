const http=require('http');
const express=require('express');
const fs=require('fs');
const cors=require('cors');
const app=express();
const bodyParser=require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.post('/submit',(req,res)=>{
    const {Name,Gender,Phone,Email,Password}=req.body;
    const user=`Name:${Name},Gender:${Gender},Phone:${Phone},Email:${Email},Password:${Password}`;
    fs.appendFile("Login.txt",user,"UTF-8",(err)=>{
        if(err){
            console.error("failed to store in file");
        }else{
            res.send(`received data for Name:${Name} Gender:${Gender} Phone:${Phone} Email:${Email} Password:${Password}\n`);
        }
    });
    console.log("info received successfully");
});
 app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Content-Type");
   next();
 });
app.listen(4001,()=>{
    console.log("running on http://localhost:4001");
});