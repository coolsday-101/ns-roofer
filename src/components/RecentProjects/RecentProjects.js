import React from 'react';
import Header from './Header';
//import ProjectCards from './ProjectCards';
import ContactCTA from './ContactCTA';
import EmblaCarousel from './EmblaCarousel';

const RecentProjects = ({title, description, data}) => {
  const OPTIONS = { dragFree: true, loop: true };

  return (
    <main className="flex flex-col justify-center p-16 w-full bg-slate-100 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col justify-center w-full max-md:max-w-full max-sm:text-center">
        <Header title={title} description={description} />
        <EmblaCarousel slides={data} options={OPTIONS} />
        <ContactCTA />
      </div>
    </main>
  );
};

export default RecentProjects;
