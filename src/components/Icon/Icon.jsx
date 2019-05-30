import React from 'react';

import './Icon.pcss';

export default function Icon({ type, href }) {
  const className = `icon__${type}`;
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
