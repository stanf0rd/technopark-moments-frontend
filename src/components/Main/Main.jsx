import React from 'react';

import './Main.pcss';

import Feed from '../Feed';

export default function Main() {
  return (
    <main className="main">
      <Feed itemsCount="45" />
    </main>
  );
}
