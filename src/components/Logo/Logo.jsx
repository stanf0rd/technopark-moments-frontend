import React from 'react';

import './Logo.pcss';

import Icon from '../Icon';

export default function Logo() {
  return (
    <a className="logo" href="/">
      <Icon img="instagram" />
      <div className="logo__separator" />
      <span className="logo__lettering" />
    </a>
  );
}
