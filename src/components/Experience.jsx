import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { skillsAndTechnologies } from "../constants";
import Marquee from "react-fast-marquee";

const Experience = () => {
  return (
    <div className="pt-10 pb-32">
      <div id="skills" className="mb-12">
        <h2 className={`${styles.sectionHeadText} text-black-100 border-b-2 border-[#FF6600] inline-block pb-2`}>
          Skills & Technologies
        </h2>
      </div>

      <div className='w-full'>
        <p className='mt-3 text-secondary text-[16px] sm:text-[18px] max-w-3xl leading-[1.8] mb-12'>
          Engineered for solving complex intelligence, data, and infrastructure challenges, using the best tools for the job.
        </p>
      </div>

      <div className='flex flex-col gap-10 max-w-5xl'>
        {skillsAndTechnologies.map((category, index) => (
          <div key={`cat-${index}`} className="flex flex-col">
            <h3 className="text-[18px] font-bold text-black-100 mb-4">
              {category.group}
            </h3>
            <div className="bg-white border border-black-100/10 rounded-xl overflow-hidden py-5 shadow-sm">
              <Marquee gradient={true} gradientColor={[255, 255, 255]} speed={40 + (index * 5)}>
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="mx-8 flex flex-col justify-center items-center gap-3 cursor-pointer group">
                    <div className="h-[45px] w-[45px] flex justify-center items-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        title={skill.name}
                        className="max-h-full max-w-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-[13px] font-medium text-secondary text-center group-hover:text-[#FF6600] transition-colors">{skill.name}</span>
                  </div>
                ))}
                {/* Duplicate the icons manually so the marquee has enough content to scroll smoothly if the list is short */}
                {category.skills.map((skill, idx) => (
                  <div key={`dup-${idx}`} className="mx-8 flex flex-col justify-center items-center gap-3 cursor-pointer group">
                    <div className="h-[45px] w-[45px] flex justify-center items-center">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        title={skill.name}
                        className="max-h-full max-w-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-[13px] font-medium text-secondary text-center group-hover:text-[#FF6600] transition-colors">{skill.name}</span>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "skills");