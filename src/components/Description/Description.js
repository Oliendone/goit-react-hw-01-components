import React from 'react';
import PropTypes from 'prop-types';

export default function Description({ name, tag, location, avatar }) {
  return (
    <div className="style.description">
      <img src={avatar} alt="user avatar" className="style.avatar" />
      <p className="style.name">{name}</p>
      <p className="style.tag">{tag}</p>
      <p className="style.location">{location}</p>
    </div>
  );
}

Description.defaultProps = {
  avatar:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

Description.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
