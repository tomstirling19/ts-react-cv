import React from 'react';
import Cv from './components/cv/Cv';
import Footer from './components/footer/Footer';
import General from './components/general/General';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div>
      <General />
      <Cv />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
