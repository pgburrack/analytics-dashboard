'use strict';
/**
 * Generic close svg icon
 */
import React, { Component } from 'react';

export default class CloseSvgIcon extends Component {
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
        x='0px'
        y='0px'
        viewBox='0 0 149.337 149.337'
        style={{enableBackground: 'new 0 0 149.337 149.337'}}
        id='closeIcon'
        xmlSpace='preserve'
        width={`${width}px`}
        height={`${width}px`}
        fill={color}>
        <polygon points='149.337,143.96 80.044,74.668 149.336,5.376 143.96,0 74.668,69.292 5.377,0 0.001,5.376 69.292,74.668 0,143.96 5.376,149.336 74.668,80.044 143.961,149.336' />
      </svg>
    );
  }
}
