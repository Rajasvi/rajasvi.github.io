export interface EducationItem {
  institution: string;
  institutionUrl: string;
  logo: string;
  logoWidth: number;
  degree: string;
  field: string;
  major?: string;
  period: string;
  location: string;
  gpa?: string;
  coursework?: string[];
}

export const education: EducationItem[] = [
  {
    institution: "University of California – San Diego",
    institutionUrl: "https://www.ucsd.edu",
    logo: "/images/UCSDlogo.png",
    logoWidth: 120,
    degree: "Master of Science",
    field: "Electrical & Computer Engineering",
    major: "Machine Learning & Data Science",
    period: "Sep 2021 – Mar 2023",
    location: "California, US",
    gpa: "3.91 / 4.0",
    coursework: [
      "Recommender Systems & Web Mining",
      "Deep Learning for Natural Language Understanding",
      "Statistical Natural Language Processing",
      "Big Data Mining & Spark Analytics",
      "Statistical Machine Learning",
      "Convex Optimization",
      "Linear Algebra",
    ],
  },
  {
    institution: "Indian Institute of Technology (Banaras Hindu University), Varanasi",
    institutionUrl: "https://www.iitbhu.ac.in",
    logo: "/images/IITBHU-Logo.jpg",
    logoWidth: 120,
    degree: "Bachelor of Technology",
    field: "Electronics Engineering",
    period: "Jul 2014 – May 2018",
    location: "Varanasi, India",
    gpa: "8.81 / 10",
  },
];
