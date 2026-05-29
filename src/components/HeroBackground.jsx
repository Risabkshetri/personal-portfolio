import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#F6F6EF]">
      {/* Ultra Minimal Geometric Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:32px_32px]"></div>
    </div>
  );
};

export default HeroBackground;
