import React from "react";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";


const ZobiquePage = () => {
    return (
        <>
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "Zobique",
                    "founder": {
                        "@type": "Person",
                        "name": "Rishab Chhetri"
                    },
                    "url": "https://rishabchhetri.com/work",
                    "description": "AI-powered career intelligence platform."
                })}
            </script>

            <div>
                <p className={`${styles.sectionSubText} text-center text-secondary`}>
                    AI Career Intelligence
                </p>
                <h1 className={`${styles.sectionHeadText} text-center text-black-100`}>
                    Zobique.
                </h1>
            </div>

            <div
                className='mt-4 text-secondary text-[15px] xs:text-[16px] sm:text-[17px] md:text-[18px] max-w-3xl leading-[1.8] mx-auto text-center font-light'
            >
                <p>
                    Zobique was founded by <strong className="font-bold text-black-100">Rishab Chhetri</strong> to solve job readiness and career clarity for students using AI-driven insights.
                </p>
                <br />
                <p>
                    It is an AI career intelligence platform designed to bridge the gap between education and employability. By leveraging advanced Large Language Models and skill-gap analytics, Zobique provides personalized roadmaps and real-time feedback to help early professionals succeed.
                </p>
            </div>
        </>
    );
};

export default SectionWrapper(ZobiquePage, "zobique");
