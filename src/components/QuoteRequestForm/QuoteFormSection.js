import React from 'react';
import { FormInput, FormDropdown, FormTextArea } from './FormComponents';

export const QuoteFormSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="flex flex-col p-16 md:py-0 my-auto min-w-60 w-[720px] max-md:px-5 max-md:max-w-full">
      <form onSubmit={handleSubmit} className="w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-4 items-center w-full max-md:max-w-full">
          <FormInput
            label="First Name"
            placeholder="Enter Text"
          />
          <FormInput
            label="Last Name"
            placeholder="Enter Text"
          />
        </div>

        <div className="flex flex-wrap gap-4 items-center mt-4 w-full max-md:max-w-full">
          <FormInput
            label="Address"
            placeholder="Enter Location"
          />
          <FormInput
            label="Phone"
            placeholder="Enter Phone"
            type="tel"
          />
        </div>

        <div className="flex flex-wrap gap-4 items-center mt-4 w-full max-md:max-w-full">
          <FormInput
            label="What is your email address?"
            placeholder="Enter Email"
            type="email"
          />
          <FormDropdown
            label="Service Types"
            placeholder="Select Option..."
          />
        </div>

        <div className="flex flex-wrap gap-4 items-center mt-4 w-full max-md:max-w-full">
          <FormDropdown
            label="What is the best way to reach you?"
            placeholder="Select Option..."
          />
          <FormDropdown
            label="How did you hear about us?*"
            placeholder="Select Option..."
          />
        </div>

        <div className="mt-4 w-full max-md:max-w-full">
          <FormInput
            label="When would you like to have your project start?"
            placeholder="Enter Date"
            type="date"
          />
        </div>

        <FormTextArea
          label="Customer Notes"
          placeholder="Enter Text"
        />

        <button
          type="submit"
          className="gap-2.5 px-4 py-2 mt-6 text-xs font-bold text-white whitespace-nowrap rounded bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
        >
          Submit
        </button>
      </form>
    </section>
  );
};
