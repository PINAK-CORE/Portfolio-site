"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12 sm:grid-cols-12" >

<motion.div 
initial={{ opacity: 0, scale: 0.5 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}
className="col-span-7 place-self-center text-center sm:text-left justify-self-start">

  <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
    
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">HI , I&apos;m{" "} </span>
    <br></br>
    <TypeAnimation
      sequence={[
        "PINAK",
        1000,
        "Python Developer",
        1000,
        "Java Developer",
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  </h1>
  <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
  My weapons of choice? Java and Python. I can write code that's so elegant, it'll make you cry (tears of joy, hopefully). When I'm not battling compiler errors, you'll find as Barista.
  </p>
  <div>
    <Link href="mailto:dingo.in4k@gmail.com" className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">Hire me</Link>
    <Link href="PINAK's Resume.pdf" download 
    className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border border-black
    mt-3">
      <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
      </Link>
  </div>
  
</motion.div>
<motion.div  
initial={{ opacity: 0, scale: 0.5 }}
animate={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5 }}
className="col-span-4 place-self-center mt-4 lg:mt-0">
  <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[300px] lg:l-[300px] relative">
    <Image
      src="/images/heroIcon.png"
      className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
      width={250}
      height={250}
      ></Image>
  </div>

</motion.div>
</div>
       
      
      
    </section>
  );
};

export default HeroSection;
