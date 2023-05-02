import React from 'react';
import NavigationBar from '../shared-components/navbar/Navbar';
import Footer from '../shared-components/footer/Footer'
import Hero from '../components/hero/Hero';
import Bio from '../components/bio/Bio'

const Home = () => {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <Bio />
      <Footer />
    </div>
  );
};

export default Home;
