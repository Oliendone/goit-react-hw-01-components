import React from 'react';
import Profile from '../components/Profile/Profile';
import Description from '../components/Description/Description';
import Stats from '../components/Stats/Stats';
import user from '../user.json';

export default function App() {
  return (
    <>
      <Profile>
        <Description
          avatar={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
        />
        <Stats
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Profile>
    </>
  );
}
