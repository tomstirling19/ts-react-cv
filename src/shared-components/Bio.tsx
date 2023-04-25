import React from 'react';

interface BioProps {
  bioText: string;
}

const Bio: React.FC<BioProps> = ({ bioText }) => {
  return (
    <div className="bio-container">
      <h2>Bio</h2>
      <p>{bioText}</p>
    </div>
  );
};

export default Bio;
