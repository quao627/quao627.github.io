// Publications and Research Data
const PUBLICATIONS_DATA = {
    selectedWorks: [
        {
            id: 'mem1',
            title: "MEM1: Learning to Synergize Memory and Reasoning for Efficient Long-Horizon Agents",
            authors: "Zijian Zhou*, <strong>Ao Qu*</strong>, Zhaoxuan Wu, Sunghwan Kim, Alok Prakash, Daniela Rus, Jinhua Zhao, Bryan Kian Hsiang Low, Paul Pu Liang",
            venue: "COLM RAM2 Workshop 2025 <span class=\"award\">(Oral)</span> | NeurIPS MTI-LLM Workshop 2025 <span class=\"award\">(Oral, top 2 / 230)</span>",
            icon: "fa-brain",
            image: "paper-teasers/mem1.png",
            links: {
                paper: "https://arxiv.org/abs/2506.15841",
                code: "https://github.com/MIT-MI/MEM1",
                project: "https://mit-mi.github.io/mem1-site/",
                video: "https://drive.google.com/file/d/1jiVTdCokBwkHOJPnI4xKNLeWaXixvAow/view?usp=sharing"
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
            id: 'alphaopt',
            title: "AlphaOPT: Formulating Optimization Programs with Self-Improving LLM Experience Library",
            authors: "Minwei Kong*, <strong>Ao Qu*(corresponding author)</strong>, Xiaotong Guo, Wenbin Ouyang, Chonghe Jiang, Han Zheng, Yining Ma, Dingyi Zhuang, Yuhan Tang, Junyi Li, Hai Wang, Cathy Wu, Jinhua Zhao",
            venue: "INFORMS Data Mining Society 2025 <span class=\"award\">(Best Paper Finalist)</span>",
            icon: "fa-route",
            image: "paper-teasers/alphaopt.png",
            links: {
                paper: "#",
                code: "#",
                demo: "#",
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
            id: 'itinera',
            title: "ITINERA: Integrating Spatial Optimization with Large Language Models for Open-domain Urban Itinerary Planning",
            authors: "Yihong Tang*, Zhaokai Wang*, <strong>Ao Qu*(project lead)</strong>, Yihao Yan*, Zhaofeng Wu, Dingyi Zhuang, Jushi Kai, Kebing Hou, Xiaotong Guo, Han Zheng, Tiange Luo, Jinhua Zhao, Zhan Zhao, Wei Ma",
            venue: "EMNLP 2024 Industry Track | KDD UrbComp Workshop 2024 <span class=\"award\">(Best Paper Award)</span>",
            icon: "fa-map-marked-alt",
            image: "paper-teasers/itinera.png",
            links: {
                paper: "https://aclanthology.org/2024.emnlp-industry.104/",
                code: "https://github.com/YihongT/ITINERA"
            }
        },
        {
            id: 'urbanci',
            title: "Toward Scalable and Inclusive Urban Causal Inference with Large Language Models",
            authors: "Yutong Xia*, <strong>Ao Qu*</strong>, Yunhan Zheng, Yihong Tang, Dingyi Zhuang, Yuxuan Liang, Shenhao Wang, Cathy Wu, Lijun Sun, Roger Zimmermann, Jinhua Zhao",
            venue: "arXiv 2025",
            icon: "fa-city",
            image: "paper-teasers/urbanci.png",
            links: {
                paper: "https://arxiv.org/abs/2504.12345",
                code: "https://github.com/quao627/Urban-CI-LitReview"
            }
        }
    ],
    
    earlyStage: [
        "Vindula Jayawardana, Baptiste Freydt, <strong>Ao Qu</strong>, Cameron Hickert, Edgar Sanchez, Catherine Tang, Mark Taylor, Blaine Leonard, Cathy Wu. <em>Mitigating Metropolitan Carbon Emissions with Dynamic Eco-driving at Scale</em> [TR-C 2025] Transportation Research Part C: Emerging Technologies, 2025. Media reports: <a href=\"https://www.newscientist.com/article/2445202-a-simple-driving-trick-could-make-a-big-dent-in-cars-carbon-emissions/\" target=\"_blank\">NewScientist</a>; <a href=\"https://news.mit.edu/2025/eco-driving-measures-could-significantly-reduce-vehicle-emissions-0807\" target=\"_blank\">MIT News</a> (<span class=\"award\">Daily News Spotlight</span>).",

        "Vindula Jayawardana, Baptiste Freydt, <strong>Ao Qu</strong>, Cameron Hickert, Zhongxia Yan, Cathy Wu. <em>IntersectionZoo: Eco-driving for Benchmarking Multi-Agent Contextual Reinforcement Learning.</em> International Conference on Learning Representations (ICLR) 2025.",
        
        "<strong>Ao Qu</strong>, Yihong Tang, Wei Ma. <em>Attacking Deep Reinforcement Learning-Based Traffic Signal Control Systems with Colluding Vehicles.</em> ACM Transactions on Intelligent Systems and Technology.",
        
        "<strong>Ao Qu</strong>, Jason Xuhuan Huang, Dajiang Suo. <em>SEIP: Simulation-based Design and Evaluation of Infrastructure-supported Collective Perception.</em> 2023 IEEE 26th International Conference on Intelligent Transportation Systems (ITSC).",
        
        "Yue Hu, <strong>Ao Qu</strong>, Dan Work. <em>Detecting extreme traffic events via a context augmented graph autoencoder.</em> ACM Transactions on Intelligent Systems and Technology.",
        
        "Yue Hu, <strong>Ao Qu</strong>, Yanbing Wang, Dan Work. <em>Streaming data preprocessing via online tensor recovery for large environmental sensor networks.</em> ACM Transactions on Knowledge Discovery from Data.",
        
        "Yihong Tang*, <strong>Ao Qu*</strong>, Andy HF Chow, William HK Lam, Sze Chun Wong, Wei Ma. <em>Domain Adversarial Spatial-Temporal Network: A Transferable Framework for Short-term Traffic Forecasting across cities.</em> Proceedings of the 31st ACM International Conference on Information & Knowledge Management (CIKM) 2022 <span class=\"award\">(Oral)</span>.",
        
        "<strong>Ao Qu</strong>, Yu Wang, Yue Hu, Yanbing Wang, and Hiba Baroud. <em>A data-integration analysis on road emissions and traffic patterns.</em> 17th Smoky Mountains Computational Sciences and Engineering Conference, SMC 2020, Oak Ridge National Lab <span class=\"award\">(Best Student Paper)</span>.",
    ]
};

