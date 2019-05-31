import React from 'react';

import './Avatar.pcss';

export default function Icon({ src, href, size }) {
  const className = `avatar__${size || 'middle'}`;
  return (
    <a className={`avatar ${className}`} href={href}>
      <img
        className="avatar__img"
        alt="User avatar"
        src={src}
      />
    </a>
  );
}
