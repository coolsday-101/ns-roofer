import React from "react";

const Checklist = ({title, content, className}) => {
  return (
    <section className={`${className} py-12 px-16 max-md:px-8 max-sm:px-4`}>
      <h2 className="text-2xl font-bold mb-8 text-center">
        {title}
      </h2>
      {content}
    </section>
  );
};

export default Checklist;
