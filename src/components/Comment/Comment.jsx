import React from 'react';

import './Comment.pcss';

import Button from '../Button';

export default function Comment({ author, text, id }) {
  return (
    <div className="comment">
      <span>
        <span className="comment__author">{author.name}</span>
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
