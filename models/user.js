import mongoose, { Schema,model,models } from "mongoose";

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    refnum:{
        type: String,
        
    },
    code:{
        type: String,
        
    },
    
},{timestamps:true});


const User =models.User || mongoose.model("User",UserSchema);
export default User;
