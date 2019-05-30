import React from 'react';

import './Iconblock.pcss';

import Icon from '../Icon';

export default function IconBlock() {
  return (
    <div className="iconblock">
      <Icon img="explore" href="/explore" />
      <Icon img="like" href="/like" />
      <Icon img="profile" href="/profile" />
    </div>
  );
}
