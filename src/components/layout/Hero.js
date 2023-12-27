'use client'
import Image from "next/image"

import {motion} from "framer-motion"
export default function Hero(){

    const imageanimate = {
        hidden:{},
        show:{
            transition:{
                staggerChildren:0.6,
                delayChildren:3.6,
                ease: 'easeInOut',
            }
        }
    }
    const textAnimate1={
        hidden:{
            y:"80%",
            opacity:1,
            },
            show:{
                y:0,
                opacity:1,
                transition:{
                    ease : 'easeInOut',
                    duration:1,
                    staggerChildren:0.4,
                    delayChildren:1,
                }
            }
    }
    return(
    <div>
       <section className="bg-slate-100 p-5">

        <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
            <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
                <motion.h1 variants={textAnimate1} initial="hidden" animate="show" className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">Towards Prosperity</motion.h1>
                <p className="max-w-sm text-center text-slate-500 md:text-left">
                
                The Best Platform to make your dreams come reality</p>
                <div className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full w-1/2 py-2 px-5 font-bold text-center cursor-pointer">
                    Get Started..
                    </div>   
            </div>

            <motion.div variants={imageanimate} initial="hidden" animate="show"
            >
                <Image src={'/sobapura.png'} width="500" height="500" />
            </motion.div>

            
        </div>
       </section>
    </div>
    )
}