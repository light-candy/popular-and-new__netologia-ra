import React from 'react';
import PropTypes from 'prop-types';
import {Video} from './Video';
import {Article} from './Article';
import {withHighlights} from './withHighlights';
const WrappedVideo = withHighlights(Video);
const WrappedArticle = withHighlights(Article);


export function List(props) {
    return props.list.map(item => {
        switch (item.type) {
          case 'video':
            return WrappedVideo({...item});
          case 'article':
            return WrappedArticle({...item});
        }
    })
};

List.propTypes = {
    list: PropTypes.array
};
