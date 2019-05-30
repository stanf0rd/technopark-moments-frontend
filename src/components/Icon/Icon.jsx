import React from 'react';

import './Icon.pcss';

export default function Icon({ img, href, size }) {
  const className = `icon__${img} icon__${size || 'middle'}`;
  if (href) {
    return (
      <a className="icon__link-wrapper" href={href}>
        <div className={`icon ${className}`} />
      </a>
    );
  }

  return (
    <div className={`icon ${className}`} />
  );
}
