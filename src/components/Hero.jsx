import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import  ErrorBoundary  from "./ErrorBoundary";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-orange-500" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-orange-500 via-pink-500 to-transparent" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-purple-500 font-bold relative before:content-['Rishab'] before:absolute before:-left-1 before:-top-1 before:text-black before:z-[-1]">
              Rishab
            </span>


          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop AI Products, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>

      <ErrorBoundary>
      <ComputersCanvas />
    </ErrorBoundary>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-teal-400 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-teal-400 mb-1"

            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;