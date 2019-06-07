import React from 'react';

import './Avatar.pcss';

export default function Icon({ src, href, size }) {
  const sizeClass = `avatar__${size || 'middle'}`;
  return (
    <a className={`avatar ${sizeClass}`} href={href}>
      <img
        className={`avatar__img ${sizeClass}`}
        alt="User avatar"
        src={src}
      />
    </a>
  );
}
