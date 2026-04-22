export interface ExperienceItem {
  company: string;
  companyUrl: string;
  logo: string | null;
  logoWidth: number;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Moveworks (acquired by ServiceNow)",
    companyUrl: "https://www.moveworks.com",
    logo: null,
    logoWidth: 130,
    role: "Senior Machine Learning Engineer",
    period: "Jan 2025 – Present",
    location: "Mountain View, CA",
    bullets: [
      "Implemented an LLM-based relevance annotator for a search ranking task with batched listwise labeling, yielding a 10× speedup and enabling rapid creation of large training datasets with minimal human effort.",
      "Reduced human labeling effort by ~60% by building a hybrid annotation workflow that uses LLM pre-annotation and escalates only ambiguous cases to human annotators for high-confidence eval sets.",
      "Built a summary-quality evaluation pipeline for search-result summaries using LLM-as-judge and reference-less metrics (summary relevance, groundedness, citation validity), improving summary relevance from 60% → 90%.",
      "Shipped a user-facing keyword-highlighting feature for search results by extracting document entities and query tokens to surface relevant terms in the UI.",
      "Created a synthetic query generation pipeline to augment feature-specific queries (e.g., temporal, author) and add training signal for search ranking models.",
    ],
  },
  {
    company: "Signos",
    companyUrl: "https://www.signos.com",
    logo: "/images/signos.jpeg",
    logoWidth: 130,
    role: "Machine Learning Engineer",
    period: "Apr 2023 – Dec 2024",
    location: "Remote, CA",
    bullets: [
      "Designed deep learning model for post-meal glucose spike prediction, dual-purposed for exercise recommendations to effectively minimize post-meal glucose spikes by suggesting exercises to >10,000 users & help them lose weight.",
      "Built Retrieval Augmented Generation (RAG) pipelines using LangChain for feature extraction from >1M free text meal logs to improve post-meal glucose spike prediction model accuracy.",
      "Achieved a 12% boost in user meal logging engagement by creating a real-time anomaly detection algorithm for identifying point of interest events & rapid glucose level spikes.",
      "Developed a meal recommendation engine using a hybrid collaborative & content filtering model based on features from multiple signals like continuous glucose data, meal/exercise/sleep logs, to help >10K users make healthy food choices.",
    ],
  },
  {
    company: "Nvidia",
    companyUrl: "https://www.nvidia.com",
    logo: "/images/nvidia.png",
    logoWidth: 130,
    role: "Data Scientist Intern",
    period: "Jun 2022 – Sep 2022",
    location: "Santa Clara, CA",
    bullets: [
      "Developed and deployed an end-to-end Time-series Anomaly Detection tool using Z-Score thresholding and Kubeflow pipelines to alert about malicious activities in 1000+ categories across 10M+ gaming sessions, reducing the alert response time from a few months to just 1 week.",
      "Improved in-place A/B test analysis by creating a tool to identify the most affected sub-population using causal inference ML models like S-Learner, T-Learner, and Double ML methods (CausalML).",
      "Built user engagement metrics using regression analysis & game completion modelling to identify & target disengaged down-grading users.",
    ],
  },
  {
    company: "Goldman Sachs",
    companyUrl: "https://www.gs.com",
    logo: "/images/GS_logo.png",
    logoWidth: 130,
    role: "Data Scientist, Analyst",
    period: "Jun 2018 – Aug 2021",
    location: "Bengaluru, IN",
    bullets: [
      "Fine-tuned BERT, RoBERTa, and DistilBERT Transformer models using Hugging Face to extract named contact-related entities from over 8 million emails per day, achieving an impressive 85.7% accuracy rate.",
      "Built XGBoost & LGBM based models for classifying jurisdiction violations among Bloomberg trader conversations (>6M daily) by leveraging semantic & temporal information extracted from the data as features, achieving 78% precision.",
      "Contributed to a real-time Big Data pipeline processing internal e-communications (emails, Skype IMs) for an in-house natural language surveillance search engine.",
    ],
  },
  {
    company: "Samsung R&D Institute – Noida",
    companyUrl: "https://research.samsung.com/sri-n",
    logo: "/images/samsungLogo.png",
    logoWidth: 130,
    role: "Summer ML Intern",
    period: "May 2017 – Jul 2017",
    location: "Noida, IN",
    bullets: [
      "Worked in Bixby AI Team building and optimizing CNN architectures using TensorFlow for creating portable models integrated with the Android ecosystem to classify images offline (CIFAR-10 dataset).",
      "Custom-built model achieved 82% accuracy occupying only 7 KB on device with offline prediction capability.",
    ],
  },
  {
    company: "Indian Institute of Space Science & Technology (IIST)",
    companyUrl: "https://www.iist.ac.in",
    logo: "/images/iistLogo.jfif",
    logoWidth: 120,
    role: "Summer Research Intern",
    period: "May 2016 – Jul 2016",
    location: "Thiruvananthapuram, IN",
    bullets: [
      "Worked at the High Performance Computing Lab under Dr. Sumitra S. studying ML theory & implementing ensemble algorithms such as Random Forest and AdaBoost from scratch.",
      "Performed comparative performance analysis verifying findings from Fernandez-Delgado et al. (JMLR 2014).",
    ],
  },
];
