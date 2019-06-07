import React from 'react';

import './CommentBox.pcss';

import Comment from '../Comment';

export default function CommentBox({ comments }) {
  const lastTime = comments[comments.length - 1].time;

  return (
    <div>
      <div className="comment-box">
        {comments.map(({ id, author, text }) => (
          <Comment
            id={id}
            key={id.toString()}
            author={author}
            text={text}
          />
        ))}
      </div>
      <div className="comment-box__last-time">
        {lastTime.toUpperCase()}
      </div>
    </div>
  );
}
