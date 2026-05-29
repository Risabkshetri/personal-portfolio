import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <div className="max-w-4xl pt-10 pb-32">
      <h1 className='text-[36px] sm:text-[44px] md:text-[52px] font-bold text-black-100 font-serif leading-tight mb-12'>
        About.
      </h1>

      <div className='flex flex-col gap-10 text-[16px] md:text-[18px] text-secondary leading-[1.8] font-light'>
        
        <section>
          <h2 className="text-[20px] font-bold text-black-100 mb-4 font-serif uppercase tracking-widest text-[#FF6600]">Who I Am</h2>
          <p>
            I am an AI Systems Engineer and the Founder of Zobique. I specialize in building production-grade AI infrastructure, agentic workflows, and scalable backends. Rather than patching together basic wrappers, I engineer deep, systemic solutions that integrate natural language processing, vector databases, and real-time APIs into core hiring and education workflows.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] font-bold text-black-100 mb-4 font-serif uppercase tracking-widest text-[#FF6600]">What I Build</h2>
          <p>
            I build intelligence into products. This ranges from orchestrating AI copilots and automated assessment pipelines, to engineering high-availability multi-tenant SaaS platforms that parse career data at a national scale. I focus relentlessly on outcomes—systems that tangibly reduce friction in skill alignment and hiring over simply adopting new tools for the sake of novelty.
          </p>
        </section>

        <section>
          <h2 className="text-[20px] font-bold text-black-100 mb-4 font-serif uppercase tracking-widest text-[#FF6600]">What I Care About</h2>
          <p>
            The gap between education and employability is a catastrophic infra problem, not just a pedagogical one. I care deeply about bridging this gap using modern career technology. My philosophy is rooted in "readiness over resumes" and "outcomes over certificates." Quality architecture combined with meaningful models is how we solve it. 
          </p>
        </section>

        <section>
          <h2 className="text-[20px] font-bold text-black-100 mb-4 font-serif uppercase tracking-widest text-[#FF6600]">Current Focus</h2>
          <p>
            I am currently optimizing Zobique's university ecosystem presence while exploring select opportunities to join robust engineering teams. I'm actively interested in Founding Engineer or specialized AI Engineering roles where I can drive immediate product and infrastructure impact alongside world-class talent.
          </p>
        </section>

      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");