import React from 'react';
import ProjectItem from '../listItem/ListItem';
import './Projects.css';
import ProjectsData from './projectsData.json';

const Projects = () => {
  const { projectsList } = ProjectsData;

  const splitSummaryIntoParagraphs = (summary) => {
    const paragraphs = summary.split('\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
    return paragraphs;
  }

  return (
    <div className='page-container projects-container'>
      <h1 className='header-text projects-title'>Projects</h1>
      <div className='project-content'>
        <div className='row'>
          {projectsList.map((item, index) => (
            <div className='col-md-6 project-row' key={index}>
              <ProjectItem {...item} summary={splitSummaryIntoParagraphs(item.summary)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
