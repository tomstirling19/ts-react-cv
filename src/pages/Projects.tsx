import React from 'react';
import List from '../shared-components/Lists/List';

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
      <List items={projectsList} />
    </div>
  );
};

export default Resume;
