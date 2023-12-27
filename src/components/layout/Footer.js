import Image from "next/image"
import Link from "next/link"

export default function Footer(){
 return(
    <footer className="bg-green-950 mt-96">
        <div className="container flex flex-col-reverse justify-between
        px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:item-start">
                        <div className="hover:text-slate-500 items-center text-center">
                            <Image src={'/sobapura.png'}  width="50" height="50" alt=""/>
                            <h1 className="text-4xl text-white font-bold">SOBAPURA</h1>
                        </div>

                        <div className="flex justify-center space-x-4 p-5">
                            <Link href=''><Image  width="30" height="30" src={'/facebook.png'}/></Link>
                            <Link href=''><Image  width="30" height="30" src={'/youtube.png'}/></Link>
                            <Link href=''><Image  width="30" height="30" src={'/facebook.png'}/></Link>
                        </div>
                        <div className="mx-auto my-6 text-center text-white">
                            Copyright &copy; 2023, all Right reserved
                        </div>
                </div>
                <div className="flex justify-around space-x-32">
                        <div className="flex flex-col space-y-3 text-white">
                            <h1 className="text-4xl">Navigate</h1>
                            <Link href="/" className="text-xl hover:text-slate-500"> Home</Link>
                            <Link href="#about" className="text-xl hover:text-slate-500"> About</Link>
                            <Link href="#services" className="text-xl hover:text-slate-500"> Services</Link>
                     
                        </div>
                        <div className="flex flex-col space-y-3 text-white">
                            <Link href="/" className="text-xl hover:text-slate-500"> Team</Link>
                            <Link href="#about" className="text-xl hover:text-slate-500"> Events</Link>
                            <Link href="#services" className="text-xl hover:text-slate-500"> Contact Us</Link>
                     
                        </div>
                        <div className="flex flex-col space-y-3 text-white">
                            <Link href="/" className="text-xl hover:text-slate-500">Careers</Link>
                            <Link href="#about" className="text-xl hover:text-slate-500"> Community</Link>
                            <Link href="#services" className="text-xl hover:text-slate-500"> Privacy Policy</Link>
                     
                        </div>
                </div>
                <div className="flex flex-col justify-between">
                    <form>
                        <div className="flex space-x-3">
                                        <input type="text" className="flex-1 px-4 rounded-full focus:outline-none" placeholder="Sign Up for NewsLetter"/>
                                        <button className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full py-2 px-10 font-bold">Sign Up</button>
                        </div>
                    </form>
                </div>
        </div>
    </footer>
 )   
}