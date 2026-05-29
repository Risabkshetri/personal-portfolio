import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { capabilities } from "../constants";

const Experience = () => {
  return (
    <div className="pt-10 pb-32">
      <div id="skills">
        <h2 className={`${styles.sectionHeadText} text-black-100 mb-12`}>
          Technical Capabilities.
        </h2>
      </div>

      <div className='w-full'>
        <p className='mt-3 text-secondary text-[16px] sm:text-[18px] max-w-3xl leading-[1.8] mb-12'>
          Engineered for solving complex intelligence, data, and infrastructure challenges, not just building generic features.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl'>
        {capabilities.map((capability, index) => (
          <div key={`cap-${index}`} className="bg-white p-8 border border-black-100/10">
             <h3 className="text-[20px] font-bold text-black-100 mb-6 font-serif border-b border-black-100/10 pb-4">
              {capability.group}
             </h3>
             <div className="flex flex-wrap gap-3">
               {capability.skills.map((skill, idx) => (
                 <span key={idx} className="bg-[#F6F6EF] px-3 py-1.5 text-[14px] text-secondary border border-black-100/5 hover:border-[#FF6600]/50 transition-colors">
                   {skill}
                 </span>
               ))}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "skills");