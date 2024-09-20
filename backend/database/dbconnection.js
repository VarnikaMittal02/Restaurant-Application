import mongoose from "mongoose";


export const dbconnection = (()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{

        console.log("successfully connected to db" , mongoose.connection.host );

    }).catch((e)=>{
        console.log(`some error occured while connected to db  ${e}`);
    })
});