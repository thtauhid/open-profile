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
  return true;
};
