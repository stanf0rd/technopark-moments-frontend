import React from 'react';

import './Iconblock.pcss';

import Icon from '../Icon';

export default function IconBlock() {
  return (
    <div className="iconblock">
      <Icon type="explore" />
      <Icon type="like" />
      <Icon type="profile" />
    </div>
  );
}
