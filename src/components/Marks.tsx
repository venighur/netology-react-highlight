import React from 'react';
import { ListItemType } from '../types';

export const withPopular = (Component: React.FunctionComponent<ListItemType>) => {
  return (props: ListItemType) => {
    return (
      <div className="wrap-item wrap-item-popular">
        <span className="label">Popular!</span>
        <Component {...props} />
      </div>
    );
  }
}

export const withNew = (Component: React.FunctionComponent<ListItemType>) => {
  return (props: ListItemType) => {
    return (
      <div className="wrap-item wrap-item-new">
        <span className="label">New!</span>
        <Component {...props} />
      </div>
    );
  }
}
