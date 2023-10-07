import info from "../../data/johndoe.json";

export const getFullName = () => {
  return "John Doe";
};

export const getInitials = () => {
  return "JD";
};

export const getIntro = () => {
  return info.intro;
};

export const isAvailableForHire = () => {
  return info.available_for_hire;
};

export const getSociaLinks = () => {
  return info.social_links;
};

export const getProjects = () => {
  return info.projects;
};

export const getExperience = () => {
  return info.experience;
};
export const getTopRepos = () => {
  return info.top_repos;
};
