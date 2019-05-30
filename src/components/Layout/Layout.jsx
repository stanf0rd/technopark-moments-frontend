import React from 'react';

import Headline from '../Headline';
import Main from '../Main';
import Footer from '../Footer';

import './Layout.pcss';

export default function Layout() {
  return (
    <section className="layout">
      <Headline />
      <Main />
      <Footer />
    </section>
  );
}
