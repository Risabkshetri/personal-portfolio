import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { selectedWorks } from "../constants";

const ProjectCard = ({
  name,
  problem,
  solution,
  techSummary,
  impact,
  logo,
  link
}) => {
  return (
    <div className='bg-white border border-black-100/10 p-8 sm:p-10 w-full hover:shadow-sm hover:border-[#FF6600]/30 transition-all duration-300 mb-10 relative'>
      {logo && (
        <div 
          className="absolute top-8 right-8 w-16 h-16 sm:w-20 sm:h-20 bg-white border border-black-100/10 rounded-full flex items-center justify-center p-2 shadow-sm z-10"
        >
          <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain rounded-full" />
        </div>
      )}

      <div className='flex items-center gap-4 mb-6 border-b border-black-100/10 pb-4 pr-24'>
        <h3 className='text-black-100 font-bold text-[24px] sm:text-[28px] font-serif'>
          {name}
        </h3>
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[14px] text-secondary hover:text-[#FF6600] border border-black-100/10 hover:border-[#FF6600]/30 px-3 py-1 bg-[#F6F6EF] transition-colors flex items-center gap-2"
          >
            View <span className="text-[12px]">↗</span>
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-black-100 font-bold text-[16px] uppercase tracking-wider mb-2">Problem</h4>
            <p className='text-secondary text-[15px] sm:text-[16px] leading-[1.8]'>{problem}</p>
          </div>
          <div>
            <h4 className="text-black-100 font-bold text-[16px] uppercase tracking-wider mb-2">Solution</h4>
            <p className='text-secondary text-[15px] sm:text-[16px] leading-[1.8]'>{solution}</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h4 className="text-black-100 font-bold text-[16px] uppercase tracking-wider mb-2">Tech Summary</h4>
            <p className='text-secondary text-[15px] sm:text-[16px] leading-[1.8] bg-[#F6F6EF] p-4 border border-black-100/5'>{techSummary}</p>
          </div>
          <div>
            <h4 className="text-black-100 font-bold text-[16px] uppercase tracking-wider mb-2 text-[#FF6600]">Impact</h4>
            <p className='text-black-100 text-[15px] sm:text-[16px] leading-[1.8] font-medium'>{impact}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div id="works">
        <h2 className={`${styles.sectionHeadText} text-black-100`}>Selected Work.</h2>
      </div>

      <div className='w-full flex mb-12'>
        <p className='mt-3 text-secondary text-[16px] sm:text-[18px] max-w-3xl leading-[1.8]'>
          These projects highlight my expertise in building production-grade AI systems, career tech infrastructure, and scalable full-stack applications.
        </p>
      </div>

      <div className='flex flex-col w-full'>
        {selectedWorks.map((work, index) => (
          <ProjectCard key={`work-${index}`} {...work} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
