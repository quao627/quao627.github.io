// Personal Information and About Me Data
const ABOUT_DATA = {
    profile: {
        name: "Ao Qu",
        nameZh: "瞿骜",
        role: "PhD Student · MIT IDSS",
        location: "Boston",
        image: "profile.jpg",
        email: "qua@mit.edu",
        links: {
            scholar: "https://scholar.google.com/citations?user=qKdzvdwAAAAJ&hl=en",
            github: "https://github.com/quao627",
            twitter: "https://x.com/ao_qu18465",
            linkedin: "https://www.linkedin.com/in/ao-qu-07a872174/"
        }
    },

    // One sentence on the homepage; keep it short
    tagline: "I study how AI agents can <strong>learn from experience</strong> and <strong>keep evolving</strong> — growing into specialized roles and, eventually, making novel contributions to <strong>science and society</strong>.",

    advisors: "Advised by <a href='https://pliang279.github.io/' target='_blank'>Paul Liang</a> (MIT Media Lab & EECS) and <a href='https://zhaojinhua.com/' target='_blank'>Jinhua Zhao</a> (MIT DUSP).",

    affiliations: [
        { name: "MIT Media Lab", url: "https://www.media.mit.edu/", logo: "logos/medialab.jpg" },
        { name: "MIT EECS", url: "https://www.eecs.mit.edu/", logo: "logos/eecs.png" },
        { name: "MIT DUSP", url: "https://dusp.mit.edu/", logo: "logos/dusp.png" },
        { name: "SMART M3S", url: "https://m3s.mit.edu/", logo: "logos/m3s.avif" }
    ],

    // `value: null` means it is computed from OPEN_SOURCE_DATA star counts
    stats: [
        { value: "15+", label: "papers at top ML venues" },
        { value: "4", label: "best paper awards" },
        { value: null, label: "GitHub stars on open-source projects", key: "stars" }
    ],

    now: [
        {
            kind: "Building",
            title: "Reef",
            text: "Open infrastructure for continually self-improving agents — evolving both model weights and agent harnesses.",
            tags: ["Engineering optimization", "Scientific discovery", "Enterprise continual learning"],
            links: [
                { label: "GitHub", icon: "fab fa-github", url: "https://github.com/Human-Agent-Society/reef", repo: "Human-Agent-Society/reef" },
                { label: "Launch post", icon: "fas fa-arrow-up-right-from-square", url: "https://x.com/ao_qu18465/status/2094867930081337730" }
            ],
            featured: true
        },
        {
            kind: "Teaching",
            title: "How to AI an AI for (Almost) Anything",
            text: "aka Self-Evolving AI · MIT, Fall 2026",
            role: "Co-instructor",
            links: [
                { label: "Course site", icon: "fas fa-arrow-up-right-from-square", url: "https://mit-mi.github.io/how2ai-course/fall2026/" }
            ]
        }
    ],

    // `papers` entries: { label, id } links to a publication card; { label, url } links out; { label } is plain
    researchAreas: [
        {
            id: "experience",
            title: "Experience-driven improvement",
            icon: "fa-arrows-spin",
            papers: [
                { label: "MEM1", id: "mem1" },
                { label: "Evolving in Thought Space", id: "thoughtspace" },
                { label: "AlphaOPT", id: "alphaopt" },
                { label: "SPADE", id: "spade" }
            ]
        },
        {
            id: "multiagent",
            title: "Multi-agent evolving systems",
            icon: "fa-diagram-project",
            papers: [
                { label: "CORAL", id: "coral" },
                { label: "Economy of Minds", id: "eom" }
            ]
        },
        {
            id: "discovery",
            title: "Benchmarks for scientific discovery",
            icon: "fa-flask-vial",
            papers: [
                { label: "FrontierOR", id: "frontieror" },
                { label: "FrontierCS 2.0" },
                { label: "TRACES" }
            ]
        },
        {
            id: "infra",
            title: "Infrastructure for self-improving agents",
            icon: "fa-server",
            papers: [
                { label: "CORAL", id: "coral" },
                { label: "Reef", url: "https://github.com/Human-Agent-Society/reef" }
            ]
        },
        {
            id: "social",
            title: "Socially aware AI",
            icon: "fa-people-group",
            papers: [
                { label: "ClassMind", id: "classmind" },
                { label: "OmniSapiens", id: "omnisapiens" },
                { label: "Simulating Society", id: "simthought" }
            ]
        }
    ],

    experience: [
        {
            org: "ByteDance Seed",
            role: "Research Scientist Intern · Top Seed Talent Program",
            detail: "Training and evaluating human-centered continual learning systems",
            time: "2026",
            place: "Bellevue, WA",
            mono: "BD"
        },
        {
            org: "MIT",
            role: "PhD Student · Institute for Data, Systems, and Society",
            detail: "Multisensory Intelligence Group, MIT Media Lab",
            time: "Now",
            place: "Cambridge, MA",
            logo: "logos/medialab.jpg"
        },
        {
            org: "SMART M3S",
            role: "Visiting Researcher · Singapore-MIT Alliance",
            time: "– 2025",
            place: "Singapore",
            logo: "logos/m3s.avif"
        },
        {
            org: "Vanderbilt University",
            role: "B.S. Mathematics (Honors) & Computer Science",
            detail: "Summa Cum Laude",
            time: "2018 – 2022",
            place: "Nashville, TN",
            mono: "VU"
        }
    ],

    honors: [
        { title: "Best Paper Award", where: "NeurIPS 2025 MTI-LLM Workshop", paper: "MEM1", id: "mem1" },
        { title: "Best Paper Award", where: "IJCAI 2025 MKLM Workshop", paper: "Sparkle", id: "sparkle" },
        { title: "Best Paper Award", where: "KDD 2024 UrbComp Workshop", paper: "ITINERA", id: "itinera" },
        { title: "Best Paper Finalist", where: "INFORMS Data Mining Society 2025", paper: "AlphaOPT", id: "alphaopt" },
        { title: "Best Student Paper", where: "SMC 2020 Data Challenge, Oak Ridge National Lab" },
        { title: "Top Seed Talent Program", where: "ByteDance Seed, 2026" }
    ],

    contact: "I enjoy working with research interns and collaborating with startups. If you share these interests, email me with some context, your background, and project ideas."
};
