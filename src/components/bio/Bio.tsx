import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Bio.css';

const Bio = () => {
    return (
        <div className='page-container bio-container'>
            <div className='left-col'>
                <h2 className='header-text'>Welcome</h2>
                <div className='primary-text bio-text'>
                    <p>My name is Thomas Stirling (or Tom). I graduated from the University of Leeds
                        with a Masters in Computer Science (MEng & BSc Computer Science - 1st Class).</p>

                    <p>My greatest interests lie in AI and ML, with keen interests in Blockchain,
                        Web3 and application development (Web / Mobile).</p>

                    <p>I'm currently:
                        <ul>
                            <li>Strenghtening my skillset in machine learning model development (LLMs, NNs).</li>
                            <li>Learning how to design end-to-end machine learning systems (tooling, design and deployment).</li>
                            <li>Keeping up-to-date with breakthrough research and development within the AI/ML space.</li>
                            <li>Working on application development within an internationial company.</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className='right-col'>
                <div className='links-container'>
                    <a href='https://www.linkedin.com/in/thomasdstirling/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} size='4x' />
                    </a>
                    <a href='https://github.com/tomstirling19/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faGithub} size='4x' />
                    </a>
                    <a href='https://gitlab.com/tomstirling' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faGitlab} size='4x' />
                    </a>
                    <a href='mailto:tomstirling19@gmail.com' target='_blank' rel='noopener noreferrer' className='email-link'>
                        <FontAwesomeIcon icon={faEnvelope} size='4x' />
                        <span>tomstirling19@gmail.com</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Bio;
