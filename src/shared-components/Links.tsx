import React from 'react';

interface LinksProps {
  linksList: string[];
}

const Links: React.FC<LinksProps> = ({ linksList }) => {
  return (
    <div className="links-container">
      <h2>Links</h2>
      <ul>
        {linksList.map(link => (
          <li key={link}>{link}</li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
