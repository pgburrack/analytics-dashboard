'use strict';

/**
 * Generic search svg icon
 */
import React, { Component } from 'react';

export default class SearchSvgIcon extends Component {
  static propTypes = {
    width: React.PropTypes.string,
    color: React.PropTypes.string,
    className: React.PropTypes.string
  }

  render () {
    const {width, color, className} = this.props;

    return (
      <svg version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        x='0px'
        y='0px'
        width={`${width}px`}
        height={`${width}px`}
        fill={color}
        viewBox='0 0 446.25 446.25'
        className={className}
        style={{enableBackground: 'new 0 0 446.25 446.25'}}
        xmlSpace='preserve'>
        <path d='M318.75,280.5h-20.4l-7.649-7.65c25.5-28.05,40.8-66.3,40.8-107.1C331.5,73.95,257.55,0,165.75,0S0,73.95,0,165.75
          S73.95,331.5,165.75,331.5c40.8,0,79.05-15.3,107.1-40.8l7.65,7.649v20.4L408,446.25L446.25,408L318.75,280.5z M165.75,280.5
          C102,280.5,51,229.5,51,165.75S102,51,165.75,51S280.5,102,280.5,165.75S229.5,280.5,165.75,280.5z' />
      </svg>
    );
  }
}
