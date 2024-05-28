import React from 'react';
import { ListItemType } from '../types';

function Video(props: ListItemType) {
  return (
    <div className="item item-video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" title={props.title} allowFullScreen />
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
}

export default Video;
