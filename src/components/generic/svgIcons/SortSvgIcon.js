'use strict';
/**
 * Generic sort svg icon
 */
import React, { Component } from 'react';

export default class SortSvgIcon extends Component {
  static propTypes = {
    width: React.PropTypes.string,
    color: React.PropTypes.string
  }

  render () {
    const {width, color} = this.props;

    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        version='1.1'
        width={`${width}px`}
        height={`${width}px`}
        viewBox='0 0 16 16'
        fill={color}>
        <path d='M11 7h-6l3-4z' />
        <path d='M5 9h6l-3 4z' />
      </svg>
    );
  }
}
