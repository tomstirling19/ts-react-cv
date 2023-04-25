import React from 'react';

interface HeaderProps {
  imagePath: string;
  animatedText: string;
}

const Header: React.FC<HeaderProps> = ({ imagePath, animatedText }) => {
  return (
    <header>
      <img src={imagePath} alt="thomas stirling" />
      <div className="text-container">
        <p className="animated-text">{animatedText}</p>
      </div>
    </header>
  );
};

export default Header;
