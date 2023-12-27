"use client"
import Image from "next/image"
import {FaRegEnvelope} from "react-icons/fa"
import {MdLockOutline} from "react-icons/md"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

export default function Login(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const router = useRouter();
    const session = useSession();
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
        await set('email', email);
      try{
      const res=  await signIn("credentials",{
            email,password,redirect:false,

        });



        if(res.error){
console.log(error);
            setError("Invalid Credentials");
            return;
        }
        router.replace("team");
      }catch(error){

      }
        
    };
    return(
        <div>
        <section className="bg-white p-5">
 
         <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-20 space-y-0 md:space-y-0">
             
         <div className="ml-40 ">
                 <Image src={'/lo.svg'} width="500" height="500" />
             </div>
             <div className="flex flex-col  space-y-12 md:w-1/2 h-80 shadow-xl">
                 <div className="flex flex-col items-center">
                 <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left mb-3">Login</h1>
                 
                              <form className="w-96 mt-5" onSubmit={handleSubmit} >
                              <div className="rounded-full w-1/2 py-2 px-5  bg-gray-100  flex items-center mb-3">
                                    <FaRegEnvelope className="text-gray-400 mr-2"/>
                                    <input type="email" onChange={e => setEmail(e.target.value)}  name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"/>
                                </div>
                                <div className="rounded-full w-1/2 py-2 px-5  bg-gray-100  flex items-center">
                                    <MdLockOutline className="text-gray-400 mr-2"/>
                                    <input type="password" onChange={e => setPassword(e.target.value)}  name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1"/>
                                </div>
                                <button  className="mt-5 bg-primary hover:bg-indigo-600 text-white rounded-full w-1/2 py-2 px-5 font-bold text-center cursor-pointer">
                                Login
                                </button>  
                              </form>
                                <div className="bg-red-500 text-white rounded-md w-fit text-sm px-3 mt-2">
                                 {error}
                                </div>
                 </div>
                 
             </div>
 
             
 
             
         </div>
        </section>
     </div>
  
    )
}