// News and Updates Data
const NEWS_DATA = [
    {
        date: "2026-10-05",
        content: "<em>Evolving in Thought Space</em> is now on <a href='https://arxiv.org/abs/2610.06269' target='_blank'>arXiv</a>! Instead of fine-tuning a large model at test time, we train a small guidance model to propose high-level strategies while a frozen, stronger executor writes the code. Without web access, it beats the best previously reported solutions across four domains, from polyomino packing to GPU kernel optimization. Great work with my co–first author, Chonghe Jiang!",
        highlight: true
    },
    {
        date: "2026-09-24",
        content: "Three papers accepted to <strong>NeurIPS 2026</strong>: <em>Economy of Minds</em>, <em>FrontierOR</em> (Evaluations & Datasets Track), and <em>The Last Human-Written Paper</em>.",
        highlight: true
    },
    {
        date: "2026-08-20",
        content: "<em>HugAgent</em>, a benchmark for simulating individual-level human reasoning, was accepted to the <strong>EMNLP 2026</strong> main conference. Congratulations to Chance Jiajie Li, Zhenze Mo, and Yuhan Tang!",
        highlight: false
    },
    {
        date: "2026-08-19",
        content: "We released <em>SPADE</em> (<a href='https://arxiv.org/abs/2608.19197' target='_blank'>arXiv</a>, <a href='https://spade-rl.github.io' target='_blank'>project</a>), a self-play RL framework where a single LLM both designs executable training environments and learns to solve them, producing an adaptive curriculum for language agents. Wonderful collaboration with Bo Liu, Simon Yu, and the team.",
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
        content: "<em>Economy of Minds</em> is now on <a href='https://arxiv.org/abs/2606.02859' target='_blank'>arXiv</a>! We show that agent populations coordinating through economic interactions — auctions, payments, and wealth accumulation — develop emergent multi-agent intelligence that outperforms monolithic baselines. Wonderful collaboration with Zhenting Qi, Huangyuan Su, and the team at Harvard and MIT.",
        highlight: false
    },
    {
        date: "2026-05-24",
        content: "<em>FrontierOR</em> is now on <a href='https://arxiv.org/abs/2605.25246' target='_blank'>arXiv</a>! We benchmark LLMs' capacity for efficient algorithm design on 180 large-scale optimization tasks drawn from top operations research venues. Great work with Minwei Kong and Chonghe Jiang!",
        highlight: false
    },
    {
        date: "2026-04-02",
        content: "We released <em>CORAL</em> (<a href='https://arxiv.org/abs/2604.01658' target='_blank'>arXiv</a>, <a href='https://github.com/Human-Agent-Society/CORAL' target='_blank'>code</a>), the first framework for autonomous multi-agent evolution on open-ended problems. Long-running agents explore, reflect, and collaborate through shared persistent memory, setting new state-of-the-art results on 10 discovery tasks.",
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

