import React, { Component } from 'react';
import css from 'styles/generic/Tooltip.scss';

export default class Tooltip extends Component {
  static propTypes = {
    onCancel: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    title: React.PropTypes.string,
    submitText: React.PropTypes.string,
    active: React.PropTypes.bool
  };

  static defaultProps = {
    active: false,
    onCancel: () => {},
    onSubmit: () => {},
    title: '',
    submitText: 'OK'
  };

  // constructor (props) {
  //   super(props);
  // }

  render () {
    const { onCancel, onSubmit, title, submitText, active } = this.props;

    return (
      <div className={`${css['tooltip']} ${active ? css['active'] : ''}`}>
        <p className={`${css['title']}`}>{title}</p>
        <div className='flex justify-content-center'>
          <button className={`yellow-btn ${css['delete-button']}`} onClick={onSubmit} type='button'>{submitText}</button>
          <button className={`cancel-button ${css['cancel-button']}`} onClick={onCancel} type='button'>Cancel</button>
        </div>
      </div>
    );
  }
}
