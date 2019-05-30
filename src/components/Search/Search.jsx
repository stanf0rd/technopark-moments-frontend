import React from 'react';

import './Search.pcss';

import Icon from '../Icon';

export default function Search() {
  return (
    <div className="search">
      {/* <input className="search__input" /> */}
      <div className="search__button" role="button">
        <span className="search__icon">
          <Icon img="search" size="small" />
        </span>
        <span className="search__text">
          Поиск
        </span>
      </div>
    </div>
  );
}
