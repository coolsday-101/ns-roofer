import React from 'react';

const RoofingHeader = ({title, description}) => {
  return (
    <header className="flex flex-col gap-6 items-center">
      <h1 className="text-3xl font-semibold text-center text-gray-950 max-md:text-3xl max-sm:text-2xl">
        {title}
      </h1>
      <div className="flex flex-wrap gap-4 justify-center items-center">
        {description}
      </div>
    </header>
  );
};

export default RoofingHeader;
