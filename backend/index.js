const express=require("express");
const app=express();

app.get("/",(req,res)=>{

    //base api
    res.send({msg:"this is base api",status:"success"});

})


app.listen(8080,()=>{
    try {
        console.log("running on 8080")
        
    } catch (error) {
        console.log("error while running")
    }
})