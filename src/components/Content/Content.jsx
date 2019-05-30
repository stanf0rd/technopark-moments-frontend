import React from 'react';

import './Content.pcss';

import Feed from '../Feed';

export default function Content() {
  return (
    <main className="content">
      <div className="content__main-column">
        <Feed itemsCount="45" />
      </div>
    </main>
  );
}
