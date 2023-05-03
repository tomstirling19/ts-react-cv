import React from 'react';
import { splitSummaryIntoParagraphs } from '../../helpers/common';
import ProjectItem from '../listItem/ListItem';
import './Projects.css';
import ProjectsData from './projectsData.json';

const Projects = () => {
  const { projectsList } = ProjectsData;

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
