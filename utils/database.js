import mongoose from "mongoose";

let isConnected = false
export const connectToDB = async()=>{
    mongoose.set('strictQuery',true)
    if(isConnected){
        console.log("Already Connected..")
        return
    }
    try{
        await mongoose.connect('mongodb://localhost:27017/sobapura')
        isConnected = true
        console.log('connected to mongo')
    }
    catch(e){
            console.log(e)
    }
}