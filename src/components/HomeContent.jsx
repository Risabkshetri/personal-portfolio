import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { whatIBuild, insights, skillsAndTechnologies, selectedWorks } from "../constants";
import { SectionWrapper } from "../hoc";
import Marquee from "react-fast-marquee";

const partnerLogos = [
  { name: "NCS", url: "https://res.cloudinary.com/dufaxdxsj/image/upload/v1777100591/ncs-small-logo_ucxlog.png" },
  {name: "Hobfit", url: "https://res.cloudinary.com/dufaxdxsj/image/upload/v1776186102/hobfit_ypukos.png" },
  { name: "Clerk", url: "https://res.cloudinary.com/dufaxdxsj/image/upload/v1777102661/clerk_bzvmrq.png" },
  { name: "Appspine", url: "https://res.cloudinary.com/dufaxdxsj/image/upload/v1774548949/appspine_xvlp6a.png" },
  { name: "German Leap", url: "https://res.cloudinary.com/dufaxdxsj/image/upload/v1775897286/germanLeap_virujq.png" },
  { name: "Agnistoka", url: "https://res.cloudinary.com/dufaxdxsj/image/upload/v1775897075/agnistoka_rikzrv.png" },
  { name: "Mera Nivas", url: "https://res.cloudinary.com/dufaxdxsj/image/upload/v1775898712/meranivas_k05kpt.png" },
  { name: "Aipply", url: "https://res.cloudinary.com/dufaxdxsj/image/upload/v1776186160/aipply_a4fidw.png" },
];

