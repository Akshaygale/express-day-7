const express=require("express");
const bcrypt=require("bcrypt");
const saltRound=10

// JWT
const jwt=require("jsonwebtoken")

const app=express();

// post to get data
app.post("/register",(req,res)=>{
    console.log(req.query);
// hashing
    bcrypt.hash(req.query.password,saltRound,(err,hashPswd)=>{
        if(err) console.log(err);
        else console.log(hashPswd);
    })

})

// // token generate
// // WE NEED SECRET KEY

// const SECRET_KEy="dfmbdskh"

// app.post("/login",(req,res)=>{
//     console.log(req.query);

//     const token=jwt.sign(req.query,SECRET_KEy);
//          console.log(token);

//     const decode=jwt.decode(token,SECRET_KEy);
//     console.log(decode);
    

// })

 // token generate
// // WE NEED SECRET KEY

const SECRET_KEY="alsksjshdyfg"
app.post("/logins",(req,res)=>{
    console.log(req.query);

    const tokens=jwt.sign(req.query.password,SECRET_KEY);
    console.log(tokens);
})








app.listen(4000,()=>{
    console.log("here its come");
})