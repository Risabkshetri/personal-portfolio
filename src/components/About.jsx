import { services } from "../constants";
import { SectionWrapper } from "../hoc";



const About = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-4">
        <p className='text-[12px] xs:text-[13px] sm:text-[14px] md:text-[16px] tracking-wider text-secondary uppercase font-semibold'>
          Founder & Builder
        </p>
        <h1 className='text-[28px] xs:text-[32px] sm:text-[36px] md:text-[40px] font-bold text-black-100 font-serif leading-tight'>
          About Rishab Chhetri.
        </h1>
      </div>

      <p className='mt-6 text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] text-secondary max-w-3xl leading-[1.8] font-light'>
        Rishab Chhetri is an Indian AI entrepreneur and software Engineer, best known as the founder of Zobique—an AI career intelligence platform designed to bridge the gap between education and employability.
        <br /><br />
        With a philosophy rooted in "outcomes over certificates" and "readiness over resumes," I am building Zobique to help students and early professionals navigate their careers with clarity. My work sits at the intersection of AI, product strategy, and education, using Large Language Models (LLMs) and vector databases to create personalized learning paths and job matching systems.
        <br /><br />
        Currently focused on scaling Zobique to solve job readiness in India and beyond.
      </p>

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {services.map((service, index) => (
          <div key={service.title} className='w-full p-6 border-l-2 border-primary/20 hover:border-black-100 transition-colors bg-tertiary/30'>
            <img
              src={service.icon}
              alt={service.title}
              className='w-12 h-12 object-contain mb-4 opacity-80 invert'
            />
            <h3 className='text-[18px] font-bold text-black-100'>
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
