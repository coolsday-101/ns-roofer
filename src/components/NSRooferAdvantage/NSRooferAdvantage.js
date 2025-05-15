import React from "react";
import { AdvantageColumn } from "./AdvantageColumn";

export default function NSRooferAdvantage({title, leftContent, rightContent}) {
  return (
    <section className="flex flex-col justify-center p-16 w-full bg-slate-600 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-10 items-center w-full max-md:max-w-full">
        <div className="flex-1 shrink self-stretch my-auto w-full basis-0 min-w-60 max-md:max-w-full">
          <h2 className="flex-1 shrink gap-2 w-full text-3xl font-semibold text-blue-400 basis-0 max-md:max-w-full">
            {title}
          </h2>
          <div className="flex flex-wrap gap-10 items-start mt-6 w-full text-sm text-white max-md:max-w-full">
            <AdvantageColumn features={leftContent} />
            <AdvantageColumn features={rightContent} />
          </div>
        </div>
      </div>
    </section>
  );
}
