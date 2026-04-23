"use client";

import { useState, useEffect, useRef } from "react";

const THEMES = [
  { name: "Linen",  sidebar: "#1a1710", body: "#f0ece3", bodyDark: "#e6e0d4", muted: "#9a9488", text: "#3a3730", accent: "#c9b882", sideText: "#ccc", sideMuted: "#666" },
  { name: "Slate",  sidebar: "#0f172a", body: "#f8fafc", bodyDark: "#e2e8f0", muted: "#64748b", text: "#1e293b", accent: "#60a5fa", sideText: "#cbd5e1", sideMuted: "#475569" },
  { name: "Forest", sidebar: "#162419", body: "#f5f0e8", bodyDark: "#ede5d8", muted: "#5a7260", text: "#2d3b2d", accent: "#86b87a", sideText: "#c8d8c0", sideMuted: "#4a6050" },
  { name: "Amber",  sidebar: "#1c1208", body: "#fdf8f0", bodyDark: "#f0e8d8", muted: "#8a7a5a", text: "#3a2e1a", accent: "#d4a853", sideText: "#e8d8b0", sideMuted: "#5a4a28" },
];

const DATA = {
  name: "Rajasvi Vinayak Sharma",
  title: "Senior ML Engineer",
  location: "Mountain View, CA · Open to Opportunities",
  bio: "Working at the intersection of GenAI and information retrieval, I specialize in LLM fine-tuning, RAG, relevance ranking, search summarization, and LLM-driven evaluation, bridging user intent and search outcomes at enterprise scale. Currently at Moveworks (acq. by ServiceNow), previously Signos, Nvidia, and Goldman Sachs.",
  links: [
    { label: "Email", href: "mailto:rajasvi777@gmail.com" },
    { label: "Resume", href: "/Rajasvi_MW_20260228.pdf" },
    { label: "GitHub", href: "https://github.com/Rajasvi" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rajasvi" },
  ],
  nav: ["Experience", "Projects", "Skills", "Education"],
  experience: [
    {
      company: "Moveworks",
      companyFull: "Moveworks (acq. by ServiceNow)",
      role: "Senior ML Engineer – Enterprise Search Relevance",
      period: "Jan 2025 – Present",
      location: "Mountain View, CA",
      tags: ["LLM Annotation", "Search Ranking", "LLM-as-Judge", "GenAI"],
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
      companyFull: "Signos",
      role: "Machine Learning Engineer",
      period: "Apr 2023 – Dec 2024",
      location: "Remote, CA",
      tags: ["RAG", "Deep Learning", "Anomaly Detection", "Recommendation"],
      bullets: [
        "Designed deep learning model for post-meal glucose spike prediction, dual-purposed for exercise recommendations to effectively minimize post-meal glucose spikes by suggesting exercises to >10,000 users.",
        "Built Retrieval Augmented Generation (RAG) pipelines using LangChain for feature extraction from >1M free-text meal logs to improve post-meal glucose spike prediction model accuracy.",
        "Achieved a 12% boost in user meal logging engagement by creating a real-time anomaly detection algorithm for identifying point of interest events & rapid glucose level spikes.",
        "Developed a meal recommendation engine using a hybrid collaborative & content-filtering model based on features from multiple signals like continuous glucose data, meal/exercise/sleep logs, to help >10K users make healthy food choices.",
      ],
    },
    {
      company: "Nvidia",
      companyFull: "Nvidia",
      role: "Data Scientist Intern",
      period: "Jun 2022 – Sep 2022",
      location: "Santa Clara, CA",
      tags: ["Time-series", "Kubeflow", "Causal ML"],
      bullets: [
        "Developed and deployed an end-to-end Time-series Anomaly Detection tool using Z-Score thresholding and Kubeflow pipelines to alert about malicious activities in 1000+ categories across 10M+ gaming sessions, reducing alert response time from months to 1 week.",
        "Improved in-place A/B test analysis by creating a tool to identify the most affected sub-population using causal inference ML models like S-Learner, T-Learner, and Double ML methods (CausalML).",
        "Built user engagement metrics using regression analysis & game completion modelling to identify & target disengaged users.",
      ],
    },
    {
      company: "Goldman Sachs",
      companyFull: "Goldman Sachs",
      role: "Data Scientist, Analyst",
      period: "Jun 2018 – Aug 2021",
      location: "Bengaluru, India",
      tags: ["BERT", "NLP", "Big Data Engineering", "PySpark"],
      bullets: [
        "Fine-tuned BERT, RoBERTa, and DistilBERT Transformer models using Hugging Face to extract named contact-related entities from over 8 million emails per day, achieving 85.7% accuracy.",
        "Built XGBoost & LGBM based models for classifying jurisdiction violations among Bloomberg trader conversations (>6M daily) by leveraging semantic & temporal information extracted from the data as features, achieving 78% precision.",
        "Contributed to a real-time Big Data pipeline processing internal e-communications (emails, Skype IMs) for an in-house natural language surveillance search engine.",
      ],
    },
    {
      company: "Samsung R&D",
      companyFull: "Samsung R&D Institute, Noida",
      role: "Summer ML Intern",
      period: "May 2017 – Jul 2017",
      location: "Noida, India",
      tags: ["CNN", "TensorFlow", "On-device ML"],
      bullets: [
        "Worked in Bixby AI Team building and optimizing CNN architectures using TensorFlow for creating portable models integrated with the Android ecosystem to classify images offline (CIFAR-10 dataset).",
        "Custom-built model achieved 82% accuracy occupying only 7 KB on device with offline prediction capability.",
      ],
    },
    {
      company: "IIST",
      companyFull: "Indian Institute of Space Science & Technology",
      role: "Summer Research Intern",
      period: "May 2016 – Jul 2016",
      location: "Thiruvananthapuram, India",
      tags: ["Machine Learning", "HPC", "Ensemble Methods"],
      bullets: [
        "Worked at the High Performance Computing Lab under Dr. Sumitra S. studying ML theory & implementing ensemble algorithms such as Random Forest and AdaBoost from scratch.",
        "Performed comparative performance analysis verifying findings from Fernandez-Delgado et al. (JMLR 2014).",
      ],
    },
  ],
  projects: [
    {
      name: "Clickbait Spoiler Generation",
      context: "SemEval'23 Shared Task",
      period: "Sep – Dec 2022",
      stack: "PyTorch · Hugging Face",
      desc: "2-stage pipeline using text classification, QA, and ranking models. Fine-tuned DeBERTa, RoBERTa, DistilBERT — achieved 36.4 BLEU-4, surpassing benchmark.",
      links: [
        { label: "Code", href: "https://github.com/Rajasvi/clickbait-spoiler-generation" },
        { label: "Report", href: "/ece143.pdf" },
      ],
    },
    {
      name: "Neural Collaborative Filtering",
      context: "Recommendation Systems",
      period: "Jan – Mar 2022",
      stack: "PyTorch · Pandas",
      desc: "Implemented NCF from He et al. 2017 — GMF, MLP, and NMF models evaluated on 1M MovieLens dataset with comparative analysis.",
      links: [{ label: "Code", href: "https://github.com/Rajasvi/neural_collaborative_filtering_pytorch" }],
    },
    {
      name: "NER with BiLSTM-CRF",
      context: "CoNLL-2003 Shared Task",
      period: "Mar – May 2022",
      stack: "PyTorch · Pandas",
      desc: "Custom BiLSTM-CRF for NER with forward algorithm for partition function and Viterbi decoding for inference.",
      links: [],
    },
    {
      name: "Sequence Tagging with HMM",
      context: "Statistical NLP",
      period: "Mar – May 2022",
      stack: "Python · Plotly",
      desc: "Tri-gram HMM with Viterbi decoding and smoothing (Laplace, Katz Back-off, Linear Interpolation). Context-aware N-gram LM with OOD analysis.",
      links: [],
    },
    {
      name: "Adverse Food Events Analysis",
      context: "FDA Data · EDA",
      period: "Sep – Dec 2021",
      stack: "Pandas · Plotly",
      desc: "EDA of FDA Adverse Food Events data (2004–2020). Identified serious outcome patterns across product categories and age groups.",
      links: [{ label: "Code", href: "https://github.com/Rajasvi/adverse_food_events_analysis" }],
    },
    {
      name: "Brawlhalla Elo Tracker",
      context: "Full-stack Web App",
      period: "Feb – Apr 2021",
      stack: "React · Node.js · MERN",
      desc: "Full-stack MERN app using Brawlhalla API to track player ratings with interactive leaderboard. Deployed on Netlify & Heroku.",
      links: [
        { label: "Code", href: "https://github.com/Rajasvi/Brawlhalla-Elo-Tracker-public" },
        { label: "Live", href: "https://brawlhalla-elo-tracker.netlify.app/" },
      ],
    },
  ],
  skills: {
    "GenAI & LLMs": ["Large Language Models", "LLM Fine-tuning", "LLM-as-Judge", "Prompt Engineering", "RAG Pipelines", "LLM Evaluation", "Synthetic Data Generation"],
    "ML & Search": ["Information Retrieval", "Search & Ranking", "Learning to Rank", "Recommendation Systems", "Anomaly Detection", "Deep Learning"],
    "NLP": ["Named Entity Recognition", "Text Classification", "Transformers", "Hugging Face", "BERT / RoBERTa", "Seq2Seq"],
    "Frameworks": ["PyTorch", "scikit-learn", "LangChain", "Kubeflow", "MLflow", "W&B", "Databricks"],
    "Data & Cloud": ["PySpark", "SparkSQL", "Kafka", "AWS", "GCP", "SQL"],
    "Languages": ["Python", "SQL"],
  },
  education: [
    {
      school: "UC San Diego",
      degree: "MS · Electrical & Computer Engineering",
      major: "Major: Machine Learning & Data Science",
      period: "Sep 2021 – Mar 2023",
      gpa: "3.91 / 4.0",
    },
    {
      school: "IIT (BHU) Varanasi",
      degree: "B.Tech · Electronics Engineering",
      major: "",
      period: "Jul 2014 – May 2018",
      gpa: "8.81 / 10",
    },
  ],
};

function Stamp({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      display: "inline-block", border: "1px solid var(--body-dark)",
      padding: "2px 8px", fontSize: 9, letterSpacing: 1.5,
      textTransform: "uppercase", color: "var(--muted)",
      fontFamily: "var(--font-dm-sans), sans-serif", marginRight: 5, marginBottom: 4,
    }}>{children}</span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
      <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: 9, letterSpacing: 4, color: "var(--muted)", textTransform: "uppercase", whiteSpace: "nowrap" }}>{children}</span>
      <div style={{ flex: 1, height: 1, background: "var(--body-dark)" }} />
    </div>
  );
}

