'use strict';

import React, {Component} from 'react';
import classes from 'styles/ContainerHeader.scss';
import GlispaMenuSvgLogo from 'components/generic/svgIcons/GlispaMenuSvgLogo';

export default class ContainerHeader extends Component {
  static propTypes = {
    actions: React.PropTypes.object,
    children: React.PropTypes.element,
    headerTitle: React.PropTypes.string,
    SvgIcon: React.PropTypes.element,
    handleClick: React.PropTypes.func,
    showPointer: React.PropTypes.bool
  };

  static defaultProps = {
    handleClick: () => {},
    showPointer: false
  };
  // constructor (props) {
  //   super(props);
  // }

  activateMenu = () => this.props.actions.changeMenuStatus(true);

  render () {
    const { children, headerTitle, SvgIcon, handleClick, showPointer } = this.props;
    let svgClass = showPointer ? 'show-pointer' : '';

    return (
      <div className={`${classes['header-wrapper']} clearfix`}>
        <span className={classes['logo-btn']} onClick={this.activateMenu}>
          <GlispaMenuSvgLogo width='35' />
        </span>
        <div className={`${classes['title-wrapper']} clearfix`}>
          <span className={`${classes[svgClass]} ${classes['title-icon']}`} onClick={handleClick}>
            {SvgIcon}
          </span>
          <span className={classes['title-text']}>{headerTitle}</span>
        </div>
        <div className={classes['header-content']}>
          {children}
        </div>
      </div>
    );
  }
}
