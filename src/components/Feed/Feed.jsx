import React from 'react';

import './Feed.pcss';

import Moment from '../Moment';

const mockMoments = [
  {
    author: {
      avatar: '/static/img/user.png',
      link: '/cat_with_brush',
      name: 'cat_with_brush',
    },
    location: 'Moscow, Russia',
  },
  {
    author: {
      avatar: '/static/img/user.png',
      link: '/cat_with_brush',
      name: 'cat_with_brush',
    },
  },
  {
    author: {
      avatar: '/static/img/user.png',
      link: '/cat_with_brush',
      name: 'cat_with_brush',
    },
  },
  {
    author: {
      avatar: '/static/img/user.png',
      link: '/cat_with_brush',
      name: 'cat_with_brush',
    },
  },
];

export default function Feed() {
  return (
    <div className="feed">
      {mockMoments.map(moment => <Moment {...moment} />)}
    </div>
  );
}
