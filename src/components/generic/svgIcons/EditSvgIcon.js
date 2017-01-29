'use strict';

/**
 * Generic edit svg icon
 */
import React, { Component } from 'react';

export default class EditSvgIcon extends Component {
  static propTypes = {
    width: React.PropTypes.string,
    color: React.PropTypes.string
  }

  render () {
    const {width, color} = this.props;

    return (
      <svg
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        viewBox='0 0 493.638 493.638'
        style={{enableBackground: 'new 0 0 493.638 493.638'}}
        xmlSpace='preserve'
        width={`${width}px`}
        height={`${width}px`}
        fill={color}>
        <polygon points='427.092,118.538 99.89,445.738 90.239,436.086 417.439,108.885 358.708,50.154 31.376,377.481 116.022,462.13 443.351,134.798' />
        <path d='M492.627,85.523c-10.064,23.448-43.053,43.053-43.053,43.053l-84.646-84.644 c0,0,27.29-33.513,43.054-43.053S502.692,62.074,492.627,85.523z' />
        <polygon points='110.059,468.088 0.127,493.638 25.413,383.447' />
      </svg>
    );
  }
}