export default function App() {
  const [openExp, setOpenExp] = useState(0);
  const [activeSection, setActiveSection] = useState("Experience");
  const [themeIdx, setThemeIdx] = useState(0);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const T = THEMES[themeIdx];

  const scrollTo = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(e => { if (e.isIntersecting) setActiveSection((e.target as HTMLElement).dataset.section ?? ""); }); },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    Object.values(sectionRefs.current).forEach(el => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{
      "--accent": T.accent, "--sidebar": T.sidebar, "--body": T.body,
      "--body-dark": T.bodyDark, "--muted": T.muted, "--text": T.text,
      fontFamily: "var(--font-dm-sans), sans-serif", background: "var(--body)",
    } as React.CSSProperties}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--body); }
        ::-webkit-scrollbar-thumb { background: var(--body-dark); }
        .li-ext-link { color: var(--muted); text-decoration: none; font-size: 11px; border-bottom: 1px solid transparent; transition: color 0.15s, border-color 0.15s; }
        .li-ext-link:hover { color: var(--text); border-color: var(--text); }
        .exp-row { cursor: pointer; padding: 22px 0; border-bottom: 1px solid var(--body-dark); }
        .exp-row:first-child { padding-top: 0; }
        .proj-card { padding: 22px; border: 1px solid var(--body-dark); background: rgba(255,255,255,0.45); transition: border-color 0.2s, transform 0.18s; }
        .proj-card:hover { border-color: var(--accent); transform: translateY(-2px); }
        .nav-btn { background: none; border: none; cursor: pointer; display: block; width: 100%; text-align: left; padding: 8px 0; font-family: var(--font-dm-sans), sans-serif; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; transition: color 0.15s; }
        .sidebar-link { display: flex; align-items: center; gap: 8px; text-decoration: none; font-size: 12px; padding: 7px 0; border-bottom: 1px solid rgba(255,255,255,0.06); transition: color 0.2s; }
        .bullet-enter { animation: fadeDown 0.25s ease; }
        @keyframes fadeDown { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
        .theme-dot { width: 14px; height: 14px; border-radius: 50%; cursor: pointer; padding: 0; transition: transform 0.15s; }
        .theme-dot:hover { transform: scale(1.2); }
        /* Layout */
        .l-root { display: flex; min-height: 100vh; }
        .l-sidebar { display: flex; }
        .l-mobile-header { display: none; }
        .l-main { flex: 1; padding: 64px 64px 96px 72px; max-width: 820px; }
        .l-proj-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .l-skill-row { display: grid; grid-template-columns: 140px 1fr; gap: 20px; align-items: start; padding: 18px 0; border-bottom: 1px solid var(--body-dark); }
        @media (max-width: 768px) {
          .l-root { flex-direction: column; }
          .l-sidebar { display: none; }
          .l-mobile-header { display: block; padding: 28px 20px 24px; background: var(--sidebar); }
          .l-main { padding: 28px 20px 64px; max-width: 100%; }
          .l-proj-grid { grid-template-columns: 1fr; }
          .l-skill-row { grid-template-columns: 1fr; gap: 8px; }
        }
        .theme-dot { width: 14px; height: 14px; border-radius: 50%; cursor: pointer; padding: 0; transition: transform 0.15s; }
        .theme-dot:hover { transform: scale(1.2); }
      `}</style>

      {/* Mobile header — hidden on desktop */}
      <div className="l-mobile-header" style={{ color: T.sideText }}>
        <div style={{ display: "inline-block", border: `1px solid ${T.accent}`, color: T.accent, fontSize: 8, letterSpacing: 2, padding: "2px 8px", textTransform: "uppercase", marginBottom: 14 }}>
          Senior ML Engineer
        </div>
        <h1 style={{ fontFamily: "var(--font-fraunces), serif", fontSize: 26, fontWeight: 700, lineHeight: 1.2, marginBottom: 6 }}>
          Rajasvi Vinayak Sharma
        </h1>
        <p style={{ fontSize: 12, color: T.sideMuted, marginBottom: 18, lineHeight: 1.6 }}>{DATA.location}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 16 }}>
          {DATA.links.map(l => (
            <a key={l.label} href={l.href} style={{ color: T.accent, textDecoration: "none", fontSize: 13, fontWeight: 500 }}
              target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer">
              {l.label}
            </a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {THEMES.map((t, i) => (
            <button key={t.name} title={t.name} className="theme-dot" onClick={() => setThemeIdx(i)}
              style={{ background: t.body, border: `2px solid ${themeIdx === i ? t.accent : t.sideMuted}` }} />
          ))}
        </div>
      </div>

      <div className="l-root">
      {/* Sidebar */}
      <aside className="l-sidebar" style={{
        width: 260, flexShrink: 0, background: T.sidebar, color: T.sideText,
        position: "sticky", top: 0, height: "100vh",
        flexDirection: "column", justifyContent: "space-between",
        padding: "48px 32px", overflowY: "auto",
      }}>
        <div>
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "inline-block", border: `1px solid ${T.accent}`, color: T.accent, fontSize: 8, letterSpacing: 2, padding: "2px 8px", textTransform: "uppercase", marginBottom: 20 }}>
              Senior ML Engineer
            </div>
            <h1 style={{ fontFamily: "var(--font-fraunces), serif", fontSize: 28, fontWeight: 700, lineHeight: 1.15, marginBottom: 6 }}>
              Rajasvi<br /><em style={{ fontWeight: 300, fontSize: 24 }}>Vinayak</em><br />Sharma
            </h1>
            <p style={{ fontSize: 12, fontWeight: 500, color: T.sideText, marginTop: 14, lineHeight: 1.9 }}>{DATA.location}</p>
          </div>

          <div style={{ marginBottom: 40 }}>
            <div style={{ fontSize: 8, letterSpacing: 3, color: T.sideMuted, marginBottom: 14 }}>NAVIGATE</div>
            {DATA.nav.map(s => (
              <button key={s} className="nav-btn" style={{ color: activeSection === s ? T.accent : T.sideMuted }} onClick={() => scrollTo(s)}>
                <span style={{ marginRight: 8, color: activeSection === s ? T.accent : "transparent" }}>→</span>{s}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 8, letterSpacing: 3, color: T.sideMuted, marginBottom: 10 }}>LINKS</div>
          {DATA.links.map(l => (
            <a key={l.label} href={l.href} className="sidebar-link" style={{ color: T.sideMuted }}
              target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer">
              <span style={{ color: T.accent }}>→</span> {l.label}
            </a>
          ))}

          <div style={{ marginTop: 32 }}>
            <div style={{ fontSize: 8, letterSpacing: 3, color: T.sideMuted, marginBottom: 14 }}>EDUCATION</div>
            {DATA.education.map(e => (
              <div key={e.school} style={{ marginBottom: 18 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: T.sideText, lineHeight: 1.3 }}>{e.school}</div>
                <div style={{ fontSize: 10, color: T.sideMuted, marginTop: 3, lineHeight: 1.55 }}>{e.degree}</div>
                {e.major && <div style={{ fontSize: 10, color: T.sideMuted, fontStyle: "italic", marginTop: 1 }}>{e.major}</div>}
                <div style={{ fontSize: 10, color: T.accent, marginTop: 3 }}>{e.gpa}</div>
              </div>
            ))}
          </div>

          {/* Theme switcher */}
          <div style={{ marginTop: 32 }}>
            <div style={{ fontSize: 8, letterSpacing: 3, color: T.sideMuted, marginBottom: 10 }}>THEME</div>
            <div style={{ display: "flex", gap: 8 }}>
              {THEMES.map((t, i) => (
                <button
                  key={t.name} title={t.name}
                  className="theme-dot"
                  onClick={() => setThemeIdx(i)}
                  style={{
                    background: t.body,
                    border: `2px solid ${themeIdx === i ? t.accent : t.sideMuted}`,
                    outline: themeIdx === i ? `1px solid ${t.accent}` : "none",
                    outlineOffset: 1,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="l-main">

        {/* Bio */}
        <div style={{ marginBottom: 80 }}>
          <p style={{ fontFamily: "var(--font-fraunces), serif", fontStyle: "italic", fontSize: 18, lineHeight: 1.8, color: "var(--text)", fontWeight: 300 }}>
            &ldquo;{DATA.bio}&rdquo;
          </p>
        </div>

        {/* Experience */}
        <section ref={el => { sectionRefs.current["Experience"] = el; }} data-section="Experience" style={{ marginBottom: 80 }}>
          <SectionLabel>Experience</SectionLabel>
          {DATA.experience.map((e, i) => {
            const hasSuffix = e.companyFull !== e.company && e.companyFull.startsWith(e.company);
            const suffix = hasSuffix ? e.companyFull.slice(e.company.length).trim() : null;
            const hasSubtitle = e.companyFull !== e.company && !hasSuffix;

            return (
              <div key={e.company} className="exp-row" onClick={() => setOpenExp(openExp === i ? -1 : i)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap", marginBottom: 2 }}>
                      <span style={{ fontFamily: "var(--font-fraunces), serif", fontSize: 17, fontWeight: 700, color: "var(--text)" }}>{e.company}</span>
                      {suffix && (
                        <span style={{ fontFamily: "var(--font-fraunces), serif", fontSize: 15, fontWeight: 300, color: "var(--text)", opacity: 0.7 }}>{suffix}</span>
                      )}
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "var(--text)", marginBottom: 3 }}>{e.role}</div>
                    {hasSubtitle && (
                      <div style={{ fontSize: 11, color: "var(--text)", opacity: 0.65, marginBottom: 4 }}>{e.companyFull}</div>
                    )}
                    <div style={{ fontSize: 12, fontWeight: 500, color: "var(--text)", marginBottom: 10, letterSpacing: 0.3 }}>{e.location} · {e.period}</div>
                    <div>{e.tags.map(t => <Stamp key={t}>{t}</Stamp>)}</div>
                  </div>
                  <span style={{ fontSize: 18, color: openExp === i ? T.accent : "var(--muted)", transition: "color 0.2s", flexShrink: 0, paddingTop: 2, fontWeight: 300 }}>
                    {openExp === i ? "−" : "+"}
                  </span>
                </div>

                {openExp === i && (
                  <div className="bullet-enter" style={{ marginTop: 18, borderLeft: `1.5px solid ${T.accent}`, paddingLeft: 18 }}>
                    {e.bullets.map((b, j) => (
                      <div key={j} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
                        <span style={{ color: "var(--text)", fontSize: 13, flexShrink: 0, paddingTop: 2, fontWeight: 700 }}>›</span>
                        <span style={{ fontSize: 13, color: "var(--text)", lineHeight: 1.75 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* Projects */}
        <section ref={el => { sectionRefs.current["Projects"] = el; }} data-section="Projects" style={{ marginBottom: 80 }}>
          <SectionLabel>Projects</SectionLabel>
          <div className="l-proj-grid">
            {DATA.projects.map(p => (
              <div key={p.name} className="proj-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 5 }}>
                  <span style={{ fontFamily: "var(--font-fraunces), serif", fontSize: 15, fontWeight: 700, color: "var(--text)", lineHeight: 1.3 }}>{p.name}</span>
                  <span style={{ fontSize: 9, color: "var(--muted)", whiteSpace: "nowrap", paddingLeft: 8, paddingTop: 2 }}>{p.period}</span>
                </div>
                <div style={{ fontSize: 9, color: T.accent, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 10 }}>{p.context}</div>
                <p style={{ fontSize: 12, color: "var(--text)", lineHeight: 1.7, marginBottom: 14 }}>{p.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 10, color: "var(--muted)", fontStyle: "italic" }}>{p.stack}</span>
                  <div style={{ display: "flex", gap: 12 }}>
                    {p.links.map(l => <a key={l.label} href={l.href} className="li-ext-link" target="_blank" rel="noopener noreferrer">{l.label} →</a>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section ref={el => { sectionRefs.current["Skills"] = el; }} data-section="Skills" style={{ marginBottom: 80 }}>
          <SectionLabel>Skills</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {Object.entries(DATA.skills).map(([cat, items]) => (
              <div key={cat} className="l-skill-row">
                <span style={{ fontSize: 9, letterSpacing: 2, color: "var(--muted)", textTransform: "uppercase", paddingTop: 5 }}>{cat}</span>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {items.map(s => (
                    <span key={s} style={{ fontSize: 12, padding: "4px 12px", border: "1px solid var(--body-dark)", color: "var(--text)", background: "rgba(255,255,255,0.6)" }}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section ref={el => { sectionRefs.current["Education"] = el; }} data-section="Education">
          <SectionLabel>Education</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {DATA.education.map(e => (
              <div key={e.school} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, padding: "24px", border: "1px solid var(--body-dark)", background: "rgba(255,255,255,0.4)" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-fraunces), serif", fontSize: 20, fontWeight: 700, marginBottom: 5, color: "var(--text)" }}>{e.school}</div>
                  <div style={{ fontSize: 13, color: "var(--text)", marginBottom: 2 }}>{e.degree}</div>
                  {e.major && <div style={{ fontSize: 12, color: "var(--muted)", fontStyle: "italic" }}>{e.major}</div>}
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: 10, color: "var(--muted)", marginBottom: 8 }}>{e.period}</div>
                  <div style={{ fontFamily: "var(--font-fraunces), serif", fontSize: 22, color: T.accent, fontWeight: 700 }}>{e.gpa}</div>
                  <div style={{ fontSize: 9, color: "var(--muted)", letterSpacing: 1 }}>GPA</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: 72, borderTop: "1px solid var(--body-dark)", paddingTop: 20, display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 10, color: "var(--muted)" }}>rajasvi.xyz</span>
          <span style={{ fontSize: 10, color: "var(--muted)" }}>Rajasvi Vinayak Sharma · {new Date().getFullYear()}</span>
        </div>
      </main>
      </div>
    </div>
  );
}
