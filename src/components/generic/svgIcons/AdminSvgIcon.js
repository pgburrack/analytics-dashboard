/**
 * Generic action logs svg icon
 */
import React, { Component } from 'react';

export default class AdminSvgIcon extends Component {
  static propTypes = {
    width: React.PropTypes.string,
    color: React.PropTypes.string
  }

  render () {
    const {width, color} = this.props;

    return (
      <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' width={`${width}px`} height={`${width}px`} viewBox='0 0 155.739 155.739' style={{enableBackground: 'new 0 0 155.739 155.739'}} xmlSpace='preserve'>
        <g>
          <g>
            <path d='M93.192,25.738c8.326,0,15.073,6.752,15.073,15.081c0,8.325-6.747,15.078-15.073,15.078 c-8.33,0-15.079-6.753-15.079-15.078C78.113,32.49,84.862,25.738,93.192,25.738z' fill={color} />
            <path d='M101.102,73.074c5.354,0,9.692,4.339,9.692,9.691c0,5.356-4.338,9.697-9.692,9.697c-5.356,0-9.693-4.341-9.693-9.697 C91.409,77.413,95.746,73.074,101.102,73.074z' fill={color} />
            <path d='M52.781,155.739h86.949c0,0-25.232-20.279-24.701-42.513c0.317-12.388,24.701-28.158,24.58-62.58 c-0.076-17.311-16.865-46.088-45.371-49.675C65.724-2.62,44.386,3.656,35.062,21.235c-9.335,17.57-10.042,32.999-9.325,35.861 c0.726,2.876,3.769,8.255,3.769,8.255S15.16,87.405,16.049,90.988c0.908,3.596,10.748,5.527,10.748,5.527s0.892,2.497-0.906,7.335 c-1.795,4.846,3.338,10.468,4.88,12.43c1.519,1.954-2.158,8.062-0.908,11.476c1.253,3.398,7.176,7.523,13.986,6.632 c6.819-0.902,15.566-2.504,18.604-3.054C69.312,147.479,52.781,155.739,52.781,155.739z M117.141,90.021l-2.947,4.525 l-2.867-1.883c-1.315,1.353-2.919,2.452-4.714,3.207l0.708,3.371l-5.276,1.1l-0.706-3.364c-1.97,0.032-3.864-0.335-5.602-1.051 l-1.883,2.872l-4.527-2.955l1.877-2.872c-1.346-1.312-2.451-2.912-3.199-4.706l-3.376,0.705l-1.11-5.285l3.38-0.701 c-0.027-1.952,0.333-3.852,1.045-5.598l-2.871-1.882l2.952-4.522l2.876,1.879c1.312-1.36,2.908-2.458,4.711-3.212l-0.708-3.368 l5.28-1.111l0.708,3.374c1.952-0.033,3.853,0.338,5.599,1.048l1.882-2.875l4.52,2.949l-1.878,2.878 c1.351,1.313,2.456,2.905,3.208,4.711l3.357-0.7l1.111,5.28l-3.365,0.7c0.032,1.958-0.338,3.857-1.051,5.604L117.141,90.021z M67.762,30.636l5.218,1.207c1.188-2.685,2.925-5.145,5.157-7.213L75.3,20.086l7.115-4.449l2.84,4.545 c2.835-1.095,5.807-1.581,8.739-1.475l1.2-5.204l8.189,1.883l-1.204,5.203c2.682,1.196,5.128,2.931,7.204,5.158l4.539-2.838 l4.454,7.122l-4.547,2.829c1.097,2.837,1.576,5.811,1.479,8.741l5.202,1.207l-1.888,8.181l-5.215-1.207 c-1.182,2.679-2.917,5.146-5.149,7.212l2.842,4.54l-7.124,4.448l-2.831-4.539c-2.846,1.1-5.817,1.587-8.748,1.475l-1.206,5.204 l-8.178-1.888l1.195-5.204c-2.676-1.186-5.135-2.925-7.194-5.155l-4.55,2.841l-4.45-7.122l4.55-2.834 c-1.1-2.843-1.581-5.806-1.48-8.736l-5.211-1.204L67.762,30.636z' fill={color} />
          </g>
        </g>
      </svg>
    );
  }
}
