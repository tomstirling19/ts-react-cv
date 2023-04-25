import React from 'react';
import List from '../shared-components/Lists/List';

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
      <List items={experienceList} />
      <h1>Education</h1>
      <List items={educationList} />
    </div>
  );
};

export default Resume;
