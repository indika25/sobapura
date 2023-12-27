"use client"
import Image from "next/image"
import {FaRegEnvelope} from "react-icons/fa"
import {MdLockOutline} from "react-icons/md"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import UserInfo from "@/components/layout/UserInfo"
import { useSession } from "next-auth/react"
import Team from "../team/page"
export default function Dashboard(){
    const {data:session} = useSession();
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const router = useRouter();
    
    const handleSubmit = async(e)=>{


        e.preventDefault();
    
        
      
        if(!email){
            setError("Email Requered..");
            return;
        }
        if(!password){
            setError("Password Requered..");
            return;
        }
   
      try{
      const res=  await signIn('credentials',{
            email,password,redirect:false,
        });



        if(res.error){

            setError("Invalid Credentials");
            return;
        }
        router.replace();
      }catch(error){

      }
        
    };
    return(
        <Team/>

)
}