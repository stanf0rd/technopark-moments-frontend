import React from 'react';

import './CommentForm.pcss';

export default function CommentForm() {
  return (
    <form className="comment-form">
      <textarea
        aria-label="Добавьте комментарий..."
        placeholder="Добавьте комментарий..."
        className="comment-form__input"
      />
      <button
        type="submit"
        className="comment-form__button"
        disabled
      >
        Опубликовать
      </button>
    </form>
  );
}
