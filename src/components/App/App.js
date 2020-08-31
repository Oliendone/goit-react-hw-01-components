import React from 'react';
import Profile from '../Profile/Profile/Profile';
import Description from '../Profile/Description/Description';
import Stats from '../Profile/Stats/Stats';
import user from '../Profile/user.json';

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
