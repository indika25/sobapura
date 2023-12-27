"use client" 
import Link from "next/link";
import motion from "framer-motion";
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
export default function Header(){
const session = useSession();
const status = session.status;
    return(
        <header className="flex items-center justify-between shadow-md bg-green-200">
       
        <Link className="items-center font-semibold text-primary text-6xl font-mono flex text-center" href={''}>
        <img  src="/sobapura.png" className="w-20 h-29" />
          <p className="hover:text-green-900">SOBAPURA</p>
          </Link>
        <nav className="hidden lg:flex lg:gap-10 flex items-center gap-10 text-gray-500 font-semibold text-xl  ">
            <Link href={'/'} className="hover:text-green-700" >Home</Link>
            <Link href={'/about'} className="hover:text-green-700 hover:font-semibold">About</Link>
            <Link href={''} className="hover:text-green-700 hover:font-semibold">Service</Link>
            </nav>
            <nav className="flex items-center ">
        
         
              {status==='authenticated' && (
                  <>

<p className="font-semibold text-lg">{session.data.user?.name}</p>
           
                   <Link href={'/team'}  className="ml-5 bg-orange-600 text-white font-semibold rounded-full px-10 py-2 hover:bg-green-950" >
                Team
                </Link>


                <Link href={''} onClick={()=> signOut({ callbackUrl: 'http://localhost:3000/' })} className="bg-primary text-white font-semibold rounded-full px-10 py-2 hover:bg-green-950" >
 Log out
 </Link>
                  </>
               
              )}

              {status !== 'authenticated' && (
                    <>
                    
<Link className=" text-primary font-semibold  px-10 py-2 hover:bg-green-950" href={'/register'}>
Register
</Link> 

<Link className="bg-primary text-white font-semibold rounded-full px-10 py-2 hover:bg-green-950" href={'/login'}>
Login
</Link>
                    </>


              )}


           
            </nav>
    </header>
    )
}