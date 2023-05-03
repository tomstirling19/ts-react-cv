import React from 'react';
import { Container } from 'react-bootstrap';
import Typed from 'react-typed';
import heroImage from '../../assets/images/hero-image-rot.png';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero-image'
            style={{ backgroundImage: `url(${heroImage})` }}>
            <Container className='page-container hero-content'>
                <div>
                    <h1 className='hero-text'>
                        <span>Hello, I am</span><br />
                        <Typed
                            strings={[
                                'Thomas Stirling',
                                'a software engineer',
                                'a machine learning and AI enthusiast',
                                'a film, fashion and art enjoyer',
                            ]}
                            typeSpeed={50}
                            backSpeed={25}
                            backDelay={1250}
                            loop
                            cursorChar={' _'}
                        />
                    </h1>
                </div>
            </Container >
        </div >
    );
};

export default Hero;
