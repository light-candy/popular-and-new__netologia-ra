import React from 'react';
import {Popular} from './Popular';
import {New} from './New';

export const withHighlights = (Component) => (props) => {
    if (props.views < 100) {
      return(
        <New>
          <Component {...props} />
        </New>
      );
    } else if (props.views >= 1000) {
      return(
          <Popular>
            <Component {...props} />
          </Popular>
        );
    }
};
