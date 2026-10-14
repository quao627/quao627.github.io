// Personal Information and About Me Data
const ABOUT_DATA = {
    profile: {
        name: "Ao Qu",
        nameZh: "瞿骜",
        title: "PhD Student, MIT IDSS",
        image: "profile.jpg",
        email: "qua@mit.edu",
        links: {
            scholar: "https://scholar.google.com/citations?user=qKdzvdwAAAAJ&hl=en",
            github: "https://github.com/quao627",
            twitter: "https://x.com/ao_qu18465",
            linkedin: "https://www.linkedin.com/in/ao-qu-07a872174/"
        }
    },

    bio: [
        "Hi, I'm Ao Qu, written as 瞿骜 in Chinese. I am a PhD student at the MIT <a href='https://idss.mit.edu/' target='_blank'>Institute for Data, Systems, and Society</a>, advised by <a href='https://pliang279.github.io/' target='_blank'>Prof. Paul Liang</a> (MIT Media Lab & EECS) and <a href='https://zhaojinhua.com/' target='_blank'>Prof. Jinhua Zhao</a> (MIT DUSP). Before MIT, I studied computer science and mathematics at Vanderbilt University.",
        "My research centers on self-evolving AI systems that learn from interaction and consolidate experience into reusable knowledge. Drawing on continual learning, reinforcement learning, and multimodal intelligence, I aim to build AI systems that can proactively adapt and evolve in complex real-world environments.",
        "Currently, I split my time between building <a href='https://github.com/Human-Agent-Society/reef' target='_blank'>Reef</a>, an infrastructure for continually self-improving agents, and co-instructing the course <a href='https://mit-mi.github.io/how2ai-course/fall2026/' target='_blank'>How to AI an AI for (Almost) Anything</a> at MIT."
    ],

    research: {
        mission: "I enjoy thinking about how AI can learn from interacting with its environment, an interest that has carried me from early-stage <strong>reinforcement learning</strong> to today's <strong>agents</strong>. The grand mission I am pursuing is to figure out how agents can <strong>function as individuals in society</strong>, continually evolving into their own specialized roles and eventually creating novel contributions to society through <strong>scientific discovery in the broadest sense</strong>: improving engineering systems, uncovering social principles, and advancing scientific laws.",

        questions: [
            "<strong>Scalable multi-agent evolution:</strong> How can collaboration, competition, and economic incentives drive continual improvement across populations of agents?",
            "<strong>Real-time human–AI interaction:</strong> How can we design models that see, listen, think, and speak with native temporal alignment?",
            "<strong>Model-native memory:</strong> How can agents develop the metacognition to decide what to remember, update, and forget?",
            "<strong>Open-ended learning and discovery:</strong> What foundational capabilities enable agents to learn from open-ended feedback and make novel discoveries? Do these abilities develop gradually or emerge through transitions like grokking?"
        ]
    },

    // One personal sentence at the top of a section
    notes: {
        openSource: "I enjoy building open-source projects that facilitate intellectual exchange and knowledge sharing in the most effective way, and that bring together people with a shared mission. I am a core maintainer of the projects below.",
        blogs: "I write to organize my thinking and to share it with people who care about the same questions."
    },

    // Previous projects, grouped
    // `papers` entries: { label, id } links to a publication; { label, url } links out; { label } is plain text
    researchAreas: [
        {
            title: "Experience-driven model and agent improvement",
            desc: "I want models and agents to get better the way people do: by turning their own experience into lasting improvement.",
            papers: [
                { label: "MEM1", id: "mem1" },
                { label: "Evolving in Thought Space", id: "thoughtspace" },
                { label: "AlphaOPT", id: "alphaopt" },
                { label: "SPADE", id: "spade" }
            ]
        },
        {
            title: "Multi-agent evolving systems for discovery",
            desc: "I believe populations of agents that share memory, collaborate, and even trade can sustain exploration far beyond what any single agent can achieve.",
            papers: [
                { label: "CORAL", id: "coral" },
                { label: "Economy of Minds", id: "eom" },
                { label: "Reimagining Urban Science", id: "urbanci" }
            ]
        },
        {
            title: "Benchmarks for scientific discovery",
            desc: "To make real progress, we need to measure whether AI can solve open-ended problems whose answers are not yet known.",
            papers: [
                { label: "FrontierOR", id: "frontieror" }
            ]
        },
        {
            title: "Infrastructure for self-improving agents",
            desc: "Self-improving agents need systems that let both model weights and agent harnesses keep learning from real use.",
            papers: [
                { label: "CORAL", id: "coral" },
                { label: "Reef", url: "https://github.com/Human-Agent-Society/reef" }
            ]
        },
        {
            title: "Socially aware AI",
            desc: "I also care about the human side: AI that can perceive, reason, and communicate naturally with people in everyday life.",
            papers: [
                { label: "ClassMind", id: "classmind" },
                { label: "OmniSapiens", id: "omnisapiens" },
                { label: "Simulating Society", id: "simthought" }
            ]
        }
    ],

    experience: [
        { org: "MIT", role: "Co-instructor, <a href='https://mit-mi.github.io/how2ai-course/fall2026/' target='_blank'>How to AI an AI for (Almost) Anything</a>", time: "Fall 2026" },
        { org: "ByteDance Seed", role: "Research Scientist Intern, Top Seed Talent Program", time: "2026" },
        { org: "MIT IDSS", role: "PhD Student", time: "2022 – Now" },
        { org: "SMART M3S", role: "Visiting Researcher, Singapore", time: "– 2025" },
        { org: "Vanderbilt University", role: "B.S. Mathematics & Computer Science", time: "2018 – 2022" }
    ],

    contact: "I enjoy working with research interns and collaborating with brilliant minds. Feel free to <a href='mailto:qua@mit.edu'>email me</a> with context, your background, and project ideas."
};
