import React from 'react';
import CountUp from 'react-countup';
import { InView, useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';


const About = () => {
  const [ref, inView] = useInView({
    threshold:0.5,
  });


  return <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* img */}
        <motion.div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
        variants={fadeIn("right",0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.3}}
        ></motion.div> 
 
        {/* text */}
        <motion.div className='flex-1'
          variants={fadeIn("left",0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once:false, amount:0.3}}
        >
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>I'm a Freelance Front-end Developer with over 2 years of experience.</h3>
          <p className='mb-6 '>
          I graduated from Konya Technical University in the field of computer engineering and have been working as a Full Stack Developer in Turkey for a long time.
Thanks to the full stack experience in software development, I can both create user-friendly interfaces on the front and build efficient and reliable systems on the back.
By combining my passion for coding, creativity and problem solving skills, I am always determined to do my best to achieve successful results in projects.

I look forward to cooperating with you and participating in new projects!
          </p>

          <div className='flex gap-x-6 lg:gap-x-10 mb-12 '>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={6} duration={3} /> : null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of Experience

              </div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={8} duration={3} /> : null}
                k+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Projects <br />
                Completed

              </div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ? <CountUp start={0} end={6} duration={3} /> : null}
                k+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Satisfied <br />
                Clients

              </div>
            </div>


          </div>

          <div className='flex gap-x-8 items-center'>
          <Link to='contact'  >
            <button className='btn btn-lg'>Contact me</button>
          </Link>
            <a href='#' className='text-gradient btn-link'>My Portfolio</a>
          </div>

        </motion.div>

      </div>
    </div>
    
    
    </section>;
};

export default About;
