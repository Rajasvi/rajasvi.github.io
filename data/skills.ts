export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "Go", "SQL"],
  },
  {
    category: "LLM Post-Training",
    skills: [
      "Supervised Fine-Tuning (SFT)",
      "PEFT / LoRA",
      "Knowledge Distillation",
      "Instruction Tuning",
      "Synthetic Data Generation",
    ],
  },
  {
    category: "LLM Evaluation",
    skills: ["LLM-as-Judge", "Reference-less Metrics", "Groundedness", "Citation Validity"],
  },
  {
    category: "ML Systems",
    skills: [
      "Information Retrieval",
      "Search & Ranking",
      "Learning to Rank",
      "Cross-encoders / Bi-encoders",
      "Recommendation Systems",
      "NLP",
      "Time-Series",
    ],
  },
  {
    category: "Frameworks",
    skills: ["PyTorch", "Hugging Face (Transformers, PEFT)", "FSDP", "scikit-learn", "XGBoost"],
  },
  {
    category: "Infra / MLOps / Cloud",
    skills: [
      "Distributed ML Training",
      "Spark (PySpark, SparkSQL)",
      "Kafka",
      "Kubeflow",
      "MLflow",
      "W&B",
      "Databricks",
      "AWS",
      "GCP",
    ],
  },
];
