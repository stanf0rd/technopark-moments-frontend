import React from 'react';

import './Feed.pcss';

import Moment from '../Moment';

const mockMoments = [
  {
    id: 0,
    author: {
      avatar: '/static/img/user.png',
      link: '/cat_with_brush',
      name: 'cat_with_brush',
    },
    location: 'Moscow, Russia',
    image: {
      src: '/static/img/first_photo.jpg',
      alt: 'Sky and skyscrapers',
    },
  },
];

export default function Feed() {
  return (
    <div className="feed">
      {mockMoments.map(moment => (
        <Moment
          key={moment.id.toString()}
          {...moment}
        />
      ))}
    </div>
  );
}
