import React from 'react';

import './Icon.pcss';

export default function Icon({
  img,
  href,
  size,
  onClick,
}) {
  const className = `icon__${img} icon__${size || 'middle'}`;
  if (href) {
    return (
      <a className="icon__link-wrapper" href={href}>
        <div className={`icon ${className}`} />
      </a>
    );
  }

  if (onClick) {
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyPress={onClick}
        className={`icon icon_clickable ${className}`}
      />
    );
  }

  return (
    <div className={`icon ${className}`} />
  );
}
