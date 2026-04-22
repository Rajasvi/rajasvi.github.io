export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Python", "SQL"],
  },
  {
    category: "ML / LLM",
    skills: [
      "Large Language Models (LLMs)",
      "NLP",
      "Information Retrieval",
      "Search & Ranking",
      "Recommendation Systems",
      "LLM Evaluation",
      "RAG Pipelines",
    ],
  },
  {
    category: "Frameworks",
    skills: ["PyTorch", "Hugging Face", "scikit-learn", "LangChain"],
  },
  {
    category: "Data / MLOps / Cloud",
    skills: ["Spark (PySpark / SparkSQL)", "Kafka", "Kubeflow", "MLflow", "Databricks", "W&B", "AWS", "GCP"],
  },
];