const HomeContent = () => {
  const allSkills = skillsAndTechnologies.flatMap(category => category.skills);

  return (
    <div className="w-full flex flex-col gap-32 pb-32">
      {/* 2. Trusted By Logo Slider */}
      <section className={`${styles.paddingX} max-w-7xl mx-auto w-full`}>
        <div className="border-t border-black-100/10 pt-10">
          <div className="mx-auto mb-10 text-center">
            <p className="text-[12px] md:text-[14px] uppercase tracking-wider font-semibold text-secondary">
              Trusted By
            </p>
          </div>
          <div className="relative mx-auto flex w-full max-w-5xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <style>{`
              @keyframes slide-infinite {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .animate-slide-infinite {
                animation: slide-infinite 40s linear infinite;
                display: flex;
                width: max-content;
              }
              .animate-slide-infinite:hover {
                animation-play-state: paused;
              }
            `}</style>
            <div className="animate-slide-infinite items-center gap-12 sm:gap-16 px-4 sm:px-8">
              {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
                <div key={idx} className="flex h-10 w-28 sm:h-12 sm:w-36 shrink-0 items-center justify-center grayscale hover:grayscale-0 transition duration-300">
                  <img
                    src={logo.url}
                    alt={`${logo.name} logo`}
                    className="max-h-full max-w-full object-contain mix-blend-multiply"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. What I Build */}
      <section className={`${styles.paddingX} max-w-7xl mx-auto w-full`}>
        <div className="mb-12">
          <h2 className={`${styles.sectionHeadText} text-black-100`}>System Capabilities.</h2>
          <p className="mt-4 text-secondary text-[16px] md:text-[18px] max-w-3xl leading-[1.8]">
            Designing and deploying infrastructure focused on automation, scale, and intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {whatIBuild.map((category, index) => (
            <div key={index} className="bg-white border border-black-100/10 p-8 shadow-sm">
              <h3 className="text-[20px] font-bold text-black-100 mb-6 border-b border-black-100/10 pb-4">{category.category}</h3>
              <ul className="flex flex-col gap-3">
                {category.items.map((item, idx) => (
                  <li key={idx} className="text-secondary text-[15px] flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[#FF6600]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies Carousel */}
      <section className={`${styles.paddingX} max-w-7xl mx-auto w-full`}>
        <div className="mb-12">
          <h2 className={`${styles.sectionHeadText} text-black-100`}>Technologies.</h2>
        </div>
        <div className="bg-white border border-black-100/10 rounded-xl overflow-hidden py-8 shadow-sm">
          <Marquee gradient={true} gradientColor={[255, 255, 255]} speed={50}>
            {allSkills.map((skill, idx) => (
              <div key={idx} className="mx-10 flex flex-col justify-center items-center gap-3 cursor-pointer group">
                <div className="h-[50px] w-[50px] flex justify-center items-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    title={skill.name}
                    className="max-h-full max-w-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-[14px] font-medium text-secondary text-center group-hover:text-[#FF6600] transition-colors">{skill.name}</span>
              </div>
            ))}
            {/* Duplicate for smooth looping */}
            {allSkills.map((skill, idx) => (
              <div key={`dup-${idx}`} className="mx-10 flex flex-col justify-center items-center gap-3 cursor-pointer group">
                <div className="h-[50px] w-[50px] flex justify-center items-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    title={skill.name}
                    className="max-h-full max-w-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-[14px] font-medium text-secondary text-center group-hover:text-[#FF6600] transition-colors">{skill.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Selected Works */}
      <section className={`${styles.paddingX} max-w-7xl mx-auto w-full`}>
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className={`${styles.sectionHeadText} text-black-100`}>Selected Works.</h2>
            <p className="mt-4 text-secondary text-[16px] md:text-[18px] max-w-3xl leading-[1.8]">
              A snapshot of platforms and systems I've built or contributed to.
            </p>
          </div>
          <Link to="/work" className="hidden sm:inline-flex items-center gap-2 text-[#FF6600] font-medium hover:text-[#cc5200] transition-colors">
            View All Work <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {selectedWorks.slice(0, 4).map((work, index) => (
            <div key={index} className="flex flex-col bg-white border border-black-100/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-8 flex-1">
                <div className="flex items-center gap-4 mb-6">
                  {work.logo && (
                    <div className="h-12 w-12 rounded-full overflow-hidden border border-black-100/10 shrink-0 bg-[#F6F6EF] flex items-center justify-center">
                      <img src={work.logo} alt={`${work.name} logo`} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <h3 className="text-[22px] font-bold text-black-100 font-serif">{work.name}</h3>
                </div>
                <p className="text-secondary text-[15px] leading-relaxed mb-6">
                  <span className="font-semibold text-black-100">Impact: </span> 
                  {work.impact}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {/* Parse techSummary or just show it if it's a string, assuming it's comma separated */}
                    {work.techSummary.split(', ').map((tech, idx) => (
                      <span key={idx} className="bg-[#F6F6EF] px-2.5 py-1 text-[13px] text-secondary border border-black-100/5">
                        {tech.replace('.', '')}
                      </span>
                    ))}
                </div>
              </div>
              {work.link && (
                <div className="border-t border-black-100/10 px-8 py-4 bg-[#F8F8F8]">
                  <a href={work.link} target="_blank" rel="noopener noreferrer" className="text-[#FF6600] text-[14px] font-medium flex items-center gap-2 hover:underline">
                    View Work <span>↗</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 sm:hidden flex justify-center">
          <Link to="/work" className="inline-flex items-center gap-2 text-[#FF6600] font-medium hover:text-[#cc5200] transition-colors border border-[#FF6600] px-6 py-3 rounded-md">
            View All Work
          </Link>
        </div>
      </section>

      {/* 5. Writing & Insights */}
      <section className={`${styles.paddingX} max-w-7xl mx-auto w-full`}>
        <div className="mb-12">
          <h2 className={`${styles.sectionHeadText} text-black-100`}>Writing & Insights.</h2>
        </div>
        
        <div className="flex flex-col gap-6">
          {insights.map((insight, index) => (
            <a href={insight.link} target="_blank" rel="noopener noreferrer" key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 border border-black-100/10 bg-white hover:border-[#FF6600] transition-colors group cursor-pointer block">
              <h3 className="text-[18px] md:text-[20px] font-medium text-black-100 group-hover:text-[#FF6600] transition-colors">{insight.title}</h3>
              <span className="text-[#FF6600] text-[14px] mt-2 sm:mt-0 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Read Article →</span>
            </a>
          ))}
        </div>
      </section>

      {/* 6. Work With Me */}
      <section className={`${styles.paddingX} max-w-7xl mx-auto w-full`}>
        <div className="bg-[#222222] p-10 md:p-16 border-l-4 border-[#FF6600]">
          <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-6 font-serif">Open to Select Opportunities</h2>
          <p className="text-gray-300 text-[16px] md:text-[18px] max-w-2xl leading-[1.8] mb-10">
            I enjoy solving difficult product and infrastructure problems, particularly around AI systems, automation, hiring, education, and developer tooling. Looking for:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-[#333333] p-4 text-white font-medium border border-white/5">Founding Engineer Roles</div>
            <div className="bg-[#333333] p-4 text-white font-medium border border-white/5">AI Engineering Roles</div>
            <div className="bg-[#333333] p-4 text-white font-medium border border-white/5">Consulting Projects</div>
            <div className="bg-[#333333] p-4 text-white font-medium border border-white/5">Strategic Partnerships</div>
          </div>

          <Link to="/contact" className="inline-block bg-[#FF6600] text-white px-8 py-4 font-medium hover:bg-[#cc5200] transition-colors">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
