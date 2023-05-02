import React from 'react';
import Typed from 'react-typed';
import { Container } from 'react-bootstrap';
import './Hero.css'
import heroImage from '../../assets/images/hero-image-rot.png';

const Hero = () => {
    return (
        <div className='hero-image'
            style={{ backgroundImage: `url(${heroImage})` }}>
            <Container className='page-container mt-0 h-100'>
                <div className='d-flex flex-column justify-content-center h-100 text-white'>
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
