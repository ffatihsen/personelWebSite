import React from 'react';

import { motion } from 'framer-motion';

import { fadeIn } from '../variants';

import Img1 from "../assets/portfolio-img1.png"
import Img2 from "../assets/portfolio-img2.png"
import Img3 from "../assets/portfolio-img3.png"


const Work = () => {
  return <section className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
        variants={fadeIn("right",0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.3}}
        >
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>
              My Lates <br /> Work.
            
            </h2>

            <p className='mx-w-sm mb-16'>
            I have always developed myself in various fields.
I turned the technologies I learned into projects that could be used in daily life.
I also explained the technologies I learned as an instructor on the Udemy training platform.
            </p>
            <a href='https://github.com/ffatihsen'  >
            <button className='btn btn-lg'>View all projects</button>
          </a>

          </div>

            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1' >

               {/* overflow */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              {/* img */}
              <img src={Img1}  alt='' className='group-hover:scale-125 transition-all duration-500' />

              {/* projeTitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>JavaScript Programing</span>
              </div>

              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Developing many applications with ReactJs NodeJs</span>
              </div>
            </div>
        </motion.div>

        <motion.div className='flex-1 flex flex-col gap-y-10 mt-auto'
        variants={fadeIn("left",0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.3}}
        >
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1' >

               {/* overflow */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              {/* img */}
              <img src={Img2}  alt='' className='group-hover:scale-125 transition-all duration-500' />

              {/* projeTitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Python Programing</span>
              </div>

              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Udemy traInIng</span>
              </div>
            </div>


            <div className='group relative overflow-hidden border-2 border-white/50 rounded-x1' >

               {/* overflow */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              {/* img */}
              <img src={Img3}  alt='' className='group-hover:scale-125 transition-all duration-500' />

              {/* projeTitle */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Mobile Programing</span>
              </div>

              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white'>Many mobile application development with flutter</span>
              </div>
            </div>




        </motion.div>
      </div>

    </div>
    



  </section>;
};

export default Work;
