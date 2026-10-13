// Open Source, Writing, and Media Data

// `stars` is a fallback; the page refreshes counts from the GitHub API when it can
const OPEN_SOURCE_DATA = [
    { name: "Reef", repo: "Human-Agent-Society/reef", desc: "Infrastructure for continually self-improving agents", stars: 7583, lang: "Python" },
    { name: "CORAL", repo: "Human-Agent-Society/CORAL", desc: "Autoresearch with autonomous coding agents and multi-agent evolution", stars: 1065, lang: "Python" },
    { name: "MEM1", repo: "MIT-MI/MEM1", desc: "Synergizing memory and reasoning for long-horizon agents", stars: 344, lang: "Python" },
    { name: "SPADE", repo: "spade-rl/spade", desc: "Self-play in adaptive synthetic executable environments", stars: 118, lang: "Python" },
    { name: "FrontierOR", repo: "Minw913/FrontierOR", desc: "Benchmarking LLM algorithm design for large-scale optimization", stars: 40, lang: "Python" },
    { name: "AlphaOPT", repo: "Minw913/AlphaOPT", desc: "Self-improving experience library for optimization modeling", stars: 28, lang: "Python" }
];

const WRITING_DATA = [
    {
        title: "Your Inference Server is Secretly a Learner",
        sub: "Open-sourcing Reef for continual self-improving agents",
        source: "X Article",
        date: "Sep 2026",
        url: "https://x.com/ao_qu18465/status/2094867930081337730",
        cover: "assets/blog/reef.jpg"
    },
    {
        title: "The Compounding Loop",
        sub: "A framework for self-evolving agents: classification, topology, and physics",
        source: "Blog",
        date: "Apr 2026",
        url: "blog/self-evolving-agents/",
        cover: "assets/blog/compounding-loop.jpg"
    },
    {
        title: "Evolve Like Coral",
        sub: "Towards autonomous multi-agent evolution",
        source: "CORAL Blog",
        date: "Mar 2026",
        url: "https://coral.compounding-intelligence.ai/blogs/evolve-like-coral/",
        cover: "assets/blog/coral.jpg"
    }
];

const MEDIA_DATA = [
    { outlet: "MIT News", topic: "Eco-driving at scale", note: "Daily News Spotlight", url: "https://news.mit.edu/2025/eco-driving-measures-could-significantly-reduce-vehicle-emissions-0807" },
    { outlet: "MIT News", topic: "IntersectionZoo", url: "https://news.mit.edu/2025/new-tool-evaluate-progress-reinforcement-learning-0505" },
    { outlet: "New Scientist", topic: "Eco-driving at scale", url: "https://www.newscientist.com/article/2445202-a-simple-driving-trick-could-make-a-big-dent-in-cars-carbon-emissions/" },
    { outlet: "DAIR.AI", topic: "MEM1", note: "Top ML Papers of the Week", url: "https://github.com/dair-ai/ML-Papers-of-the-Week" },
    { outlet: "MarkTechPost", topic: "MEM1", url: "https://www.marktechpost.com/2025/06/26/mit-and-nus-researchers-introduce-mem1-a-memory-efficient-framework-for-long-horizon-language-agents/" },
    { outlet: "QbitAI 量子位", topic: "MEM1", url: "https://mp.weixin.qq.com/s/aLq93YFNY2e9-AJ0xyJ1eQ" },
    { outlet: "QbitAI 量子位", topic: "ITINERA", url: "https://mp.weixin.qq.com/s/44mtENyqrHiNEEcWS61COg" }
];
