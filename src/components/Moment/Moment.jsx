import React from 'react';

import './Moment.pcss';

import Avatar from '../Avatar';
import Icon from '../Icon';

export default function Moment(props) {
  const { author, location, image } = props;
  const locationHref = `/location/${location}`;
  return (
    <article className="moment">
      <header className="moment__header">
        <Avatar
          src={author.avatar}
          size="small"
          href={author.link}
        />
        <div className="moment__info">
          <a className="moment__author" href={author.link}>{author.name}</a>
          <a className="moment__location" href={locationHref}>{location}</a>
        </div>
        <Icon img="options" size="middle" onClick={() => alert(1)} />
      </header>
      <img
        className="moment__image"
        src={image.src}
        alt={image.alt}
      />
    </article>
  );
}
