/**
 * Generic performance svg icon
 */
import React, { Component } from 'react';

export default class PerformanceSvgIcon extends Component {
  static propTypes = {
    width: React.PropTypes.string,
    color: React.PropTypes.string
  }

  render () {
    const {width, color} = this.props;

    return (
      <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
        width={`${width}px`} height={`${width}px`} viewBox='0 0 1024 1024' enableBackground='new 0 0 1024 1024' xmlSpace='preserve' fill={color}>
        <g>
          <rect y='768.2' width='197' height='255.8'/>
          <rect x='275.6' y='512' width='197.2' height='512'/>
          <rect x='551.4' width='197' height='1024'/>
          <rect x='826.8' y='256.2' width='197.2' height='767.8'/>
        </g>
      </svg>
    );
  }
}
