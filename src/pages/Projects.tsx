import React from 'react';

interface Experience {
  imagePath: string;
  heading: string;
  description: string;
}

interface ProjectProps {
  projectsList: Experience[];
}

const Resume: React.FC<ProjectProps> = ({ projectsList }) => {
  return (
    <div>
      <h1>Project</h1>
    </div>
  );
};

export default Resume;
