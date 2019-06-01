import React from 'react';

import './Actions.pcss';

import Button from '../Button';

export default function Actions() {
  const buttonSize = 'middle';
  return (
    <div className="actions">
      <Button
        img="like"
        size={buttonSize}
      />
      <Button
        img="comment"
        size={buttonSize}
      />
      <Button
        img="share"
        size={buttonSize}
      />
    </div>
  );
}
