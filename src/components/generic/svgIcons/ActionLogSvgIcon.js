/**
 * Generic action logs svg icon
 */
import React, { Component } from 'react';

export default class ActionLogSvgIcon extends Component {
  static propTypes = {
    width: React.PropTypes.string,
    color: React.PropTypes.string
  }

  render () {
    const {width, color} = this.props;

    return (
      <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' version='1.1' id='Layer_1' x='0px' y='0px' width={`${width}px`} height={`${width}px`} viewBox='0 0 512 512' enableBackground='new 0 0 512 512' xmlSpace='preserve'>
        <g>
          <path d='M477.867,0H34.134C15.292,0,0,15.292,0,34.134v443.733C0,496.7,15.292,512,34.134,512h443.733   C496.7,512,512,496.7,512,477.867V34.134C512,15.292,496.7,0,477.867,0z M477.867,477.867H34.134V34.134h443.733V477.867z M119.467,273.066h273.066c9.417,0,17.066-7.649,17.066-17.066s-7.649-17.066-17.066-17.066H119.467 c-9.417,0-17.066,7.649-17.066,17.066S110.05,273.066,119.467,273.066z M119.467,170.667h273.066 c9.417,0,17.066-7.65,17.066-17.067c0-9.416-7.649-17.066-17.066-17.066H119.467c-9.417,0-17.066,7.65-17.066,17.066 C102.4,163.017,110.05,170.667,119.467,170.667z M119.467,375.467h273.066c9.417,0,17.066-7.65,17.066-17.066 c0-9.417-7.649-17.067-17.066-17.067H119.467c-9.417,0-17.066,7.65-17.066,17.067C102.4,367.816,110.05,375.467,119.467,375.467z' fill={color} />
        </g>
      </svg>
    );
  }
}
