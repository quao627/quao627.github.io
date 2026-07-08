// Publications and Research Data
const PUBLICATIONS_DATA = {
    selectedWorks: [
        {
            id: 'coral',
            title: "CORAL: Towards Autonomous Multi-Agent Evolution for Open-Ended Discovery",
            authors: "<strong>Ao Qu*</strong>, Han Zheng*, Zijian Zhou*, Yihao Yan, Yihong Tang, Shao Yong Ong, Fenglu Hong, Kaichen Zhou, Chonghe Jiang, Minwei Kong, Jiacheng Zhu, Xuan Jiang, Sirui Li, Cathy Wu, Bryan Kian Hsiang Low, Jinhua Zhao, Paul Pu Liang",
            venue: "arXiv 2026",
            icon: "fa-network-wired",
            links: {
                paper: "https://arxiv.org/abs/2604.01658",
                code: "https://github.com/Human-Agent-Society/CORAL"
            }
        },
        {
            id: 'mem1',
            title: "MEM1: Learning to Synergize Memory and Reasoning for Efficient Long-Horizon Agents",
            authors: "Zijian Zhou*, <strong>Ao Qu*</strong>, Zhaoxuan Wu, Sunghwan Kim, Alok Prakash, Daniela Rus, Jinhua Zhao, Bryan Kian Hsiang Low, Paul Pu Liang",
            venue: "<span class=\"award\">ICLR 2026</span> | NeurIPS MTI-LLM Workshop 2025 <span class=\"award\">(Best Paper)</span> | COLM RAM2 Workshop 2025 <span class=\"award\">(Oral)</span>",
            icon: "fa-brain",
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
            id: 'eom',
            title: "Economy of Minds: Emerging Multi-Agent Intelligence with Economic Interactions",
            authors: "Zhenting Qi, Huangyuan Su, <strong>Ao Qu</strong>, Chenyu Wang, Yu Yao, Han Zheng, Kushal Chattopadhyay, Guowei Xu, Zihan Wang, Weirui Ye, Vijay Janapa Reddi, Ju Li, Paul Pu Liang, Himabindu Lakkaraju, Sham Kakade, Yilun Du",
            venue: "arXiv 2026",
            icon: "fa-coins",
            links: {
                paper: "https://arxiv.org/abs/2606.02859"
            }
        },
        {
            id: 'frontieror',
            title: "FrontierOR: Benchmarking LLMs' Capacity for Efficient Algorithm Design in Large-Scale Optimization",
            authors: "Minwei Kong, Chonghe Jiang, <strong>Ao Qu</strong>, Wenbin Ouyang, Zhaoming Zeng, Xiaotong Guo, Zhekai Li, Junyi Li, Yi Fan, Xinshou Zheng, Xi Jing, Yikai Zhang, Zhiwei Liang, Seonghoo Kim, Runqing Yang, Zijian Zhou, Sirui Li, Han Zheng, Wangyang Ying, Ou Zheng, Chonghuan Wang, Jinglong Zhao, Hanzhang Qin, Cathy Wu, Paul Pu Liang, Jinhua Zhao, Hai Wang",
            venue: "arXiv 2026",
            icon: "fa-chart-line",
            links: {
                paper: "https://arxiv.org/abs/2605.25246"
            }
        },
        {
            id: 'suite',
            title: "SUITE: Scaling Up Individualized Theory-of-Mind Evaluation in Large Language Models",
            authors: "Zhenze Mo, Chance Jiajie Li, <strong>Ao Qu</strong>, Yuhan Tang, Luis Alberto Alonso Pastor, Kent Larson, Jinhua Zhao",
            venue: "ToM4AI Workshop @ AAAI 2026",
            icon: "fa-user-friends",
            links: {
                paper: "https://arxiv.org/abs/2603.18786"
            }
        },
        {
            id: 'omnisapiens',
            title: "OmniSapiens: A Foundation Model for Social Behavior Processing via Heterogeneity-Aware Relative Policy Optimization",
            authors: "Keane Ong, Sabri Boughorbel, Luwei Xiao, Chanakya Ekbote, Wei Dai, <strong>Ao Qu</strong>, Jingyao Wu, Rui Mao, Ehsan Hoque, Erik Cambria, Gianmarco Mengaldo, Paul Pu Liang",
            venue: "ICML 2026",
            icon: "fa-heartbeat",
            links: {
                paper: "https://arxiv.org/abs/2602.10635",
                code: "https://github.com/MIT-MI/human_behavior_atlas"
            }
        },
        {
            id: 'e3ad',
            title: "E3AD: An Emotion-Aware Vision-Language-Action Model for Human-Centric End-to-End Autonomous Driving",
            authors: "Yihong Tang, Haicheng Liao, Tong Nie, Junlin He, <strong>Ao Qu</strong>, Kehua Chen, Wei Ma, Zhenning Li, Lijun Sun, Chengzhong Xu",
            venue: "CVPR 2026",
            icon: "fa-car",
            links: {
                paper: "https://arxiv.org/abs/2512.04733"
            }
        },
        {
            id: 'alphaopt',
            title: "AlphaOPT: Formulating Optimization Programs with Self-Improving LLM Experience Library",
            authors: "Minwei Kong*, <strong>Ao Qu*(corresponding author)</strong>, Xiaotong Guo, Wenbin Ouyang, Chonghe Jiang, Han Zheng, Yining Ma, Dingyi Zhuang, Yuhan Tang, Junyi Li, Hai Wang, Cathy Wu, Jinhua Zhao",
            venue: "<span class=\"award\">KDD 2026</span> | INFORMS Data Mining Society 2025 <span class=\"award\">(Best Paper Finalist)</span>",
            icon: "fa-route",
            image: "paper-teasers/alphaopt.png",
            links: {
                paper: "https://arxiv.org/abs/2510.18428",
                code: "https://github.com/Minw913/AlphaOPT",
                demo: "#",
            }
        },
        {
            id: 'classmind',
            title: "ClassMind: Scaling Classroom Observation and Instructional Feedback with Multimodal AI",
            authors: "<strong>Ao Qu*</strong>, Yuxi Wen*, Jiayi Zhang*, Yunge Wen, Yibo Zhao, Alok Prakash, Andrés F. Salazar-Gómez, Paul Pu Liang, Jinhua Zhao",
            venue: "arXiv 2025",
            icon: "fa-chalkboard-teacher",
            image: "paper-teasers/classmind.png",
            links: {
                paper: "https://arxiv.org/abs/2509.18020",
                code: "#",
                demo: "#",
                video: "https://drive.google.com/file/d/1hdLLfHoMHoIPdCyx-PYnfPOIKyoVHz3Q/view?usp=sharing"
            }
        },
        {
            id: 'sparkle',
            title: "Sparkle: Mastering Basic Spatial Capabilities in Vision Language Models Elicits Generalization to Spatial Reasoning",
            authors: "Yihong Tang*, <strong>Ao Qu*(corresponding author)</strong>, Zhaokai Wang*, Dingyi Zhuang*, Zhaofeng Wu, Wei Ma, Shenhao Wang, Yunhan Zheng, Zhan Zhao, Jinhua Zhao",
            venue: "EMNLP 2025 (Findings) | IJCAI MKLM 2025 <span class=\"award\">(Best Paper Award)</span>",
            icon: "fa-cube",
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
            icon: "fa-city",
            image: "paper-teasers/urbanci.png",
            links: {
                paper: "https://arxiv.org/abs/2504.12345",
                code: "https://github.com/quao627/Urban-CI-LitReview"
            }
        },
        {
            id: 'itinera',
            title: "ITINERA: Integrating Spatial Optimization with Large Language Models for Open-domain Urban Itinerary Planning",
            authors: "Yihong Tang*, Zhaokai Wang*, <strong>Ao Qu*(project lead)</strong>, Yihao Yan*, Zhaofeng Wu, Dingyi Zhuang, Jushi Kai, Kebing Hou, Xiaotong Guo, Han Zheng, Tiange Luo, Jinhua Zhao, Zhan Zhao, Wei Ma",
            venue: "EMNLP 2024 Industry Track | KDD UrbComp Workshop 2024 <span class=\"award\">(Best Paper Award)</span>",
            icon: "fa-map-marked-alt",
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
        "Vindula Jayawardana, Baptiste Freydt, <strong>Ao Qu</strong>, Cameron Hickert, Edgar Sanchez, Catherine Tang, Mark Taylor, Blaine Leonard, Cathy Wu. <em>Mitigating Metropolitan Carbon Emissions with Dynamic Eco-driving at Scale</em> Transportation Research Part C: Emerging Technologies, 2025. Media reports: <a href=\"https://www.newscientist.com/article/2445202-a-simple-driving-trick-could-make-a-big-dent-in-cars-carbon-emissions/\" target=\"_blank\">NewScientist</a>; <a href=\"https://news.mit.edu/2025/eco-driving-measures-could-significantly-reduce-vehicle-emissions-0807\" target=\"_blank\">MIT News</a> (<span class=\"award\">Daily News Spotlight</span>).",

        "Vindula Jayawardana, Baptiste Freydt, <strong>Ao Qu</strong>, Cameron Hickert, Zhongxia Yan, Cathy Wu. <em>IntersectionZoo: Eco-driving for Benchmarking Multi-Agent Contextual Reinforcement Learning.</em> International Conference on Learning Representations (ICLR) 2025. Media reports: <a href=\"https://news.mit.edu/2025/new-tool-evaluate-progress-reinforcement-learning-0505\" target=\"_blank\">MIT News</a>.",

        "<strong>Ao Qu</strong>, Yihong Tang, Wei Ma. <em>Attacking Deep Reinforcement Learning-Based Traffic Signal Control Systems with Colluding Vehicles.</em> ACM Transactions on Intelligent Systems and Technology.",

        "<strong>Ao Qu*</strong>, Jason Xuhuan Huang*, Dajiang Suo. <em>SEIP: Simulation-based Design and Evaluation of Infrastructure-supported Collective Perception.</em> 2023 IEEE 26th International Conference on Intelligent Transportation Systems (ITSC).",

        "Yue Hu, <strong>Ao Qu</strong>, Dan Work. <em>Detecting extreme traffic events via a context augmented graph autoencoder.</em> ACM Transactions on Intelligent Systems and Technology.",

        "Yue Hu, <strong>Ao Qu</strong>, Yanbing Wang, Dan Work. <em>Streaming data preprocessing via online tensor recovery for large environmental sensor networks.</em> ACM Transactions on Knowledge Discovery from Data.",

        "Yihong Tang*, <strong>Ao Qu*</strong>, Andy HF Chow, William HK Lam, Sze Chun Wong, Wei Ma. <em>Domain Adversarial Spatial-Temporal Network: A Transferable Framework for Short-term Traffic Forecasting across cities.</em> Proceedings of the 31st ACM International Conference on Information & Knowledge Management (CIKM) 2022 <span class=\"award\">(Oral)</span>.",

        "<strong>Ao Qu</strong>, Yu Wang, Yue Hu, Yanbing Wang, and Hiba Baroud. <em>A data-integration analysis on road emissions and traffic patterns.</em> SMC 2020 Data Competition at Oak Ridge National Lab <span class=\"award\">(Best Student Paper)</span>.",
    ]
};

