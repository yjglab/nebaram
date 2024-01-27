export type ProjectData = ProjectDesign | ProjectDevelopment | ProjectOngoing;
export type WholeProjects = ProjectData[];
export type ProjectSectionCategory =
  | "all"
  | "development"
  | "design"
  | "ongoing";

export interface ProjectDesign {
  category: "design";
  projectCategory: string;
  date: string;
  thumbnailSrc: string;
  title: [string, string];
  description: string;
  skills: string;
  link: string;
}

export interface ProjectOngoing {
  category: "ongoing";
  projectCategory: string;
  date: string;
  thumbnailSrc: string;
  title: [string, string];
  description: string;
  skills: string;
  link: string;
}
export interface ProjectDevelopment {
  category: "development";
  projectCategory: string;
  date: string;
  thumbnailSrc: string;
  title: [string, string];
  description: string;
  skills: string;
  link?: string;
  details: {
    github: {
      label: string;
      link: string;
    };
    production: {
      label: string;
      link: string;
    };
    header: {
      title: string;
      description: string;
    };
    outline: {
      label: string;
      description: string;
    };
    implements: {
      label: string;
      description: string[];
    };
    issues: {
      label: string;
      link: string;
      description: string;
    };
    skills: {
      label: string;
      description: string[];
    };
    slides: {
      scope: string;
      src: string;
      title: string;
      description: string;
    }[];
  };
}
