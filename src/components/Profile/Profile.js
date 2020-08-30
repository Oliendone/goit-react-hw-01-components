import React from 'react';
import PropTypes from 'prop-types';

export default function Profile({ name, tag, location, avatar }) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="user avatar" className="avatar" />
        <p className="name">{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
    </div>
  );
}
