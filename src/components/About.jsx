import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full p-[1px] rounded-[20px] shadow-card'
      style={{
        background: 'linear-gradient(45deg, rgba(80, 200, 255, 0.3), rgba(255, 100, 255, 0.3))',
        backdropFilter: 'blur(4px)',
      }}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{
          background: 'rgba(25, 25, 35, 0.9)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
          style={{ filter: 'drop-shadow(0 0 8px rgba(80, 200, 255, 0.3))' }}
        />

        <h3 className='text-[20px] font-bold text-center'
            style={{
              background: 'linear-gradient(90deg, #50c8ff, #ff64ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className='text-[18px] tracking-wider text-teal-300 uppercase'>
          Introduction
        </p>
        <h2 className='text-[50px] font-black tracking-tight'
            style={{
              background: 'linear-gradient(90deg, #50c8ff, #ff64ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[17px] max-w-3xl leading-[30px]'
        style={{
          color: '#94a3b8',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          letterSpacing: '0.2px'
        }}
      >
        I am Risab, a PORN stack developer (PostgreSQL, OpenAI, React, Next.js) and the founder of KshetriAI, where I build AI-powered solutions to solve real-world problems. With expertise in full-stack web development, I specialize in creating intelligent applications using AI integration. My journey includes internships, hackathons, and hands-on projects in AI, web, and mobile development. I'm passionate about entrepreneurship and constantly innovating to improve education, business automation, and user-centric solutions. With a strong foundation in Next.js, LangChain, FastAPI, and MongoDB, I strive to push boundaries in AI-driven software development while helping businesses grow.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");