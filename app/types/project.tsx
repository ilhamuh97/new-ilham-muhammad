export interface Project {
  slug: string;
  name: string;
  link: string | null;
  techStack: string[];
  description: string;
  status: "done" | "in progress";
  fullDescription: string;
  features: string[];
  challenges: string[];
  technologies: Record<string, string[]>;
  images: string[];
}

export interface ProjectDetailProps {
  project: Project;
}
