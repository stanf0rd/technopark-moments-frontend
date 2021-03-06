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
    description: 'thats my skyscraper bro',
    likesCount: 42034,
    whoLiked: {
      avatar: '/static/img/user.png',
      link: '/cat_with_brush',
      name: 'cat_with_brush',
    },
    commentsCount: 896,
    comments: [
      {
        id: 1,
        author: {
          avatar: '/static/img/user.png',
          link: '/cat_with_brush',
          name: 'cat_with_brush',
        },
        text: 'good skyscraper bro',
      },
      {
        id: 2,
        author: {
          avatar: '/static/img/user.png',
          link: '/cat_with_brush',
          name: 'cat_with_brush',
        },
        text: 'yeah bro best of the best',
      },
      {
        id: 3,
        author: {
          avatar: '/static/img/user.png',
          link: '/cat_with_brush',
          name: 'cat_with_brush',
        },
        text: 'i am so lonely in this angry world',
        time: '10 минут назад',
      },
    ],
  },
  {
    id: 1,
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
    description: 'thats my skyscraper bro',
    likesCount: 663,
    whoLiked: {
      avatar: '/static/img/user.png',
      link: '/cat_with_brush',
      name: 'cat_with_brush',
    },
    commentsCount: 32,
    comments: [
      {
        id: 4,
        author: {
          avatar: '/static/img/user.png',
          link: '/cat_with_brush',
          name: 'cat_with_brush',
        },
        text: 'good skyscraper bro',
      },
      {
        id: 5,
        author: {
          avatar: '/static/img/user.png',
          link: '/cat_with_brush',
          name: 'cat_with_brush',
        },
        text: 'yeah bro best of the best',
      },
      {
        id: 6,
        author: {
          avatar: '/static/img/user.png',
          link: '/cat_with_brush',
          name: 'cat_with_brush',
        },
        text: 'i am so lonely in this angry world',
        time: '10 минут назад',
      },
    ],
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
