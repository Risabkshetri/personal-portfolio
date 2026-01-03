import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      {/* Side Darkening Overlays for "Outside" effect */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block">
         {/* Left Side - Darker & Bluer */}
         <div className="absolute top-0 left-0 h-full w-[calc(50vw-40rem)] bg-[#02030c]/10 border-r border-white/5 backdrop-blur-sm z-10">
            <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay"></div>
         </div>
         {/* Right Side - Darker & Bluer */}
         <div className="absolute top-0 right-0 h-full w-[calc(50vw-40rem)] bg-[#02030c]/10 border-l border-white/5 backdrop-blur-sm z-10">
            <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay"></div>
         </div>
      </div>

      {/* Geometric Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
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

          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff] font-bold relative">
              Rishab
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-lg`}>
            I develop AI Products, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
          
          {/* Tech Decoration */}
          <div className="mt-8 flex gap-2">
             <div className="h-1 w-12 bg-[#915eff]" />
             <div className="h-1 w-4 bg-teal-400" />
             <div className="h-1 w-2 bg-white" />
          </div>
        </div>
      </div>

      {/* Floating Geometric Shapes */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 right-[10%] w-32 h-32 border border-white/10 rounded-full border-dashed"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 right-[10%] w-48 h-48 border border-[#915eff]/20 rounded-full"
      />

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