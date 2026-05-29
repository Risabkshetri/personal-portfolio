import { Link } from "react-router-dom";
import { styles } from "../styles";
import { profile } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[70vh] mx-auto flex items-center justify-center py-20">
      <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-col-reverse md:flex-row items-center justify-between gap-12 w-full`}>
        {/* Left Side: Text */}
        <div className="relative z-10 w-full md:w-3/5">
          <h1 className={`${styles.heroHeadText} text-black-100 font-serif`}>
            Rishab <span className="text-[#FF6600]">Chhetri</span>
          </h1>
          <h2 className="text-[20px] sm:text-[24px] md:text-[28px] text-secondary font-medium tracking-wide mt-2">
            AI Systems Engineer & Founder
          </h2>
          <p className={`${styles.heroSubText} mt-6 text-black-200 max-w-xl text-[16px] md:text-[18px] leading-[1.8]`}>
            Building production-grade AI systems, agentic workflows, and career intelligence infrastructure.
            <br className="sm:block hidden" />
            <br className="sm:block hidden" />
            Founder of Zobique. Built AI-powered career intelligence systems, university-facing infrastructure, and services integrated into national employment ecosystems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/work" className="bg-[#FF6600] text-white px-6 py-3 font-medium hover:bg-[#cc5200] transition-colors border border-transparent">
              View Work
            </Link>
            <Link to="/contact" className="bg-transparent text-black-100 border border-black-100 px-6 py-3 font-medium hover:bg-black-100 hover:text-white transition-colors">
              Work With Me
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="relative z-10 w-full md:w-2/5 flex justify-center md:justify-end">
          <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px]">
            {/* Minimalist YC Orange Gradient Shadow Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6600] to-transparent rounded-full blur-[60px] opacity-20 transform translate-x-4 translate-y-4"></div>
            
            <img 
               src={profile} 
               alt="Rishab Chhetri"
               className="relative z-10 w-full h-full object-cover rounded-full border border-black-100/10 shadow-sm filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;