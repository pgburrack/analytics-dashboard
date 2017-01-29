'use strict';
import React, { Component } from 'react';
import classes from 'styles/generic/SwitchBtnCompDef.scss';

export default class SwitchBtnComp extends Component {
  static propTypes = {
    activeState: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    disabledInp: React.PropTypes.bool
  }

  render () {
    const { activeState, disabledInp } = this.props;
    let randomStr = Math.random().toString(36).substring(7);
    return (
      <div className={classes['switch-wrapper']}>
        <input
          id={`toggle_${randomStr}`}
          className={`${classes['cmn-toggle']} ${classes['cmn-toggle-round-flat']}`}
          type='checkbox'
          checked={activeState}
          disabled={disabledInp}
          onChange={this.props.onChange} />
        <label htmlFor={`toggle_${randomStr}`}>
          <span className={classes['onBtn']}>ON</span>
          <span className={classes['offBtn']}>OFF</span>
        </label>
      </div>
    );
  }
}
