import React from 'react';

import './Comment.pcss';

import Button from '../Button';

export default function Comment({ author, text, id }) {
  return (
    <div className="comment">
      <span>
        <a href={author.link} className="comment__author">{author.name}</a>
        &nbsp;
        <span>{text}</span>
      </span>
      {id && (
        <div className="comment__like">
          <Button img="mini-like" size="small" />
        </div>
      )}
    </div>
  );
}
