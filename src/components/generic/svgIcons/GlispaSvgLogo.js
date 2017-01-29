/**
 * Generic glispa svg logo
 */
import React, { Component } from 'react';

export default class GlispaSvgLogo extends Component {
  static propTypes = {
    width: React.PropTypes.string
  }

  render () {
    const {width} = this.props;

    return (
      <svg version='1.1' fill='#FFFFFF' width={width} xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 210.9 65' style={{'enableBackground': 'new 0 0 210.9 65'}} xmlSpace='preserve'>
        <g>
          <g>
            <g>
              <path d='M69.1,50.8c0,5-1,8.5-3,10.6c-2,2.1-5.4,3.1-10.3,3.1h-1.6v-0.8h1.4c2.7,0,4.7-0.8,5.8-2.5
                  c1.1-1.7,1.7-4.4,1.7-8.1v-9h-0.7c-2.2,4.1-5.2,6.1-9,6.1c-3.7,0-6.6-1.5-8.7-4.4c-2.2-3-3.3-7-3.3-12.1c0-5.8,1-10.3,3.1-13.5
                  c2.1-3.2,4.9-4.8,8.6-4.8c3.1,0,5.8,1.3,8.4,3.8c1.7,1.7,4.2,2.6,7.6,2.7V50.8z M63.1,25.5c-1.7-4.9-4.2-7.3-7.5-7.3
                  c-4.9,0-7.3,4.8-7.3,14.5c0,9.8,2.4,14.7,7.1,14.7c2.4,0,4.3-1.1,5.7-3.2c1.4-2.1,2.1-5.1,2.1-8.8V25.5z' />
              <path className='st0' d='M91.7,49.5h-6.9c-3.1,0-4.7-2.5-4.7-7.4V9.1c0-3-0.3-5-0.9-5.9c-0.7-1.1-2.2-1.7-4.7-1.7V0.5h11.7v41.6
                  c0,2.5,0.4,4.2,1.1,5.2c0.7,1,2.1,1.4,4.1,1.4h0.3V49.5z' />
              <path className='st0' d='M109.9,49.5H103c-3.1,0-4.7-1.8-4.7-5.3V24.9c0-2.9-0.4-4.9-1.1-6c-0.7-1.1-2.1-1.7-4.1-1.7h-0.4v-1h11.8
                  v25.9c0,2.5,0.4,4.3,1.1,5.3c0.7,1,2.1,1.5,4.1,1.5h0.2V49.5z M105.2,4.4c0,1.1-0.4,2-1.1,2.7c-0.7,0.7-1.6,1.1-2.7,1.1
                  c-1.1,0-1.9-0.4-2.7-1.1c-0.7-0.7-1.1-1.6-1.1-2.7s0.4-2,1.1-2.7c0.7-0.7,1.6-1.1,2.7-1.1c1,0,1.9,0.4,2.7,1.1
                  C104.8,2.4,105.2,3.3,105.2,4.4z' />
              <path className='st0' d='M131.2,22.5c-0.7-3.5-2.9-5.2-6.8-5.2c-1.9,0-3.4,0.5-4.5,1.6c-1.1,1-1.7,2.4-1.7,4c0,1.9,2,4,5.9,6.5
                  c3.9,2.4,6.2,4,7,4.8c1.9,1.8,2.9,4,2.9,6.6c0,2.9-1,5.2-3.1,6.9c-2,1.7-4.8,2.6-8.3,2.6c-2.5,0-4.8-0.5-6.9-1.6
                  c-1.8-0.9-2.7-1.7-2.7-2.5c0-0.7,0.3-1,1-1c0.1,0,0.3,0.1,0.6,0.3c2.9,1.7,5.3,2.6,7.4,2.6c4.4,0,6.6-1.7,6.6-5.1
                  c0-1.9-0.9-3.5-2.7-4.9c-0.1-0.1-2.3-1.5-6.6-4.1c-4.3-2.6-6.4-5.6-6.4-8.7c0-2.9,1-5.2,3-7c2-1.8,4.7-2.7,7.9-2.7
                  c3.2,0,5.9,0.5,8,1.6v5.4H131.2z' />
              <path className='st0' d='M139.7,21.8c0.4,0,0.9,0.1,1.6,0.1c1.9,0,3.7-0.5,5.2-1.6c1.3-1,2.6-2.1,3.9-3.1c1.6-1.1,3.5-1.7,5.6-1.7
                  c3.6,0,6.4,1.5,8.5,4.5c2.1,3,3.1,7.2,3.1,12.6c0,5.6-1.1,9.9-3.3,13c-2.2,3.1-5.3,4.6-9.2,4.6c-3.8,0-7-2.2-9.4-6.6v17.8
                  c0,2.1-1.1,3.1-3.2,3.1c-1.9,0-2.8-0.9-2.8-2.8V21.8z M145.7,35.2c0,8,2.6,12,7.7,12c5.4,0,8.1-4.9,8.1-14.7
                  c0-9.4-2.7-14.2-8.2-14.2c-3.5,0-6,2.8-7.6,8.3V35.2z' />
              <path className='st0' d='M197.4,45.2h-3.5c-1.9,0-3.6,0.6-5.2,1.9c-0.9,0.7-1.7,1.3-2.5,2c-1.2,0.7-2.7,1.1-4.5,1.1
                  c-2.6,0-4.8-0.8-6.5-2.3c-1.8-1.5-2.6-3.4-2.6-5.5c0-6.7,6.3-10.3,18.8-10.7v-4.7c0-3.6-0.4-6.2-1.1-7.9c-0.7-1.7-2-2.5-3.9-2.5
                  c-1.3,0-2.4,0.5-3.3,1.5c-0.9,1-1.4,2.3-1.4,3.8v0.3c0,2.6-1.1,4-3.4,4.2l-4-4c0.3-2.2,1.5-3.9,3.7-5.3c2.2-1.3,5-2,8.4-2
                  c4,0,6.8,1,8.6,2.9c1.7,1.9,2.6,5,2.6,9.4V45.2z M191.3,42.1v-8.8c-8,0.3-12,2.9-12,8c0,1.9,0.5,3.4,1.4,4.5
                  c0.9,1.1,2.1,1.7,3.5,1.7c1.4,0,2.7-0.5,4-1.4C189.6,45,190.6,43.7,191.3,42.1z' />
            </g>
            <g>
              <g>
                <path className='st0' d='M15.2,34.8c2,1.8,6.5,4.7,13.5,8.9c0.3,0.2,0.6,0.4,0.9,0.6c2.7-3,4.4-7.1,4.4-11.5c0-4.2-1.5-8.1-4-11.1
                    c-3.9-5-9.9-9.5-12-15.8c0,0,0-0.1-0.1-0.1c-0.1-0.1-0.2-0.2-0.4-0.2c-0.2,0-0.4,0.3-0.5,0.3c-1.3,1.4-5.9,5.7-9.8,11.3
                    c0.1,0.5,0.1,1,0.2,1.5C8.3,25.2,10.9,30.6,15.2,34.8z' />
                <path className='st0' d='M1,32.7c0,9.4,7.4,17,16.5,17c4.8,0,9.1-2.1,12.1-5.4c-0.3-0.2-0.6-0.4-0.9-0.6c-7-4.2-11.5-7.1-13.5-8.9
                    c-4.3-4.2-6.9-9.6-7.8-16.3c-0.1-0.5-0.1-1-0.2-1.5c-2.2,3.1-4.2,6.6-5.3,10.2C1.3,28.9,1,30.7,1,32.7z' />
              </g>
              <g>
                <path className='st0' d='M2.2,28.7C3.9,22,8.4,15.5,12,11C8.3,15.1,3.7,21,1.9,27.2C1.3,28.9,1,30.7,1,32.7c0,1.6,0.2,3.1,0.6,4.6
                    c-0.1-0.8-0.2-1.7-0.2-2.6C1.4,32.6,1.7,30.6,2.2,28.7z' />
                <path className='st0' d='M33.2,33.2c0,4-1.3,7.7-3.4,10.7c2.6-3,4.1-6.9,4.1-11.2c0-4.2-1.5-8.1-4-11.1c-3.9-5-9.9-9.5-12-15.8
                    c0,0,0-0.1-0.1-0.1c-0.1-0.1-0.2-0.2-0.4-0.2c-0.1,0-0.3,0.1-0.4,0.2c2.1,6.5,8.1,11,12.1,16.2C31.7,24.8,33.2,28.8,33.2,33.2z' />
                <path className='st0' d='M10.2,45.7c-1-0.7-3.4-3.4-5-4.9c-1.8-1.6-2.3-1.2-2.5-0.6c2.7,5.6,8.3,9.4,14.8,9.4c1.8,0,3.5-0.3,5.1-0.8
                    c-1.3-0.1-3.7-0.1-4.6-0.2C15.9,48.3,12.3,47.1,10.2,45.7z' />
              </g>
              <path className='st0' d='M5.1,27.2c2.3-7.2,7.5-14,11.8-18.7c-4.3,4.3-9.7,10.4-12.1,17c-0.7,1.8-1.2,3.8-1.3,5.9
                  c-0.1,1.7,0,3.4,0.4,5c-0.1-0.9-0.1-1.9-0.1-2.8C3.9,31.4,4.3,29.2,5.1,27.2z' />
            </g>
          </g>
          <g>
            <path className='st0' d='M201.5,10c0-0.7,0.2-1.3,0.5-1.9c0.3-0.6,0.8-1.1,1.4-1.4c0.6-0.3,1.2-0.5,1.9-0.5c0.7,0,1.3,0.2,1.9,0.5
              c0.6,0.3,1.1,0.8,1.4,1.4c0.3,0.6,0.5,1.3,0.5,2c0,0.7-0.2,1.3-0.5,1.9c-0.3,0.6-0.8,1.1-1.4,1.4c-0.6,0.4-1.2,0.5-1.9,0.5
              c-0.7,0-1.3-0.2-1.9-0.5c-0.6-0.4-1-0.8-1.4-1.4C201.7,11.3,201.5,10.7,201.5,10z M202.1,10c0,0.6,0.1,1.1,0.4,1.6
              c0.3,0.5,0.7,0.9,1.2,1.2c0.5,0.3,1,0.4,1.6,0.4c0.6,0,1.1-0.1,1.6-0.4c0.5-0.3,0.9-0.7,1.2-1.2c0.3-0.5,0.4-1,0.4-1.6
              c0-0.6-0.1-1.1-0.4-1.6c-0.3-0.5-0.7-0.9-1.2-1.2c-0.5-0.3-1-0.4-1.6-0.4c-0.6,0-1.1,0.1-1.6,0.4c-0.5,0.3-0.9,0.7-1.2,1.2
              C202.3,8.9,202.1,9.4,202.1,10z M206.9,9.1c0,0.6-0.3,1-0.8,1.2l1.2,2.1h-1.1l-1-1.8h-0.5v1.8h-1V7.7h1.3c0.6,0,1,0.1,1.3,0.4
              C206.7,8.2,206.9,8.6,206.9,9.1z M204.8,9.8h0.3c0.2,0,0.4-0.1,0.6-0.2c0.1-0.1,0.2-0.3,0.2-0.5c0-0.2-0.1-0.4-0.2-0.5
              c-0.1-0.1-0.3-0.1-0.6-0.1h-0.3V9.8z' />
          </g>
        </g>
      </svg>
    );
  }
}

