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
  gpa?: string;
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
    logo?: string;
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
        Advising clients on <span className="text-white font-bold">patent litigation</span> and <span className="text-white font-bold">transactional IP matters</span>.
        <span className="block mt-2 text-sm md:text-lg opacity-80">
          <span className="text-white font-bold">New York State</span> & <span className="text-white font-bold">U.S. Patent & Trademark Office</span> bar admissions.
        </span>
      </>
    ),
    avatar: "https://media.licdn.com/dms/image/v2/D4E03AQEmBPhvhrJfbw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732137454357?e=1770854400&v=beta&t=BIee-2BMa0WHcB23klFy1H9VxRQCRLfTUjbJnMrZmCo",
    linkedin: "https://www.linkedin.com/in/shivani-prakash-0b33a5149/",
  },
  traits: [
    {
      icon: "akin",
      logo: "https://pbs.twimg.com/profile_images/1973772417580314624/ish6D32g_400x400.png",
      title: "IP Associate",
      subtitle: "Akin",
    },
    {
      icon: "notre_dame",
      title: "Juris Doctor (JD)",
      logo: "https://logos-world.net/wp-content/uploads/2021/09/Notre-Dame-Symbol.png",
      subtitle: "Notre Dame Law",
    },
    {
      icon: "penn",
      title: "BAS - Biomedical Science",
      subtitle: "Penn Engineering",
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
      logo: "https://pbs.twimg.com/profile_images/1973772417580314624/ish6D32g_400x400.png",
      roles: [
        {
          title: "Associate",
          duration: "2024 - Present",
        },
        {
          title: "Summer Associate",
          duration: "2023 — 2023",
        },
                {
          title: "1L Summer Associate",
          duration: "2022 — 2022",
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
      logo: "https://logos-world.net/wp-content/uploads/2021/09/Notre-Dame-Symbol.png",
      roles: [
      ],
    },
    {
      company: "Arent Fox",
      team: "International Trade Paralegal",
      location: "Washington DC",
      duration: "2019-2021",
      description:
        "Project Assistant in the International Trade division",
      icon: null,
      logo: "https://pbs.twimg.com/profile_images/1278386943932485632/fc0jRoZl_400x400.jpg",
      roles: [
        {
          title: "Paralegal",
          duration: "2021 - 2021",
        },
        {
          title: "Project Assistant",
          duration: "2019 — 2021",
        },
      ],
    },
  ],
  education: [
    {
      school: "Notre Dame Law School",
      logo: "https://logos-world.net/wp-content/uploads/2021/09/Notre-Dame-Symbol.png",
      duration: "2021 - 2024",
      location: "South Bend, IN",
      honors: "Cum Laude",
      degrees: [
        {
          school: "Notre Dame Law School",
          degree: "Juris Doctor (JD)",
          detail: "Executive Editor - Journal of Law, Ethics and Public Policy",
        },
      ],
    },
    {
      school: "University of Pennsylvania",
      logo: "https://sportslogohistory.com/wp-content/uploads/2022/11/penn_quakers_2004-2017_a.png",
      duration: "2015 - 2019",
      location: "Philadelphia, PA",
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