'use strict';

/**
 * Generic info svg icon
 */
import React, { Component } from 'react';

export default class InfoSvgIcon extends Component {
  static propTypes = {
    width: React.PropTypes.string,
    color: React.PropTypes.string
  }

  render () {
    const {width, color} = this.props;

    return (
      <svg version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        width={`${width}px`}
        height={`${width}px`}
        viewBox='0 0 453.725 453.725'
        style={{enableBackground: 'new 0 0 453.725 453.725'}}
        xmlSpace='preserve'
        fill={color}>
        <polygon points='248.374,421.928 288.675,150.442 145.771,150.442 145.771,182.241 192.257,182.241 151.956,453.725 295.345,453.725 295.345,421.928' />
        <circle cx='246.587' cy='61.367' r='61.367' />
      </svg>
    );
  }
}

