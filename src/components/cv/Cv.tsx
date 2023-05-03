import React from 'react';
import CvItem from '../listItem/ListItem';
import './Cv.css';
import cvData from './cvData.json';

const Cv = () => {
  const { educationList, experienceList } = cvData;

  const splitSummaryIntoParagraphs = (summary) => {
    const paragraphs = summary.split('\n').map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ));
    return paragraphs;
  }

  return (
    <div className='page-container cv-container'>
      <h1 className='header-text cv-title'>Curriculum Vitae</h1>
      <div className='cv-content'>
        <div className='row'>
          <div className='col-12'>
            <h2 className='header-text section-header'>Education</h2>
          </div>
          {educationList.map((item, index) => (
            <div className='col-md-6 cv-row' key={index}>
              <CvItem {...item} summary={splitSummaryIntoParagraphs(item.summary)} />
            </div>
          ))}
        </div>
        <div className='row'>
          <div className='col-12'>
            <h2 className='header-text section-header'>Experience</h2>
          </div>
          {experienceList.map((item, index) => (
            <div className='col-md-6 cv-row' key={index}>
              <CvItem {...item} summary={splitSummaryIntoParagraphs(item.summary)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cv;
