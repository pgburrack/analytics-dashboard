'use strict';

/**
 * Generic lock svg icon
 */
import React, { Component } from 'react';

export default class LockSvgIcon extends Component {
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
        viewBox='0 0 502.686 502.686'
        style={{enableBackground: 'new 0 0 502.686 502.686'}}
        xmlSpace='preserve'
        width={`${width}px`}
        height={`${width}px`}
        fill={color}>
        <path d='M403.676,221.014v-68.746C403.697,68.293,335.339,0,251.407,0
          C167.411,0,99.096,68.293,99.096,152.268v68.768H66.373v281.65h369.939V221.014H403.676z M156.453,152.268
          c0-52.309,42.581-94.825,94.933-94.825c52.266,0,94.825,42.538,94.825,94.825v68.768H156.453V152.268z M277.551,425.462h-52.266
          l7.83-77.202c-9.664-6.018-16.178-16.76-16.178-29.077c0-18.961,15.402-34.362,34.47-34.362
          c18.961,0,34.319,15.402,34.319,34.362c0,12.317-6.407,23.038-16.157,29.077L277.551,425.462z' />
      </svg>
    );
  }
}

