import React from 'react';

import './Button.pcss';

import Icon from '../Icon';

export default function Button({ img, size }) {
  const className = `button button__${size || 'middle'}`;
  return (
    <button className={className} type="button">
      <Icon img={img} size={size} />
    </button>
  );
}
