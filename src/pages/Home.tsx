import React from 'react';
import Header from '../shared-components/Header';
import Bio from '../shared-components/Bio';
import Links from '../shared-components/Links';

const Home: React.FC = () => {
  const animatedText = 'Hello, I am Tom. I am an engineer.';
  const linksList = ['Link 1', 'Link 2', 'Link 3'];
  const bioText = 'Insert your bio here.';

  return (
    <div>
      <Header imagePath="../images/image1.jpg" animatedText={animatedText} />
      <section>
        <Bio bioText={bioText} />
        <Links linksList={linksList} />
      </section>
    </div>
  );
};

export default Home;
