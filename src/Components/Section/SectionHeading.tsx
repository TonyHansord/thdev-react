import React from "react";

type SectionHeadingProps = {
  heading: string;
};

export const SectionHeading = ({ heading }: SectionHeadingProps) => (
  <h2 className='section-heading'>{heading}</h2>
);
 