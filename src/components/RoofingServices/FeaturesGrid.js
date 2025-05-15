import React from "react";
import { FeatureItem } from "./FeatureItem";

export const FeaturesGrid = ({content, gridCol}) => {
  return (
    <section className={`grid grid-cols-${gridCol} gap-12 w-full max-md:grid-cols-2 max-sm:grid-cols-1`}>
      {content.map((feature, index) => (
        <FeatureItem
          key={index}
          text={feature.title}
          imageSrc={feature.imageSrc}
        />
      ))}
    </section>
  );
};
