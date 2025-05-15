import React from "react";
import LogoImage from "./LogoImage";

const LogoBanner = ({logos}) => {
  return (
    <section className="flex bg-cloud-grey flex-col justify-center p-16 w-full max-md:px-5 max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-center items-center w-full max-md:max-w-full">
        {logos.map((logo, idx) => (
            <LogoImage key={idx} src={logo.src} className={logo.className} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBanner;
