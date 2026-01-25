import { motion } from "framer-motion";

const HeroBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Side Darkening Overlays for "Outside" effect */}
      <div className="absolute inset-0 hidden xl:block">
        {/* Left Side - Darker & Bluer */}
        <div className="absolute top-0 left-0 h-full w-[calc(50vw-40rem)] bg-[#02030c]/10 border-r border-black-100/5 backdrop-blur-sm">
          <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay"></div>
        </div>
        {/* Right Side - Darker & Bluer */}
        <div className="absolute top-0 right-0 h-full w-[calc(50vw-40rem)] bg-[#02030c]/10 border-l border-black-100/5 backdrop-blur-sm">
          <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay"></div>
        </div>
      </div>

      {/* Geometric Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Floating Geometric Shapes */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 right-[10%] w-32 h-32 border border-black-100/10 rounded-full border-dashed"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 right-[10%] w-48 h-48 border border-[#915eff]/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] left-[12%] w-20 h-20 border border-teal-400/20 rounded-lg"
      />
    </div>
  );
};

export default HeroBackground;
