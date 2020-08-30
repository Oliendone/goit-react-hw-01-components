import React from 'react';
import PropTypes from 'prop-types';

export default function Stats(props) {
  return (
    <ul>
      <li>
        <span className="style.label">Followers</span>
        <span className="style.quantity">{props.stats.followers}</span>
      </li>
      <li>
        <span className="style.label">Views</span>
        <span className="style.quantity">{props.stats.views}</span>
      </li>
      <li>
        <span className="style.label">Likes</span>
        <span className="style.quantity">{props.stats.likes}</span>
      </li>
    </ul>
  );
}

Stats.defaultProps = {
  followers: 0,
  views: 0,
  likes: 0,
};

Stats.propTypes = {
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
