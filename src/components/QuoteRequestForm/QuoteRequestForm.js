import React from 'react';
import { ContactInfoSection } from './ContactInfoSection';
import { QuoteFormSection } from './QuoteFormSection';

const QuoteRequestForm = () => {
  return (
    <main className="flex flex-wrap justify-center">
      <ContactInfoSection />
      <QuoteFormSection />
    </main>
  );
};

export default QuoteRequestForm;
