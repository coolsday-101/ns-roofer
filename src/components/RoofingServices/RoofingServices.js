import React from 'react';
import { ServicesHeader } from './ServicesHeader';
import { FeaturesGrid } from './FeaturesGrid';

const RoofingServices = ({title, description, content, gridCol}) => {
  return (
    <section className="flex flex-col gap-12 items-center p-16 max-md:p-8 max-sm:p-6">
      <ServicesHeader title={title} description={description} />
      <FeaturesGrid content={content} gridCol={gridCol} />
    </section>
  );
};

export default RoofingServices;
