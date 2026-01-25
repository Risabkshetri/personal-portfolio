import { styles } from "../styles";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>

        {/* Top Horizontal Grid Line - Keeping subtle structure */}
        <div className='absolute top-0 left-0 w-full h-[1px] bg-black-100/5' />

        {/* Hero-style Geometric Accents */}
        <div className='absolute top-12 left-6 flex flex-col items-center gap-2 pointer-events-none'>
          <div className='w-3 h-3 bg-[#915eff]' />
          <div className='w-[3px] h-24 bg-gradient-to-b from-[#915eff] to-transparent' />
        </div>
        <div className='absolute bottom-10 left-10 w-10 h-10 border-b-2 border-l-2 border-[#915eff]/40 pointer-events-none' />
        <div className='absolute top-10 right-10 w-10 h-10 border-t-2 border-r-2 border-[#915eff]/40 pointer-events-none' />
        <div className='absolute bottom-10 right-10 w-10 h-10 border-b-2 border-r-2 border-[#915eff]/40 pointer-events-none' />

        <Component />

        {/* Bottom Horizontal Grid Line */}
        <div className='absolute bottom-0 left-0 w-full h-[1px] bg-black-100/5' />
      </section>
    );
  };

export default StarWrapper;
