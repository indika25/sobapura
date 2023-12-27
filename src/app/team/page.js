"use client"
import Image from "next/image"
import {FaRegEnvelope} from "react-icons/fa"
import {MdLockOutline} from "react-icons/md"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import UserInfo from "@/components/layout/UserInfo"
import { useSession } from "next-auth/react"

const getUsers=async() =>{
        let data =await fetch("http://localhost:3000/api/team");
        data =await data.json();
        
        
        if(data.success){
      
            return data.result;
        }else{
            return success=false;
        }
}

export default async function Team(){
    const {data:session} = useSession();
    const users = await getUsers();
   
   
    return(
        <div className="h-screen mt-20">
                <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
              
                <table className="w-full">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                                   <tr>
                                   <td className="text-lg font-semibold  text-left">Ref Number</td>
                                    <td className="text-lg font-semibold  text-left">Name</td>
                                    <td className="text-lg font-semibold  text-left">Address</td>
                                    <td className="text-lg font-semibold  text-left">E Wallet Point</td>
                                   </tr>


                        </thead>

                        <tbody>
                            {
                                    users.map((item)=>(
                                        
                                        <tr>
                               
                                    <td className="text-lg font-semibold  text-left">{item.refnum}</td>
                                    <td className="text-lg font-semibold  text-left">{item.name}</td>
                                    <td className="text-lg font-semibold  text-left">{item.code}</td>
                                    <td className="text-lg font-semibold  text-left">{}</td>

                                        </tr>
                                    ))
                            }
                          
                        </tbody>
                </table>

                </div>
        </div>

)
}