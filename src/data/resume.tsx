import React from "react";

export interface ExperienceRole {
  title: string;
  duration: string;
}

export interface ExperienceItem {
  company: string;
  team?: string;
  location: string;
  duration?: string;
  description: string;
  icon?: string | null;
  logo?: string | null;
  roles: ExperienceRole[];
}

export interface EducationDegree {
  school: string;
  degree: string;
  detail: string;
}

export interface EducationItem {
  school: string;
  logo: string;
  duration: string;
  location?: string;
  gpa: string;
  honors: string;
  degrees: EducationDegree[];
}

export interface ResumeData {
  personal: {
    name: string;
    surname: string;
    title: string;
    company: string;
    tagline: React.ReactNode;
    avatar: string;
    linkedin: string;
  };
  traits: {
    icon: string;
    title: string;
    subtitle: string;
  }[];
  experience: ExperienceItem[];
  education: EducationItem[];
}

export const resumeData: ResumeData = {
  personal: {
    name: "Shivani",
    surname: "Prakash",
    title: "Associate, Intellectual Property",
    company: "Akin",
    tagline: (
      <>
        Advising clients on <span className="text-white font-bold">patent litigation</span> and <span className="text-white font-bold">transactional IP matters</span>. Admitted in <span className="text-white font-bold">New York</span> & <span className="text-white font-bold">USPTO</span>.
      </>
    ),
    avatar: "https://ui-avatars.com/api/?name=Shivani+Prakash&background=random&size=256",
    linkedin: "https://www.linkedin.com/in/shivani-prakash-0b33a5149/",
  },
  traits: [
    {
      icon: "akin",
      title: "Associate @ Akin",
      subtitle: "Intellectual Property",
    },
    {
      icon: "notre_dame",
      title: "J.D. @ Notre Dame",
      subtitle: "Cum Laude",
    },
  ],
  experience: [
    {
      company: "Akin",
      team: "Intellectual Property",
      location: "New York, NY",
      duration: "Present",
      description:
        "Advising clients on patent litigation and transactional IP matters, including complex mergers, asset/stock purchases and acquisitions, IP licenses, and diligence reviews.",
      icon: null,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Akin.svg/512px-Akin.svg.png",
      roles: [
        {
          title: "Associate",
          duration: "Present",
        },
        {
          title: "Summer Associate",
          duration: "2022 — 2023",
        },
      ],
    },
    {
      company: "Notre Dame Law School",
      team: "Legal Extern",
      location: "South Bend, IN",
      duration: "2023 — 2024",
      description:
        "Legal extern for Notre Dame's Intellectual Property clinic.",
      icon: null,
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Notre_Dame_Fighting_Irish_logo.svg/1200px-Notre_Dame_Fighting_Irish_logo.svg",
      roles: [
      ],
    },
    {
      company: "JUSTICE",
      team: "Legal Extern",
      location: "London, UK",
      duration: "2022",
      description:
        "Legal extern for JUSTICE, a UK-based non-profit organization.",
      icon: null,
      logo: null,
      roles: [
      ],
    },
  ],
  education: [
    {
      school: "Notre Dame Law School",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Notre_Dame_Fighting_Irish_logo.svg/960px-Notre_Dame_Fighting_Irish_logo.svg",
      duration: "2021 - 2024",
      location: "South Bend, IN",
      gpa: "",
      honors: "Cum Laude",
      degrees: [
        {
          school: "Notre Dame Law School",
          degree: "Juris Doctor (J.D.)",
          detail: "Executive Editor, Journal of Law, Ethics and Public Policy",
        },
      ],
    },
    {
      school: "University of Pennsylvania",
      logo: "https://sportslogohistory.com/wp-content/uploads/2022/11/penn_quakers_2004-2017_a.png",
      duration: "2015 - 2019",
      location: "Philadelphia, PA",
      gpa: "",
      honors: "",
      degrees: [
        {
          school: "School of Engineering and Applied Science",
          degree: "B.A.S. - Biomedical Sciences",
          detail: "",
        },
      ],
    },
  ],
};