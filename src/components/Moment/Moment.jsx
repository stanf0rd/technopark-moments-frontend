import React from 'react';

import './Moment.pcss';

import Avatar from '../Avatar';

export default function Moment(props) {
  const { author, location } = props;
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
      </header>
    </article>
  );
}
