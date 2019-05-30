import React from 'react';

import './Icon.pcss';

export default function Icon({ type }) {
  const className = `icon icon__${type}`;
  return (
    <div className={className} />
  );
}
