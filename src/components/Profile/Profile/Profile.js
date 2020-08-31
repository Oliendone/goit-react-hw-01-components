import React from 'react';
import style from './Profile.module.css';

export default function Profile({ children }) {
  return <div className={style.profile}>{children}</div>;
}
