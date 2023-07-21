import React from 'react';

import Image from "../assets/avatar.svg";

import {FaGithub, FaYoutube, FaDribbble  } from "react-icons/fa" ;

import {TypeAnimation} from "react-type-animation";

import {motion} from "framer-motion";

import {fadeIn} from "../variants";

import { Link } from 'react-scroll';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
          variants={fadeIn("up",0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
          >
            Fatih <span>Şen</span>
          </motion.h1>

          <motion.div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
          variants={fadeIn("up",0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
          >
          <span className='text-white mr-4' >I am a </span>
          <TypeAnimation  
          sequence={[
            "Developer",
            2000,
            "Designer",
            2000,
            "Youtuber",
            2000
          ]}
          speed={50}
          className='text-accent'
          wrapper='span'
          repeat={Infinity}
          />
          
          </motion.div>
          <motion.p className='mb-8 max-w-lg mx-auto lg:mx-0'
          variants={fadeIn("up",0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
          >
            I always try to improve myself. Since I think it is important to share the technologies I have experienced with my environment, I care about being a sharer. In addition, I train approximately 24 thousand people on Udemy in order to convey the information I have learned to wider audiences.
            
            </motion.p>

          <motion.div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'
          variants={fadeIn("up",0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
          >
            <Link to='contact'  >
            <button className='btn btn-lg'>Contact me</button>
          </Link>

            
            <a href='#' className='text-gradient btn-link' >My portfolio</a>
          </motion.div>

          <motion.div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
          variants={fadeIn("up",0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.7}}
          >
            <a href='https://www.youtube.com/channel/UCXNTLKOOK3SK1HqRAmklPww'>
              <FaYoutube />
            </a>

            <a href='https://github.com/ffatihsen'>
              <FaGithub />
            </a>

            <a href='https://www.udemy.com/user/fatih-sem/'>
              <FaDribbble />
            </a>
          </motion.div>

        
       
        </div>

        <motion.div className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
        variants={fadeIn("down",0.5)}
        initial="hidden"
        whileInView={"show"}
        >
          <img src={Image} ></img>
        </motion.div>
      </div>

    </div>
  </section>;
};

export default Banner;
