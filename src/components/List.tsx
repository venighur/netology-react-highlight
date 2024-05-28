import React from 'react';
import Video from './Video';
import Article from './Article';
import { ListItemType } from '../types';
import { withPopular, withNew } from './Marks';

type ListProps = {
  list: ListItemType[]
}

function List(props: ListProps) {
  return (
    <>
      {props.list.map(item => {
        switch (item.type) {
          case 'video':
            if (item.views > 1000) {
              return withPopular(Video)(item);
            }

            if (item.views < 100) {
              return withNew(Video)(item);
            }

            return <Video {...item} />;

          case 'article':
            if (item.views > 1000) {
              return withPopular(Article)(item);
            }

            if (item.views < 100) {
              return withNew(Article)(item);
            }

            return <Article {...item} />;
        }
      })}
    </>
  );
}

export default List;
