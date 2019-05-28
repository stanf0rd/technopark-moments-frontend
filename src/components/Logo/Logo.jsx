import React from 'react';

import './Logo.pcss';

export default function Logo() {
  return (
    <a className="logo" href="/">
      <span className="logo__icon" />
      <div className="logo__separator" />
      <span className="logo__lettering" />
    </a>
  );
}
