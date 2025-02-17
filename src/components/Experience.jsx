import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgba(23, 23, 33, 0.95)", // Darker, slightly transparent background
        color: "#fff",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
        borderBottom: "4px solid red", // Subtle border
        borderRadius: "12px", // Rounded corners
        padding: "2rem",
      }}
      contentArrowStyle={{ 
        borderRight: "8px solid rgba(23, 23, 33, 0.95)" 
      }}
      date={experience.date}
      iconStyle={{ 
        background: "linear-gradient(145deg, #2d2d3a, #1a1a24)", // Gradient background
        boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.05)", // Subtle glow
        color: "#fff" 
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-gradient text-[24px] font-bold'
            style={{
              background: 'linear-gradient(90deg, #00dbde, #fc00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
          {experience.title}
        </h3>
        <p
          className='text-teal-300 text-[16px] font-semibold tracking-wide'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-gray-300 text-[14px] pl-1 tracking-wide leading-relaxed'
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="experience">
        <p className={`${styles.sectionSubText} text-center text-teal-300 opacity-80`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}
            style={{
              background: 'linear-gradient(90deg, #00dbde, #fc00ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
          Work Experience
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline
          lineColor="rgba(255, 255, 255, 0.1)" // Subtle timeline line
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");