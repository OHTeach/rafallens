//import React from 'react';
import { motion } from 'framer-motion';
const Hero = () => {
  return <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" alt="Romantic wedding couple embracing at sunset" src="/images/gallery/IMG_7459.jpeg" />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 1,
        delay: 0.3
      }}>
          <h1 className="text-[34px] md:text-[72px] font-light tracking-wider mb-8">Rafal Hassoon</h1>
          <div className="w-50 h-px bg-white mx-auto mb-3"></div>
          <p className="text-[18px] md:text-[24px] font-light tracking-widest">
            PHOTOGRAPHY
          </p>
        </motion.div>
      </div>
    </section>;
};
export default Hero;