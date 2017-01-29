import React, { Component } from 'react';
import css from 'styles/generic/Spinner.scss';

export default class Spinner extends Component {
  static propTypes = {
    className: React.PropTypes.string,
    show: React.PropTypes.bool,
    large: React.PropTypes.bool,
    showLabel: React.PropTypes.bool
  };

  static defaultProps = {
    className: '',
    show: false,
    showLabel: false,
    large: false
  };

  render () {
    const { className, show, large, showLabel } = this.props;

    return (
      <div className={`${className} ${!show ? 'hide' : ''}`}>
        <div className={`${css['spinner']} ${large ? css['spinner-large'] : ''}`}>
        </div>
        <span className={`${css['label']} ${!showLabel ? 'hide' : ''}`}>Loading...</span>
      </div>
    );
  }
}
