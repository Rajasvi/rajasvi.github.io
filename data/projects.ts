export interface ProjectItem {
  title: string;
  image: string;
  imageWidth: number;
  tech: string;
  period: string;
  links: { label: string; url: string }[];
  description: string;
}

export const projects: ProjectItem[] = [
  {
    title: "Clickbait Spoiler Generation (SemEval'23 Shared Task)",
    image: "/images/clickbait.jpg",
    imageWidth: 180,
    tech: "PyTorch, Hugging Face",
    period: "Sep 2022 – Dec 2022",
    links: [
      { label: "code", url: "https://github.com/Rajasvi/clickbait-spoiler-generation" },
      { label: "report", url: "https://github.com/Rajasvi/clickbait-spoiler-generation/blob/master/LIGN_167__Final_Report.pdf" },
    ],
    description:
      "Created a 2-stage pipeline to generate clickbait spoilers using text classification, question answering, and ranking models. Fine-tuned DeBERTa, RoBERTa, and DistilBERT Transformers evaluated using BLEU-4, exact match, and F-1. Surpassed benchmark results achieving 36.4 BLEU-4.",
  },
  {
    title: "Sequence Tagging with Hidden Markov Model",
    image: "/images/seq_tag.png",
    imageWidth: 180,
    tech: "Python, Pandas, Plotly",
    period: "Mar 2022 – May 2022",
    links: [],
    description:
      "Developed Tri-gram HMM with Viterbi algorithm decoding and emission/transition probability estimation for sequence tagging. Extended with smoothing techniques (Laplace, Katz Back-off, Linear Interpolation) and context-aware N-gram language model with Out-of-Domain analysis.",
  },
  {
    title: "Named Entity Recognition (NER) with BiLSTM-CRF",
    image: "/images/ner.png",
    imageWidth: 180,
    tech: "PyTorch, Pandas",
    period: "Mar 2022 – May 2022",
    links: [],
    description:
      "Built custom model with BiLSTM for feature representations combined with CRF for the CoNLL-2003 NER Shared Task. Implemented forward algorithm utilizing emission & transition potentials to compute the partition function and Viterbi algorithm for decoding.",
  },
  {
    title: "Neural Collaborative Filtering for Recommendation Systems",
    image: "/images/ncf.png",
    imageWidth: 180,
    tech: "PyTorch, Pandas",
    period: "Jan 2022 – Mar 2022",
    links: [
      { label: "code", url: "https://github.com/Rajasvi/neural_collaborative_filtering_pytorch" },
      { label: "report", url: "https://github.com/Rajasvi/neural_collaborative_filtering_pytorch/blob/master/report.pdf" },
    ],
    description:
      "Implemented Neural Collaborative Filtering from the original He et al. 2017 paper in PyTorch, building GMF, MLP, and NMF models. Performed prediction and comparative evaluation on the 1M MovieLens dataset.",
  },
  {
    title: "Mini Project Series | AI: Learning Algorithms",
    image: "/images/coord.png",
    imageWidth: 180,
    tech: "PyTorch, scikit-learn",
    period: "Jan 2022 – Mar 2022",
    links: [
      { label: "code", url: "https://github.com/Rajasvi/Mini-Projects-AI-Learning-Algorithms" },
      { label: "report", url: "https://github.com/Rajasvi/Mini-Projects-AI-Learning-Algorithms/blob/master/project%202/report.pdf" },
    ],
    description:
      "Series of mini projects exploring ML algorithms: Prototype Selection with 1-NN classifier and Coordinate Descent optimization from scratch.",
  },
  {
    title: "Adverse Food Events Analysis",
    image: "/images/ece143_pic.jpg",
    imageWidth: 140,
    tech: "Pandas, Numpy, Plotly",
    period: "Sep 2021 – Dec 2021",
    links: [
      { label: "code", url: "https://github.com/Rajasvi/adverse_food_events_analysis" },
      { label: "slides", url: "/ece143.pdf" },
    ],
    description:
      "Detailed analysis of FDA Adverse Food Events data (2004–2020) to identify potential health risks. Extensive EDA on serious outcomes revealed factors like product categories and age groups responsible for adverse events.",
  },
  {
    title: "Bloomberg Trader Chat Analysis",
    image: "/images/bbg.png",
    imageWidth: 140,
    tech: "Spark-NLP, PySpark, scikit-learn",
    period: "Jan 2021 – Apr 2021",
    links: [],
    description:
      "Extracted semantic & temporal information from Goldman's trader conversations (>6M/day) to build an ML model resolving external traders' geographic location with 78% precision and determine possible jurisdiction violations.",
  },
  {
    title: "Brawlhalla Elo-Tracker Webapp",
    image: "/images/brawlLogo.png",
    imageWidth: 140,
    tech: "Node.js, React, MERN stack",
    period: "Feb 2021 – Apr 2021",
    links: [
      { label: "code", url: "https://github.com/Rajasvi/Brawlhalla-Elo-Tracker-public" },
      { label: "site", url: "https://brawlhalla-elo-tracker.netlify.app/" },
    ],
    description:
      "Webapp built on the MERN Stack using the Brawlhalla API to track player ratings. Deployed independent frontend and backend on Netlify & Heroku. Features individual and group rating tracking with interactive leaderboard view.",
  },
];
