// Publications and Research Data
// areas: ids from ABOUT_DATA.researchAreas (used by the filter)
// badges: kind "award" is highlighted; anything else renders as a quiet note
const PUBLICATIONS_DATA = {
    selectedWorks: [
        {
            id: 'coral',
            title: "CORAL: Towards Autonomous Multi-Agent Evolution for Open-Ended Discovery",
            authors: "<strong>Ao Qu*</strong>, Han Zheng*, Zijian Zhou*, Yihao Yan, Yihong Tang, Shao Yong Ong, Fenglu Hong, Kaichen Zhou, Chonghe Jiang, Minwei Kong, Jiacheng Zhu, Xuan Jiang, Sirui Li, Cathy Wu, Bryan Kian Hsiang Low, Jinhua Zhao, Paul Pu Liang",
            venue: "COLM 2026",
            areas: ['multiagent', 'infra'],
            image: "paper-teasers/coral.png",
            links: {
                paper: "https://arxiv.org/abs/2604.01658",
                code: "https://github.com/Human-Agent-Society/CORAL",
                blog: "https://coral.compounding-intelligence.ai/blogs/evolve-like-coral/"
            }
        },
        {
            id: 'thoughtspace',
            title: "Evolving in Thought Space: Training a Small Model at Test Time Unlocks Better Discoveries",
            authors: "Chonghe Jiang*, <strong>Ao Qu*</strong>, Siyuan Liu, Ruoyun Ma, Zijian Zhou, Dingyi Zhuang, Bo Liu, Han Zheng, Hanfei Yu, Baichuan Mo, Jinhua Zhao, Paul Pu Liang",
            venue: "arXiv 2026",
            areas: ['experience'],
            image: "paper-teasers/guidance-ttt.png",
            links: {
                paper: "https://arxiv.org/abs/2610.06269",
                code: "https://github.com/Human-Agent-Society/reef/tree/guidance-ttt-support"
            }
        },
        {
            id: 'mem1',
            title: "MEM1: Learning to Synergize Memory and Reasoning for Efficient Long-Horizon Agents",
            authors: "Zijian Zhou*, <strong>Ao Qu*</strong>, Zhaoxuan Wu, Sunghwan Kim, Alok Prakash, Daniela Rus, Jinhua Zhao, Bryan Kian Hsiang Low, Paul Pu Liang",
            venue: "ICLR 2026",
            badges: [
                { text: "Best Paper · NeurIPS MTI-LLM Workshop 2025", kind: "award" },
                { text: "Oral · COLM RAM2 Workshop 2025" }
            ],
            areas: ['experience'],
            image: "paper-teasers/mem1.png",
            links: {
                paper: "https://arxiv.org/abs/2506.15841",
                code: "https://github.com/MIT-MI/MEM1",
                project: "https://mit-mi.github.io/mem1-site/",
                video: "https://drive.google.com/file/d/1jiVTdCokBwkHOJPnI4xKNLeWaXixvAow/view?usp=sharing",
                poster: "posters/mem1-poster.pdf"
            },
            media: [
                { name: "MarkTechPost", url: "https://www.marktechpost.com/2025/06/26/mit-and-nus-researchers-introduce-mem1-a-memory-efficient-framework-for-long-horizon-language-agents/" },
                { name: "QbitAI (量子位)", url: "https://mp.weixin.qq.com/s/aLq93YFNY2e9-AJ0xyJ1eQ" }
            ]
        },
        {
            id: 'spade',
            title: "SPADE: Self-Play in Adaptive Synthetic Executable Environments",
            authors: "Bo Liu*, Simon Yu*, Yiding Jiang, <strong>Ao Qu</strong>, Andrew Zhao, Zichen Liu, Junsu Kim, Zijian Zhou, Seungone Kim, Tongzheng Ren, Mickel Liu, Hanfei Yu, Zhaorun Chen, Weiyan Shi, Paul Pu Liang, Luke Zettlemoyer, Yejin Choi, Natasha Jaques",
            venue: "arXiv 2026",
            areas: ['experience'],
            image: "paper-teasers/spade.png",
            links: {
                paper: "https://arxiv.org/abs/2608.19197",
                code: "https://github.com/spade-rl/spade",
                project: "https://spade-rl.github.io"
            }
        },
        {
            id: 'eom',
            title: "Economy of Minds: Emerging Multi-Agent Intelligence with Economic Interactions",
            authors: "Zhenting Qi, Huangyuan Su, <strong>Ao Qu</strong>, Chenyu Wang, Yu Yao, Han Zheng, Kushal Chattopadhyay, Guowei Xu, Zihan Wang, Weirui Ye, Vijay Janapa Reddi, Ju Li, Paul Pu Liang, Himabindu Lakkaraju, Sham Kakade, Yilun Du",
            venue: "NeurIPS 2026",
            areas: ['multiagent'],
            image: "paper-teasers/economy-of-minds.png",
            links: {
                paper: "https://arxiv.org/abs/2606.02859",
                code: "https://github.com/zhentingqi/EoM",
                project: "https://zhentingqi.github.io/internal/projects/EoM"
            }
        },
        {
            id: 'frontieror',
            title: "FrontierOR: Benchmarking LLMs' Capacity for Efficient Algorithm Design in Large-Scale Optimization",
            authors: "Minwei Kong*, Chonghe Jiang*, <strong>Ao Qu (project lead)</strong>, Wenbin Ouyang, Zhaoming Zeng, Xiaotong Guo, Zhekai Li, Junyi Li, Yi Fan, Xinshou Zheng, Xi Jing, Yikai Zhang, Zhiwei Liang, Seonghoo Kim, Runqing Yang, Zijian Zhou, Sirui Li, Han Zheng, Wangyang Ying, Ou Zheng, Chonghuan Wang, Jinglong Zhao, Hanzhang Qin, Cathy Wu, Paul Pu Liang, Jinhua Zhao, Hai Wang",
            venue: "NeurIPS 2026",
            badges: [
                { text: "Evaluations & Datasets Track" },
                { text: "ICML AI for Math Workshop 2026" }
            ],
            areas: ['discovery'],
            image: "paper-teasers/frontieror.jpg",
            links: {
                paper: "https://arxiv.org/abs/2605.25246",
                code: "https://github.com/Minw913/FrontierOR"
            }
        },
        {
            id: 'alphaopt',
            title: "AlphaOPT: Formulating Optimization Programs with Self-Improving LLM Experience Library",
            authors: "Minwei Kong*, <strong>Ao Qu* (corresponding author)</strong>, Xiaotong Guo, Wenbin Ouyang, Chonghe Jiang, Han Zheng, Yining Ma, Dingyi Zhuang, Yuhan Tang, Junyi Li, Hai Wang, Cathy Wu, Jinhua Zhao",
            venue: "KDD 2026",
            badges: [
                { text: "Best Paper Finalist · INFORMS Data Mining Society 2025", kind: "award" }
            ],
            areas: ['experience'],
            image: "paper-teasers/alphaopt.jpg",
            links: {
                paper: "https://arxiv.org/abs/2510.18428",
                code: "https://github.com/Minw913/AlphaOPT"
            }
        },
        {
            id: 'ara',
            title: "The Last Human-Written Paper: Agent-Native Research Artifacts",
            authors: "Jiachen Liu, Jiaxin Pei, Jintao Huang, Chenglei Si, <strong>Ao Qu</strong>, Xiangru Tang, Runyu Lu, Lichang Chen, Xiaoyan Bai, Haizhong Zheng, et al., Beidi Chen, Alex Pentland, Ang Chen, Mosharaf Chowdhury, Zechen Zhang",
            venue: "NeurIPS 2026",
            badges: [
                { text: "ICML AI4Research Workshop 2026" }
            ],
            areas: ['discovery'],
            image: "paper-teasers/ara.jpg",
            links: {
                paper: "https://arxiv.org/abs/2604.24658",
                code: "https://github.com/ARA-Labs/Agent-Native-Research-Artifact"
            }
        },
        {
            id: 'hugagent',
            title: "HugAgent: A Human Simulation Benchmark for Individual-Level Reasoning",
            authors: "Chance Jiajie Li*, Zhenze Mo*, Yuhan Tang*, <strong>Ao Qu</strong>, Jiayi Wu, Kaiya Ivy Zhao, Yulu Gan, Jie Fan, Jiangbo Yu, Hang Jiang, Paul Pu Liang, Jinhua Zhao, Luis Alonso, Kent Larson",
            venue: "EMNLP 2026",
            areas: ['social'],
            image: "paper-teasers/hugagent.jpg",
            links: {
                paper: "https://arxiv.org/abs/2510.15144",
                code: "https://github.com/jajamoa/HugAgent"
            }
        },
        {
            id: 'simthought',
            title: "Position: Simulating Society Requires Simulating Thought",
            authors: "Chance Jiajie Li*, Jiayi Wu*, Zhenze Mo, <strong>Ao Qu</strong>, Yuhan Tang, Kaiya Ivy Zhao, Yulu Gan, Jie Fan, Jiangbo Yu, Jinhua Zhao, Paul Pu Liang, Luis Alonso, Kent Larson",
            venue: "NeurIPS 2025",
            badges: [
                { text: "Position Paper Track" }
            ],
            areas: ['social'],
            image: "paper-teasers/simulating-thought.jpg",
            links: {
                paper: "https://arxiv.org/abs/2506.06958"
            }
        },
        {
            id: 'gem4d',
            title: "GEM-4D: Geometry-Enhanced Video World Models for Robot Manipulation",
            authors: "Kaichen Zhou*, Yuzhen Chen*, Fangneng Zhan, Hang Hua, Grace Chen, Xinhai Chang, <strong>Ao Qu</strong>, Yilun Du, Zhuang Liu, Paul Pu Liang, Mengyu Wang",
            venue: "ECCV 2026",
            areas: [],
            image: "paper-teasers/gem4d.jpg",
            links: {
                paper: "https://arxiv.org/abs/2605.22882",
                project: "https://gem-4d.github.io/"
            }
        },
        {
            id: 'omnisapiens',
            title: "OmniSapiens: A Foundation Model for Social Behavior Processing via Heterogeneity-Aware Relative Policy Optimization",
            authors: "Keane Ong, Sabri Boughorbel, Luwei Xiao, Chanakya Ekbote, Wei Dai, <strong>Ao Qu</strong>, Jingyao Wu, Rui Mao, Ehsan Hoque, Erik Cambria, Gianmarco Mengaldo, Paul Pu Liang",
            venue: "ICML 2026",
            areas: ['social'],
            image: "paper-teasers/omnisapiens.jpg",
            links: {
                paper: "https://arxiv.org/abs/2602.10635",
                code: "https://github.com/MIT-MI/human_behavior_atlas"
            }
        },
        {
            id: 'classmind',
            title: "ClassMind: Scaling Classroom Observation and Instructional Feedback with Multimodal AI",
            authors: "<strong>Ao Qu*</strong>, Yuxi Wen*, Jiayi Zhang*, Yunge Wen, Yibo Zhao, Alok Prakash, Andrés F. Salazar-Gómez, Paul Pu Liang, Jinhua Zhao",
            venue: "arXiv 2025",
            areas: ['social'],
            image: "paper-teasers/classmind.png",
            links: {
                paper: "https://arxiv.org/abs/2509.18020",
                video: "https://drive.google.com/file/d/1hdLLfHoMHoIPdCyx-PYnfPOIKyoVHz3Q/view?usp=sharing"
            }
        },
        {
            id: 'sparkle',
            title: "Sparkle: Mastering Basic Spatial Capabilities in Vision Language Models Elicits Generalization to Spatial Reasoning",
            authors: "Yihong Tang*, <strong>Ao Qu* (corresponding author)</strong>, Zhaokai Wang*, Dingyi Zhuang*, Zhaofeng Wu, Wei Ma, Shenhao Wang, Yunhan Zheng, Zhan Zhao, Jinhua Zhao",
            venue: "EMNLP 2025 Findings",
            badges: [
                { text: "Best Paper · IJCAI MKLM Workshop 2025", kind: "award" }
            ],
            areas: [],
            image: "paper-teasers/sparkle.png",
            links: {
                paper: "https://arxiv.org/abs/2410.16162",
                code: "https://github.com/YihongT/Sparkle"
            }
        },
        {
            id: 'urbanci',
            title: "Reimagining Urban Science: Scaling Causal Inference with Large Language Models",
            authors: "Yutong Xia*, <strong>Ao Qu*</strong>, Yunhan Zheng, Yihong Tang, Dingyi Zhuang, Yuxuan Liang, Shenhao Wang, Cathy Wu, Lijun Sun, Roger Zimmermann, Jinhua Zhao",
            venue: "arXiv 2025",
            areas: ['multiagent'],
            image: "paper-teasers/urbanci.png",
            links: {
                paper: "https://arxiv.org/abs/2504.12345",
                code: "https://github.com/quao627/Urban-CI-LitReview"
            }
        },
        {
            id: 'itinera',
            title: "ITINERA: Integrating Spatial Optimization with Large Language Models for Open-domain Urban Itinerary Planning",
            authors: "Yihong Tang*, Zhaokai Wang*, <strong>Ao Qu* (project lead)</strong>, Yihao Yan*, Zhaofeng Wu, Dingyi Zhuang, Jushi Kai, Kebing Hou, Xiaotong Guo, Han Zheng, Tiange Luo, Jinhua Zhao, Zhan Zhao, Wei Ma",
            venue: "EMNLP 2024 Industry Track",
            badges: [
                { text: "Best Paper · KDD UrbComp Workshop 2024", kind: "award" }
            ],
            areas: [],
            image: "paper-teasers/itinera.png",
            links: {
                paper: "https://aclanthology.org/2024.emnlp-industry.104/",
                code: "https://github.com/YihongT/ITINERA"
            },
            media: [
                { name: "QbitAI (量子位)", url: "https://mp.weixin.qq.com/s/44mtENyqrHiNEEcWS61COg" }
            ]
        }
    ],

    earlyStage: [
        {
            title: "Mitigating Metropolitan Carbon Emissions with Dynamic Eco-driving at Scale",
            authors: "Vindula Jayawardana, Baptiste Freydt, <strong>Ao Qu</strong>, Cameron Hickert, Edgar Sanchez, Catherine Tang, Mark Taylor, Blaine Leonard, Cathy Wu",
            venue: "Transportation Research Part C, 2025",
            note: "Media: <a href=\"https://www.newscientist.com/article/2445202-a-simple-driving-trick-could-make-a-big-dent-in-cars-carbon-emissions/\" target=\"_blank\">New Scientist</a> · <a href=\"https://news.mit.edu/2025/eco-driving-measures-could-significantly-reduce-vehicle-emissions-0807\" target=\"_blank\">MIT News</a> (Daily News Spotlight)"
        },
        {
            title: "IntersectionZoo: Eco-driving for Benchmarking Multi-Agent Contextual Reinforcement Learning",
            authors: "Vindula Jayawardana, Baptiste Freydt, <strong>Ao Qu</strong>, Cameron Hickert, Zhongxia Yan, Cathy Wu",
            venue: "ICLR 2025",
            note: "Media: <a href=\"https://news.mit.edu/2025/new-tool-evaluate-progress-reinforcement-learning-0505\" target=\"_blank\">MIT News</a>"
        },
        {
            title: "Attacking Deep Reinforcement Learning-Based Traffic Signal Control Systems with Colluding Vehicles",
            authors: "<strong>Ao Qu</strong>, Yihong Tang, Wei Ma",
            venue: "ACM Transactions on Intelligent Systems and Technology"
        },
        {
            title: "SEIP: Simulation-based Design and Evaluation of Infrastructure-supported Collective Perception",
            authors: "<strong>Ao Qu*</strong>, Jason Xuhuan Huang*, Dajiang Suo",
            venue: "IEEE ITSC 2023"
        },
        {
            title: "Detecting Extreme Traffic Events via a Context Augmented Graph Autoencoder",
            authors: "Yue Hu, <strong>Ao Qu</strong>, Dan Work",
            venue: "ACM Transactions on Intelligent Systems and Technology"
        },
        {
            title: "Streaming Data Preprocessing via Online Tensor Recovery for Large Environmental Sensor Networks",
            authors: "Yue Hu, <strong>Ao Qu</strong>, Yanbing Wang, Dan Work",
            venue: "ACM Transactions on Knowledge Discovery from Data"
        },
        {
            title: "Domain Adversarial Spatial-Temporal Network: A Transferable Framework for Short-term Traffic Forecasting across Cities",
            authors: "Yihong Tang*, <strong>Ao Qu*</strong>, Andy HF Chow, William HK Lam, Sze Chun Wong, Wei Ma",
            venue: "CIKM 2022",
            award: "Oral"
        },
        {
            title: "A Data-Integration Analysis on Road Emissions and Traffic Patterns",
            authors: "<strong>Ao Qu</strong>, Yu Wang, Yue Hu, Yanbing Wang, Hiba Baroud",
            venue: "SMC 2020 Data Challenge, Oak Ridge National Lab",
            award: "Best Student Paper"
        }
    ]
};
