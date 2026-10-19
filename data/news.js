// News and Updates Data
const NEWS_DATA = [
    {
        date: "2026-10-14",
        content: "Taught Lecture 5 of AI4AI, a tutorial on harness engineering for modern agents (<a href='https://mit-mi.github.io/how2ai-course/fall2026/schedule/harness%20engineering%20tutorial.pdf' target='_blank'>slides</a>).",
        kind: "talk",
        highlight: false
    },
    {
        date: "2026-10-08",
        content: "Presented <em>CORAL</em> at <strong>COLM 2026</strong> with <a href='https://scholar.google.com/citations?user=sZc3Xw8AAAAJ&hl=en' target='_blank'>Han Zheng</a> and <a href='https://scholar.google.com/citations?user=SpIJomUAAAAJ&hl=en' target='_blank'>Zijian Zhou</a>!",
        highlight: false
    },
    {
        date: "2026-10-05",
        content: "<em>Evolving in Thought Space</em> is out (<a href='https://arxiv.org/abs/2610.06269' target='_blank'>arXiv</a>, <a href='https://x.com/ao_qu18465/status/2107551843115262086' target='_blank'>tweet</a>)! With test-time reinforcement learning, a small guidance model learns to propose high-level strategies for a frozen, stronger executor and, without web access, beats the best previously reported solutions in four domains. Great work with my co–first author, Chonghe Jiang!",
        highlight: true
    },
    {
        date: "2026-09-24",
        content: "Three papers accepted to <strong>NeurIPS 2026</strong>: <em>Economy of Minds</em>, <em>FrontierOR</em> (Evaluations & Datasets Track), and <em>The Last Human-Written Paper</em>.",
        highlight: true
    },
    {
        date: "2026-09-24",
        content: "<em><a href='https://github.com/Human-Agent-Society/reef' target='_blank'>Reef</a></em> hit <strong>5,000 stars</strong> on GitHub!",
        highlight: true
    },
    {
        date: "2026-09-12",
        content: "<em><a href='https://github.com/Human-Agent-Society/reef' target='_blank'>Reef</a></em> hit <strong>1,000 stars</strong> on GitHub!",
        highlight: false
    },
    {
        date: "2026-09-09",
        content: "Started teaching the AI4AI class, <a href='https://mit-mi.github.io/how2ai-course/fall2026/' target='_blank'>How to AI an AI for (Almost) Anything</a>, at MIT with <a href='https://pliang279.github.io/' target='_blank'>Paul Liang</a>! In the first lecture, I covered the history of self-evolving AI and how we got here (<a href='https://mit-mi.github.io/how2ai-course/fall2026/schedule/lec1%20-%20intro.pdf' target='_blank'>slides</a>).",
        kind: "talk",
        highlight: true
    },
    {
        date: "2026-09-01",
        content: "We open-sourced <em><a href='https://github.com/Human-Agent-Society/reef' target='_blank'>Reef</a></em> (<a href='https://github.com/Human-Agent-Society/reef' target='_blank'>code</a>, <a href='https://x.com/ao_qu18465/status/2094867930081337730' target='_blank'>tweet</a>), an infrastructure for continually self-improving agents.",
        highlight: true
    },
    {
        date: "2026-08-20",
        content: "<em>HugAgent</em>, a benchmark for simulating individual-level human reasoning, was accepted to the <strong>EMNLP 2026</strong> main conference. Congratulations to Chance Jiajie Li, Zhenze Mo, and Yuhan Tang!",
        highlight: false
    },
    {
        date: "2026-08-19",
        content: "We released <em>SPADE</em> (<a href='https://arxiv.org/abs/2608.19197' target='_blank'>arXiv</a>, <a href='https://spade-rl.github.io' target='_blank'>project</a>, <a href='https://x.com/Benjamin_eecs/status/2090427345547219435' target='_blank'>tweet</a>), a self-play RL framework where one LLM both designs training environments and learns to solve them. Wonderful collaboration with Bo Liu, Simon Yu, and the team.",
        highlight: false
    },
    {
        date: "2026-07-08",
        content: "<em>CORAL</em> was accepted to <strong>COLM 2026</strong>!",
        highlight: true
    },
    {
        date: "2026-06-17",
        content: "<em>GEM-4D</em>, a geometry-grounded video world model for robot manipulation, was accepted to <strong>ECCV 2026</strong>. Congratulations to Kaichen Zhou and Yuzhen Chen!",
        highlight: false
    },
    {
        date: "2026-06-01",
        content: "<em>Economy of Minds</em> is now on <a href='https://arxiv.org/abs/2606.02859' target='_blank'>arXiv</a>! Agent populations that coordinate through auctions, payments, and wealth develop emergent intelligence that outperforms monolithic baselines. Wonderful collaboration with Zhenting Qi, Huangyuan Su, and the team at Harvard and MIT.",
        highlight: false
    },
    {
        date: "2026-05-24",
        content: "<em>FrontierOR</em> is now on <a href='https://arxiv.org/abs/2605.25246' target='_blank'>arXiv</a>! It benchmarks LLMs on efficient algorithm design across 180 large-scale optimization tasks from top OR venues. Great work with Minwei Kong and Chonghe Jiang!",
        highlight: false
    },
    {
        date: "2026-04-30",
        content: "Invited to give a talk at <strong>Boston University</strong> on self-evolving agents. Thanks to <a href='https://www.bu.edu/questrom/profiles/jinglong-zhao/' target='_blank'>Jinglong Zhao</a> for hosting!",
        highlight: false
    },
    {
        date: "2026-04-14",
        content: "Invited to give a talk at <strong>Tsinghua University</strong> on self-evolving agents. Thanks to <a href='https://gaohuang-net.github.io/' target='_blank'>Gao Huang</a> and <a href='https://scholar.google.com/citations?user=Q9cLkdcAAAAJ&hl=en' target='_blank'>Yang Yue</a> for hosting me!",
        highlight: false
    },
    {
        date: "2026-04-02",
        content: "We released <em>CORAL</em> (<a href='https://arxiv.org/abs/2604.01658' target='_blank'>arXiv</a>, <a href='https://github.com/Human-Agent-Society/CORAL' target='_blank'>code</a>), the first framework for autonomous multi-agent evolution on open-ended problems, setting new state-of-the-art results on 10 discovery tasks.",
        highlight: true
    },
    {
        date: "2026-02-15",
        content: "<em>AlphaOPT</em> was accepted to <strong>KDD 2026</strong>! Congratulations to Minwei Kong on her first first-author conference paper.",
        highlight: false
    },
    {
        date: "2026-01-22",
        content: "<em>MEM1</em> was accepted to <strong>ICLR 2026</strong>! See you in Rio de Janeiro!",
        highlight: true
    },
    {
        date: "2025-12-06",
        content: "<em>MEM1</em> received the <strong>Best Paper Award</strong> at the <strong>NeurIPS Multi-Turn Interactions in Large Language Models Workshop 2025</strong> in San Diego!",
        highlight: true
    },
    {
        date: "2025-10-10",
        content: "<em>MEM1</em> was presented at the <strong><a href='https://facebookresearch.github.io/RAM/workshop/COLM_2025/' target='_blank'>COLM RAM2 Workshop 2025</a></strong>! Thanks to Paul for presenting the <a href='https://docs.google.com/presentation/d/1pf7-hMeApnM_9mbqwdi93OFEZ6rI1hekznhw8dJMl74/edit?usp=sharing' target='_blank'>work</a>.",
        highlight: false
    },
    {
        date: "2025-10-05",
        content: "<em>MEM1</em> was accepted by the <strong><a href='https://workshop-multi-turn-interaction.github.io/' target='_blank'>NeurIPS Multi-Turn Interactions in Large Language Models workshop 2025</a></strong> as a <strong>top 1%</strong> submission (2 orals out of 230 papers). Great work with my co–first author, Zijian Zhou. Looking forward to the conference in San Diego!",
        highlight: true
    },
    {
        date: "2025-09-25",
        content: "<a href='https://arxiv.org/abs/2506.06958' target='_blank'><em>Position: Simulating Society Requires Simulating Thought</em></a> was accepted to the <strong>NeurIPS 2025 Position Paper Track</strong>. Thanks to Jiajie (Chance) Li for leading the project!",
        highlight: false
    },
    {
        date: "2025-09-17",
        content: "<em>AlphaOPT</em> was accepted to the <strong>INFORMS Data Mining Society 2025</strong> as one of the four finalists for the <strong>Best Paper Award</strong>. Great work with my intern, Minwei Kong!",
        highlight: true
    },
    {
        date: "2025-08-20",
        content: "<em>SPARKLE</em> was accepted to the <strong>Findings of EMNLP 2025</strong> and received the <strong>Best Paper Award</strong> at <strong><a href='https://sites.google.com/view/ijcai-mklm/home' target='_blank'>IJCAI Multimodal Knowledge and Language Modeling workshop 2025</a></strong>. Great work with my co–first authors, Yihong Tang, Zhaokai Wang, and Dingyi Zhuang.",
        highlight: true
    },
    {
        date: "2025-06-30",
        content: "<em>MEM1</em> was selected as one of the ten <strong>Top ML Papers of the Week</strong> by <a href='https://github.com/dair-ai/ML-Papers-of-the-Week' target='_blank'>DAIR.AI</a>!",
        highlight: false
    },
    {
        date: "2025-05-17",
        content: "My last day at SMART M3S. Thanks to all my friends and colleagues for the wonderful time we had in Singapore.",
        highlight: false
    }
];

