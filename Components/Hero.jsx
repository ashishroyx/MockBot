import React from 'react'
import GradientText from '../Reactbits/GradientText/GradientText.jsx'


const Hero = () => {
    return (
        <div className=' p-5  bg-white w-full bg-gradient-to-b from-[#a1a1aa] to-[#f5f5f5]'>

            <div >
           
            <div >
                <GradientText
                    colors={["#262626", "#27272a", "#d4d4d4", "#52525b", "#262626"]}
                    animationSpeed={5}
                    showBorder={false}
                    className="custom-class boldonse-regular lg:text-6xl text-xl md:text-5xl leading-[2]"
                >
                    <p>Get Interview-Ready</p>
                    <p>Backed By AI</p>
                </GradientText>
            </div>

            <div className='items-center justify-center flex mt-3'>
                <div className="relative group rounded-full p-[1px] bg-gradient-to-r from-[#09090b] via-[#18181b] to-[#18181b] hover:from-[#3f3f46] hover:via-[#27272a] hover:to-[#18181b] transition-all duration-500">
                    <button className="rounded-full px-6 py-2 text-black bg-white dark:bg-black dark:text-white group-hover:bg-transparent transition-all duration-300">
                        Get Started
                    </button>
                </div>
            </div>

            <div className='mt-6 font-semibold text-center text-black mb-10'>
                <span className=''>MockBot helps you tackle role-specific questions, explore deeper insights on demand,
               
               </span>
               <br />
               <span>
                    and structure your prep your way. From practice to mastery 
               </span>
               <br />
               <span>
                    your personal AI-powered interview partner is here
               </span>
          </div>
          </div>


        </div>
        
    )
}

export default Hero
