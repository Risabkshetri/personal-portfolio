import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#915eff] to-transparent" />
        </div>

        <div className="relative z-10">
          {/* Decorative Corner Brackets */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#915eff]/50" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#915eff]/50" />

          <h1 className={`${styles.heroHeadText} text-black-100`}>
            Rishab <span className="text-[#915eff]">Chhetri</span>
            <br className="sm:block hidden" />
            <span className="text-[30px] sm:text-[40px] text-secondary pl-2">
              Founder & CEO of Zobique
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-black-200 max-w-lg text-[16px] leading-[24px]`}>
            Rishab Chhetri is the founder and CEO of Zobique, an AI-powered career intelligence platform focused on job readiness, skill-gap analysis, and personalized career roadmaps for students and early professionals in India and global markets.
          </p>

          {/* Tech Decoration */}
          <div className="mt-8 flex gap-2">
            <div className="h-1 w-12 bg-[#915eff]" />
            <div className="h-1 w-4 bg-teal-400" />
            <div className="h-1 w-2 bg-white" />
          </div>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] border-2 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;