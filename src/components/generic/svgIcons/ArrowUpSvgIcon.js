'use strict';

/**
 * Generic arrow up svg icon
 */
import React, { Component } from 'react';

export default class ArrowUpSvgIcon extends Component {
  static propTypes = {
    width: React.PropTypes.string,
    color: React.PropTypes.string
  }

  render () {
    const {width, color} = this.props;

    return (
      <svg version='1.1' width={`${width}px`} height={`${width}px`} fill={color} xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 59.415 59.415' style={{enableBackground: 'new 0 0 59.415 59.415'}} xmlSpace='preserve'>
        <polygon points='29.708,14.147 0,43.854 1.414,45.268 29.708,16.975 58,45.268 59.415,43.854' />
      </svg>
    );
  }
}
