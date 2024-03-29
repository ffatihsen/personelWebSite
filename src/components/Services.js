import React from 'react';

import {BsArrowUp, BsArrowUpRight} from "react-icons/bs"
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';



const services = [
  {
    name : 'UI/UX Design',
    description:"It involves the creation of visual and interactive elements that facilitate users' interaction with an application or website. ",
    link:'Learn more'
  },

  {
    name : 'Development',
    description:"The application will be developed with the experience of taking part in many projects.",
    link:'Learn more'
  },

  {
    name : 'Digital Marketing',
    description:"Digital Marketing replaces traditional marketing methods and enables reaching target audiences in a more effective and personalized way through digital platforms. ",
    link:'Learn more'
  },

  {
    name : 'Product Branding',
    description:"Product Branding is an important marketing strategy that increases the power of a product or service. Successful product branding emphasizes the value and uniqueness of the brand, leaving a positive impression on consumers. ",
    link:'Learn more'
  }


]

const Services = () => {
  return <section className='section' id='services'>
<div className='container mx-auto'>
  <div className='flex flex-col lg:flex-row'>

    {/* text */}
    <motion.div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
    variants={fadeIn("right",0.3)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false, amount:0.3}}
    >
      <h2 className='h2 to-accent mb-6'>What I Do.</h2>
      <h3 className='h3 max-w-[455px] mb-16'>
      I'm a Freelance Front-end Developer with over 2 years of experience.
      </h3>

      <a href='https://github.com/ffatihsen'><button className='btn btn-sm'>See my work</button></a>
    </motion.div>



    {/* services */}
    <motion.div className='flex-1'
    variants={fadeIn("left",0.5)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false, amount:0.5}}
    >
      <div className='max-w-[476px]'>
        {services.map((service,index) =>{
          const {name, description, link} = service;

          return(
            <div key={index} className='border-b border-white/20 h-[146px] mb-[38px] flex'>
            <div>
              <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'> {name} </h4>
              <p className='font-secondary leading-tight'>{description} </p>
            </div>
            <div className='flex flex-col flex-1 itens-end'> 
              <a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                <BsArrowUpRight />
                </a>  
                <a href='#' className='text-gradient text-sm'>{link}</a>
            </div>
            
            
             </div>
          )
        })}
      </div>
    </motion.div>


  </div>

</div>

  </section>;
};

export default Services;
