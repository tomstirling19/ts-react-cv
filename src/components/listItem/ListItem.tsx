import React from 'react';
import './ListItem.css';

const ListItem = ({ image, heading, summary }) => {
    return (
        <div className='list-item row'>
            <div className='image-container col-12 col-md-5 d-flex justify-content-center align-items-center'>
                <img src={image} alt={heading} />
            </div>
            <div className='text-container col-12 col-md-7'>
                <h2 className='header-text item-heading'>{heading}</h2>
                <p className='primary-text item-summary'>{summary}</p>
            </div>
        </div>
    );
};

export default ListItem;
