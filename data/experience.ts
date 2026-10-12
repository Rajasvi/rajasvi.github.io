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
    logo: "/images/mw_logo.jpg",
    logoWidth: 130,
    role: "Senior Machine Learning Engineer",
    period: "Jan 2025 – Present",
    location: "Mountain View, CA",
    bullets: [
      "Post-trained open-weight LLMs for listwise search reranking using SFT and PEFT/LoRA on multi-GPU FSDP, with a ListMLE + KL distillation objective and LLM-generated training labels over public and internal ranking datasets, lifting NDCG from 0.65 to 0.70.",
      "Shipped the fine-tuned reranker to production as the second-stage ranker, replacing a pointwise BGE cross-encoder and using compressed passage embeddings to make listwise LLM reranking feasible within the existing latency budget.",
      "Built the first LLM evaluation framework for search summarization serving over 5,000 customers, designing reference-less metrics for relevance, groundedness, citation validity, and multilingual fidelity, lifting summary relevance from 60% → 80%.",
      "Established ranking evaluation infrastructure with labeled datasets for team-wide model and feature validation, and automated training data generation, reducing turnaround 10× via parallel LLM annotation of 500K query-document pairs.",
      "Implemented a listwise LLM annotator for training and evaluation dataset creation, and designed a human-in-the-loop flow escalating ambiguous pairs to annotators to build high-confidence ranking eval sets with 60% less human labeling effort.",
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
      "Improved post-meal glucose spike prediction accuracy from 80% to 87% for over 10,000 users by running training-data ablations, correcting label noise, and engineering continuous glucose monitoring (CGM)-derived and user-behavior features.",
      "Established Latest Spike Time as a predictor of weight loss through analysis across 500K weight logs and 200M CGM readings, shipped as a user-facing feature, with the analysis contributing to research published in Diabetes Technology and Therapeutics.",
      "Increased meal-logging engagement 12% by shipping real-time glucose event detection that analyzes CGM curve shapes to prompt timely meal logging, feeding higher-quality training data into spike prediction models.",
      "Reduced training data 10% while retaining accuracy gains using cleanup and training techniques that scaled to a corpus of over 1M free-text meal logs; experimented with meal embeddings on the same corpus to enrich item representations.",
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
      "Cut alert response time from months to 1 week by building an end-to-end time-series anomaly detection tool (Z-score thresholding, Kubeflow pipelines) to flag malicious activity across over 1,000 categories and 10M gaming sessions.",
      "Developed player engagement metrics via regression analysis to track progression and infer game completion, used as a feature in a churn prediction model and to target retention marketing.",
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
      "Fine-tuned BERT, RoBERTa, and DistilBERT models on over 8M daily emails to classify document zones (salutation, signature, disclaimer) and extract contact entities via a rule-based downstream pipeline, achieving 85.7% zone classification accuracy.",
      "Built XGBoost and LGBM models to classify jurisdiction violations across over 6M daily Bloomberg trader conversations using semantic and temporal features, achieving 78% precision.",
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
