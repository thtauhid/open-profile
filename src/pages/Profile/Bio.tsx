import { getIntro } from "@/api";
import React from "react";

const Bio: React.FC = () => {
  const intro = getIntro();
  return (
    <div className="my-8 border-2 px-6 rounded-sm">
      <h1 className="text-2xl font-bold py-3">
        {intro.label ? intro.label : "Intro"}
      </h1>
      <p className="pb-3">{intro.value}</p>
    </div>
  );
};

export default Bio;
