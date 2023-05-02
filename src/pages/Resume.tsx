import React from 'react';

interface Experience {
  imagePath: string;
  heading: string;
  description: string;
}

interface ResumeProps {
  experienceList: Experience[];
  educationList: Experience[];
}

const Resume: React.FC<ResumeProps> = ({ experienceList, educationList }) => {
  return (
    <div>
      <h1>Experience</h1>
      <h1>Education</h1>
    </div>
  );
};

export default Resume;
