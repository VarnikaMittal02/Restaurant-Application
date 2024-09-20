import app from "./app.js";





// app.get("/",( req, res)=>{
    
//     console.log("hello");
// })


app.listen(process.env.PORT,(req,res)=>{
    console.log("listening on port 3000");
})

