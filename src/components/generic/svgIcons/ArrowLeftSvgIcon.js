'use strict';

/**
 * Generic arrow left svg icon
 */
import React, { Component } from 'react';

export default class ArrowLeftSvgIcon extends Component {
  static propTypes = {
    width: React.PropTypes.string,
    color: React.PropTypes.string
  }

  render () {
    const {width, color} = this.props;

    return (
      <svg version='1.1' width={`${width}px`} height={`${width}px`} fill={color} xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 197.402 197.402' style={{enableBackground: 'new 0 0 197.402 197.402'}} xmlSpace='preserve'>
        <polygon points='146.883,197.402 45.255,98.698 146.883,0 152.148,5.418 56.109,98.698 152.148,191.98' />
      </svg>
    );
  }
}
