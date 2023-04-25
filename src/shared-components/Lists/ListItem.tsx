import React from 'react';

export interface ListItemProps {
  imagePath: string;
  heading: string;
  description: string;
}

const ListItem: React.FC<ListItemProps> = ({ imagePath, heading, description }) => {
  return (
    <li>
      <img src={imagePath} alt={heading} />
      <div>
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>
    </li>
  );
};

export default ListItem;
