const express=require("express");
const app=express();


const {connection}=require("./config/db")

app.get("/",(req,res)=>{

    //base api
    res.send({msg:"this is base api",status:"success"});

})


app.listen(8080,async()=>{
    try {
        await connection;
        console.log("connected with db")
        console.log("running on 8080")
        
    } catch (error) {

        console.log("error while running");
        console.log({error:error})
    }
})