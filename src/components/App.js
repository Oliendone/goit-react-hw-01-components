import React from 'react';
import Profile from '../components/Profile/Profile';
import Description from '../components/Description/Description';
import Stats from '../components/Stats/Stats';
import user from '../user.json';
import statisticalData from '../statistical-data.json';

const {
  avatar,
  name,
  tag,
  location,
  stats: { followers, views, likes },
} = user;

export default function App() {
  return (
    <>
      <Profile>
        <Description
          avatar={avatar}
          name={name}
          tag={tag}
          location={location}
        />
        <Stats followers={followers} views={views} likes={likes} />
      </Profile>
    </>
  );
}
