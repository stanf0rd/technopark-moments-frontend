import React from 'react';

import './Iconblock.pcss';

import Icon from '../Icon';

export default function IconBlock() {
  return (
    <div className="iconblock">
      <Icon type="explore" href="/explore" />
      <Icon type="like" href="/like" />
      <Icon type="profile" href="/profile" />
    </div>
  );
}
