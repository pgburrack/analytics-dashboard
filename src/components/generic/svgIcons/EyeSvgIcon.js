
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
      <svg xmlns='http://www.w3.org/2000/svg'
        width={`${width}px`}
        height={`${width}px`}
        viewBox='0 0 22.3 20.83'
        fill='none'
        stroke={color}
        strokeLinecap='square'
        strokeMiterlimit='10'
        strokeWidth='2px'>
        <path d='M2,12S6,5,12,5s10,7,10,7-4,7-10,7S2,12,2,12Z' transform='translate(-0.85 -1.59)' />
        <circle cx='11.15' cy='10.41' r='3' />
        <line x1='2.15' y1='19.41' x2='20.15' y2='1.41' />
      </svg>
    );
  }
}
