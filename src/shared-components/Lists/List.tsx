import React from 'react';
import ListItem, { ListItemProps } from './ListItem';

interface ListProps {
  items: ListItemProps[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <ul className="list">
      {items.map(item => (
        <ListItem
          key={item.heading}
          imagePath={item.imagePath}
          heading={item.heading}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default List;
