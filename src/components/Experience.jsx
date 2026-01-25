import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#f1f5f9", // Tertiary
        color: "#1e293b", // Black-100
        boxShadow: "none",
        borderLeft: "4px solid #475569", // Secondary
        borderRadius: "0px",
        padding: "2rem",
      }}
      contentArrowStyle={{
        borderRight: "8px solid #f1f5f9"
      }}
      date={experience.date}
      iconStyle={{
        background: "#fff",
        border: "2px solid #1e293b",
        color: "#1e293b",
        boxShadow: "none"
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
        <h3 className='text-black-100 text-[18px] xs:text-[19px] sm:text-[20px] font-bold font-serif'>
          {experience.title}
        </h3>
        <p
          className='text-secondary text-[14px] xs:text-[15px] sm:text-[16px] font-medium tracking-wide'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-secondary text-[13px] xs:text-[14px] sm:text-[14px] pl-1 tracking-wide leading-relaxed'
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
      <div id="experience">
        <p className={`${styles.sectionSubText} text-center text-secondary`}>
          Career History
        </p>
        <h2 className={`${styles.sectionHeadText} text-center text-black-100`}>
          Experience.
        </h2>
      </div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline
          lineColor="#e2e8f0" // Slate-200
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

export default SectionWrapper(Experience, "experience");