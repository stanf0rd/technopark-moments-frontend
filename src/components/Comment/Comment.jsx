import React from 'react';

import './Comment.pcss';

export default function Comment({ author, text }) {
  return (
    <span>
      <span className="comment__author">{author.name}</span>
      &nbsp
      <span>{text}</span>
    </span>
  );
}
