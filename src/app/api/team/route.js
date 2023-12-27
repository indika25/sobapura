import mongoose from "mongoose";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import { NextResponse } from "next/server";

export async function GET(){
        let data =[];
        let success=true;
    
        try{
                await connectMongoDB();

                
              data =await User.find({email: email1});

        }
        catch(err){
                data = {result:"error"}
                success=false
        }
        return NextResponse.json({result:data,success});
}