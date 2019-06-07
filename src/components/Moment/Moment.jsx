/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import './Moment.pcss';

import Avatar from '../Avatar';
import Icon from '../Icon';
import Actions from '../Actions';
import Comment from '../Comment';
import CommentBox from '../CommentBox';
import CommentForm from '../CommentForm';

export default function Moment(props) {
  const {
    author,
    description,
    location,
    image,
    comments,
    commentsCount,
    likesCount = 0,
  } = props;
  const locationHref = `/location/${location}`;

  console.log('here');

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
      <div className="moment__section moment__actions">
        <Actions />
      </div>
      <div className="moment__section">
        <div className="moment__likes-count">
          {likesCount}
          &nbsp;отметок &quot;Нравится&quot;
        </div>
      </div>
      <div className="moment__section">
        <Comment author={author} text={description} />
      </div>
      <div className="moment__section moment__show-comments">
        <button type="button" className="moment__show-comments-button">
          Посмотреть все комментарии
          ({commentsCount})
        </button>
      </div>
      <div className="moment__section">
        <CommentBox comments={comments} />
      </div>
      <div className="moment__section moment__comment-form">
        <CommentForm />
      </div>
    </article>
  );
}
