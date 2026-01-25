import React from "react";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <div className='bg-primary border border-black-100/10 p-5 sm:w-[360px] w-full hover:shadow-lg transition-shadow duration-300'>
      <div className='relative w-full h-[230px]'>
        <img
          src={image}
          alt='project_image'
          className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='bg-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-black-100/10'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <h3 className='text-black-100 font-bold text-[22px] font-serif'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px] leading-relaxed'>{description}</p>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[13px] text-secondary font-medium`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div id="works">
        <p className={`${styles.sectionSubText} text-secondary`}>My work</p>
        <h2 className={`${styles.sectionHeadText} text-black-100`}>Projects.</h2>
      </div>

      <div className='w-full flex'>
        <p className='mt-3 text-secondary text-[15px] xs:text-[16px] sm:text-[17px] max-w-3xl leading-[1.8]'>
          My projects highlight my expertise in AI-powered solutions and full-stack development. Each project serves as a case study effectively solving a real-world problem.
        </p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
