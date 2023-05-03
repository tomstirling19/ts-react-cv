import React from 'react';
import General from './components/General';
import Cv from './components/cv/Cv';
import Footer from './components/footer/Footer';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div>
      {/* <NavigationBar /> */}
      <General />
      <Cv />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
