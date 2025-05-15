// Step 1: Import React
import React from "react";
import Layout from "../../components/layout/layout";
import QuoteRequestForm from "../../components/QuoteRequestForm/QuoteRequestForm";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <QuoteRequestForm />
    </Layout>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
