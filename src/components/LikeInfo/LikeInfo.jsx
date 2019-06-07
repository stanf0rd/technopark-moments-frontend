/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import './LikeInfo.pcss';

import Avatar from '../Avatar';

export default function LikeInfo({ momentID, likesCount, whoLiked }) {
  if (whoLiked) {
    return (
      <div className="like-info">
        <Avatar
          src={whoLiked.avatar}
          href={whoLiked.link}
          size="nano"
        />
        &nbsp;&nbsp;<span className="like-info__light-text">Нравится</span>
        &nbsp;<a href={whoLiked.link}>{whoLiked.name}</a>
        &nbsp;<span className="like-info__light-text">и</span>
        &nbsp;<a href={`/${momentID}/likes`}>ещё {likesCount - 1}</a>
      </div>
    );
  }

  return (
    <div className="like-info">
      {likesCount}
      &nbsp;отметок &quot;Нравится&quot;
    </div>
  );
}
