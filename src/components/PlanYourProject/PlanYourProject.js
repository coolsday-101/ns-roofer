import React from "react";
import ArrowImage from "./images/ri_arrow-up-fill.svg";

const PlanYourProject = ({title, content, cta}) => {
  return (
    <section className="flex flex-col justify-around h-auto p-16 gap-4">
      <header>
        <h2 className="font-semibold text-[32px] text-black">
          {title}
        </h2>
        <p className="text-[14px] text-black">
          {content}
        </p>
      </header>
      <a
        href=""
        className="box-border relative shrink-0 h-auto text-lg font-semibold text-gray1"
      >
        {cta}
        <span>
          <img src={ArrowImage} className="inline" />
        </span>
      </a>
    </section>
  );
};

export default PlanYourProject;
