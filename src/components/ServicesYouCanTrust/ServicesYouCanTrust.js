import React from 'react';
import RoofingHeader from './RoofingHeader';
import ServicesGrid from './ServicesGrid';
import QuotePrompt from './QuotePrompt';

const ServicesYouCanTrust = ({title, description, cta = true, content}) => {
  return (
    <section className="flex flex-col gap-12 p-16 border border-none bg-cloud-grey max-md:p-8 max-sm:p-6">
      <RoofingHeader title={title} description={description} />
      <ServicesGrid content={content} />
      {cta && <QuotePrompt />}
    </section>
  );
};

export default ServicesYouCanTrust;
