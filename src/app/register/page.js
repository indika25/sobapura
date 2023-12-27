"use client"
import Image from "next/image"
import {FaRegEnvelope,FaUser } from "react-icons/fa"
import {MdLockOutline} from "react-icons/md"
import { useState } from "react"
import { useRouter } from "next/navigation"


export default function Register(){
    
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError]  = useState("");
    const [code,setCode]  = useState("");


    
   const router = useRouter();
    const handleSubmit = async(e)=>{
        e.preventDefault();
    
        
        if(!name){
                setError("UserName Requered..");
                return;
        }
        if(!email){
            setError("Email Requered..");
            return;
        }
        if(!password){
            setError("Password Requered..");
            return;
        }
        if(!code){
            setError("Password Requered..");
            return;
        }
     const   refnum = Math.floor(10000 + Math.random() * 90000);
        try{
               const res= await fetch('api/register',{
                    method: "POST",
                    headers:{
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify({
                        name,email,password,refnum,code
                    }),
                });
                if(res.ok){
                       const form = e.target;
                       form.reset();
                        // create Random Number
                        router.push("/login");


                }else{
                    console.log("User Register Faild");
                }
        }
        catch(error){
            console.log('Error During Registration: ', error);
        }
        
    };
    
    
    return(
        <div>
        <section className="bg-white p-5">
 
         <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-20 space-y-0 md:space-y-0">
             
         <div className="ml-40 ">
                 <Image src={'/lo.svg'} width="500" height="500" />
             </div>
             <div className="flex flex-col  space-y-12 md:w-1/2 h-96 shadow-xl">
                 <div className="flex flex-col items-center">
                 <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left mb-3">Register</h1>
                 
                 <form className="w-96 mt-5" onSubmit={handleSubmit} >
                 <div className="rounded-full w-96 py-2 px-5  bg-gray-100  flex items-center mb-3">
                                    <FaUser className="text-gray-400 mr-2"/>
                                    <input onChange={e => setName(e.target.value)} type="username" name="username" placeholder="User Name" className="bg-gray-100 outline-none text-sm flex-1"/>
                                </div>
                 
                                <div className="rounded-full  py-2 px-5  bg-gray-100  flex items-center mb-3">
                                    <FaRegEnvelope className="text-gray-400 mr-2"/>
                                    <input onChange={e => setEmail(e.target.value)} type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm flex-1"/>
                                </div>
                                <div className="rounded-full  py-2 px-5  bg-gray-100  flex items-center">
                                    <MdLockOutline className="text-gray-400 mr-2"/>
                                    <input onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm flex-1"/>
                                </div>

                                <div className="rounded-full  py-2 px-5  bg-gray-100  flex items-center mt-3">
                                    <MdLockOutline className="text-gray-400 mr-2"/>
                                    <input onChange={e => setCode(e.target.value)} type="text" name="Coupen Code" placeholder="Coupen Code" className="bg-gray-100 outline-none text-sm flex-1"/>
                                </div>
                                <button className="mt-5 bg-primary hover:bg-indigo-600 text-white rounded-full w-1/2 py-2 px-5 font-bold text-center cursor-pointer">
                                Register
                                </button>  
                                <div className="bg-red-500 text-white rounded-md w-fit text-sm px-3 mt-2">
                                 {error}
                                </div>
                                 
                                {
                               
                                }

                 </form>
                              
                 </div>
                 
             </div>
 
             
 
             
         </div>
        </section>
     </div>
  
    )
}