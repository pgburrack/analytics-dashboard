'use strict';

/**
 * Generic arrow right svg icon
 */
import React, { Component } from 'react';

export default class ArrowRightSvgIcon extends Component {
  static propTypes = {
    width: React.PropTypes.string,
    color: React.PropTypes.string
  }

  render () {
    const {width, color} = this.props;

    return (
      <svg version='1.1' width={`${width}px`} height={`${width}px`} fill={color} xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 59.414 59.414' style={{enableBackground: 'new 0 0 59.414 59.414'}} xmlSpace='preserve'>
        <polygon points='58,14.146 29.707,42.439 1.414,14.146 0,15.561 29.707,45.268 59.414,15.561'/>
      </svg>
    );
  }
}
