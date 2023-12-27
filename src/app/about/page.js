import Image from "next/image"
export default function About(){
    return(
        <div>
        <section className="bg-slate-100 p-5">
 
         <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
             <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                 <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">About Us</h1>
                 <p className="max-w-sm text-center text-slate-500 md:text-left">
                 
                 The Best Platform to make your dreams come reality</p>
                 <div className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full w-1/2 py-2 px-5 font-bold text-center cursor-pointer">
                     Get Started..
                     </div>   
             </div>
 
             <div>
                 <Image src={'/sobapura.png'} width="500" height="500" />
             </div>
 
             
         </div>
        </section>
     </div>
  
    )
}