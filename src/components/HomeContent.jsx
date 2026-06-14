import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { servicesData, industriesData, engagementModels, insights, skillsAndTechnologies, selectedWorks } from "../constants";
import * as Icons from "lucide-react";
import Marquee from "react-fast-marquee";

const partnerLogos = [
  { name: "NCS", url: "https://res.cloudinary.com/dufaxdxsj/image/upload/v1777100591/ncs-small-logo_ucxlog.png" },
  { name: "Hobfit", url: "https://res.cloudinary.com/dufaxdxsj/image/upload/v1776186102/hobfit_ypukos.png" },
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

      {/* 3. Services */}
      <section className={`${styles.paddingX} max-w-7xl mx-auto w-full`}>
        <div className="mb-12">
          <h2 className={`${styles.sectionHeadText} text-black-100`}>Services.</h2>
          <p className="mt-4 text-secondary text-[16px] md:text-[18px] max-w-3xl leading-[1.8]">
            Solutions I help organizations design, build, and deploy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = Icons[service.iconName];
            return (
              <div key={index} className="bg-white border border-black-100/10 p-8 shadow-sm hover:shadow-md transition-shadow group flex flex-col">
                <div className="h-12 w-12 bg-[#F6F6EF] flex items-center justify-center rounded-lg mb-6 group-hover:bg-[#FF6600] group-hover:text-white transition-colors text-[#FF6600]">
                  {IconComponent && <IconComponent size={24} />}
                </div>
                <h3 className="text-[20px] font-bold text-black-100 mb-4">{service.title}</h3>
                <p className="text-secondary text-[15px] leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Industries & Clients */}
      <section className={`${styles.paddingX} max-w-7xl mx-auto w-full`}>
        <div className="mb-12">
          <h2 className={`${styles.sectionHeadText} text-black-100`}>Who I Work With.</h2>
          <p className="mt-4 text-secondary text-[16px] md:text-[18px] max-w-3xl leading-[1.8]">
            Industries where I bring the most value.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((industry, index) => {
            const IconComponent = Icons[industry.iconName];
            return (
              <div key={index} className="bg-white border border-black-100/10 p-8 shadow-sm flex flex-col items-center text-center hover:border-[#FF6600] transition-colors group cursor-default">
                <div className="mb-6 text-[#FF6600] group-hover:scale-110 transition-transform duration-300">
                  {IconComponent && <IconComponent size={36} strokeWidth={1.5} />}
                </div>
                <h3 className="text-[18px] font-bold text-black-100 mb-3">{industry.title}</h3>
                <p className="text-secondary text-[14px] leading-relaxed">
                  {industry.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 5. Case Studies & Impact */}
      <section className={`${styles.paddingX} max-w-7xl mx-auto w-full`}>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 gap-4">
          <div>
            <h2 className={`${styles.sectionHeadText} text-black-100`}>Case Studies & Impact.</h2>
            <p className="mt-4 text-secondary text-[16px] md:text-[18px] max-w-3xl leading-[1.8]">
              A snapshot of platforms and systems I've built or contributed to.
            </p>
          </div>
          <Link to="/work" className="hidden sm:inline-flex items-center gap-2 text-[#FF6600] font-medium hover:text-[#cc5200] transition-colors shrink-0">
            View All Work <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {selectedWorks.slice(0, 4).map((work, index) => (
            <div key={index} className="flex flex-col bg-white border border-black-100/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-4 mb-8">
                  {work.logo && (
                    <div className="h-12 w-12 rounded-full overflow-hidden border border-black-100/10 shrink-0 bg-[#F6F6EF] flex items-center justify-center">
                      <img src={work.logo} alt={`${work.name} logo`} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <h3 className="text-[22px] font-bold text-black-100 font-serif">{work.name}</h3>
                </div>

                <div className="mb-6 space-y-6 flex-1">
                  <div>
                    <span className="font-bold text-black-100 block mb-2 uppercase text-xs tracking-wider">Problem</span>
                    <p className="text-secondary text-[15px] leading-relaxed">{work.problem}</p>
                  </div>
                  <div>
                    <span className="font-bold text-black-100 block mb-2 uppercase text-xs tracking-wider">Solution</span>
                    <p className="text-secondary text-[15px] leading-relaxed">{work.solution}</p>
                  </div>
                </div>
              </div>
              {work.link && (
                <div className="border-t border-black-100/10 px-8 py-5 bg-[#F8F8F8]">
                  <a href={work.link} target="_blank" rel="noopener noreferrer" className="text-[#FF6600] text-[14px] font-medium flex items-center gap-2 hover:underline">
                    View Case Study <span>↗</span>
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

      {/* 6. Engagement Models */}
      <section className={`${styles.paddingX} max-w-7xl mx-auto w-full`}>
        <div className="mb-12">
          <h2 className={`${styles.sectionHeadText} text-black-100`}>Ways We Can Work Together.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {engagementModels.map((model, index) => (
            <div key={index} className="bg-white border border-black-100/10 p-8 flex items-start gap-4">
              <div className="text-[#FF6600] mt-1 shrink-0">
                <Icons.CheckCircle2 size={24} />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-black-100 mb-2">{model.title}</h3>
                <p className="text-secondary text-[15px] leading-relaxed">{model.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Writing & Insights */}
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

      {/* 8. Technologies Carousel */}
      <section className={`${styles.paddingX} max-w-7xl mx-auto w-full`}>
        <div className="mb-12">
          <h2 className={`${styles.sectionHeadText} text-black-100`}>Technology Stack.</h2>
          <p className="mt-4 text-secondary text-[16px] md:text-[18px] max-w-3xl leading-[1.8]">
            Technologies and infrastructure I commonly use when building production-grade systems.
          </p>
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

      {/* 9. Lead Generation / Contact */}
      <section className={`${styles.paddingX} max-w-7xl mx-auto w-full`}>
        <div className="bg-[#222222] p-10 md:p-16 border-l-4 border-[#FF6600] flex flex-col md:flex-row gap-10 items-center justify-between">
          <div className="max-w-2xl">
            <h2 className="text-[32px] md:text-[40px] font-bold text-white mb-6 font-serif">Need an AI System Built?</h2>
            <p className="text-gray-300 text-[16px] md:text-[18px] leading-[1.8]">
              Whether you're building a new AI product, automating internal operations, or looking for a technical partner, I'd be happy to discuss your goals and explore potential solutions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="https://calendly.com/risawgc/30min" target="_blank" rel="noopener noreferrer" className="bg-[#FF6600] text-white px-8 py-4 font-medium hover:bg-[#cc5200] transition-colors text-center border border-transparent">
              Book a Discovery Call
            </a>
            <a href="mailto:ceo@zobique.com" className="bg-transparent text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors text-center border border-white/20">
              Send an Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;
