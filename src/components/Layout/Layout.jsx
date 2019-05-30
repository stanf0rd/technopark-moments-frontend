import React from 'react';

import Headline from '../Headline';
import Content from '../Content';
import Footer from '../Footer';

import './Layout.pcss';

export default function Layout() {
  return (
    <section className="layout">
      <Headline />
      <Content />
      <Footer />
    </section>
  );
}
