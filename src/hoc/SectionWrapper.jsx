import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        {/* Top Horizontal Grid Line */}
        <div className='absolute top-0 left-0 w-full h-[1px] bg-white/10' />

        <Component />
        
        {/* Bottom Horizontal Grid Line */}
        <div className='absolute bottom-0 left-0 w-full h-[1px] bg-white/10' />
      </motion.section>
    );
  };

export default StarWrapper;
