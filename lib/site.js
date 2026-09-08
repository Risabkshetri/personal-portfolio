// Single source of truth for identity, URLs, and social profiles.
// Used by metadata, JSON-LD, RSS, sitemap, and /llms.txt.

export const site = {
  name: "Rishab Chhetri",
  url: "https://rishabchhetri.in",
  domain: "rishabchhetri.in",
  // Achievement-first, no adjectives. Verifiable in one click each.
  positioning:
    "I build AI systems that get deployed. The job-matching and skill-gap engine I built is integrated with India's National Career Service (NCS). I run Zobique Labs, an AI automation studio whose agents run in production inside real businesses, while finishing my B.Tech.",
  shortBio:
    "Technical founder. Built a job-matching and skill-gap engine integrated with India's National Career Service; run Zobique Labs, an AI automation studio.",
  email: "ceo@zobique.com",
  discoveryCall: "https://calendly.com/risawgc/30min",
  indiaToday:
    "https://www.indiatoday.in/education-today/how-i-made-it/story/how-a-btech-student-turned-friends-career-questions-into-the-ai-startup-zobique-2949089-2026-07-16",
  socials: {
    linkedin: "https://www.linkedin.com/in/rishab-chhetri/",
    x: "https://x.com/risab_kshetri",
    github: "https://github.com/Risabkshetri",
    topmate: "https://topmate.io/rishab_chhetri",
  },
  org: {
    name: "Zobique",
    url: "https://www.zobique.com",
    labs: "https://labs.zobique.com",
  },
};

export const sameAs = [
  site.socials.linkedin,
  site.socials.x,
  site.socials.github,
  site.socials.topmate,
];
