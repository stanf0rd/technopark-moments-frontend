// import React, { Component } from 'react';
import React from 'react';
import './Headline.pcss';

import Logo from '../Logo';
import Search from '../Search';
import Iconblock from '../Iconblock';

export default function Headline() {
  return (
    <nav className="headline">
      <div className="headline__content">
        <Logo />
        <Search />
        <Iconblock />
      </div>
    </nav>
  );
}
