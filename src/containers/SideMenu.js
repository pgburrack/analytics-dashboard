import React, { Component } from 'react';
import MenuList from 'components/side_menu/MenuList';
import { removeLocalStorage } from 'utils';
import GlispaSvgLogo from 'components/generic/svgIcons/GlispaSvgLogo';

import classes from 'styles/SideMenu.scss';

export default class SideMenu extends Component {
  static propTypes = {
    actions: React.PropTypes.object,
    menuStatus: React.PropTypes.string,
    menuTree: React.PropTypes.array,
    fetchUserAuth: React.PropTypes.object,
    confInfo: React.PropTypes.object
  }

  constructor (props) {
    super(props);
    this.state = {
      menuStatus: this.props.menuStatus,
      userMenuStatus: 'userMenu'
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.menuStatus === this.props.menuStatus) return false;
    this.setState({
      menuStatus: nextProps.menuStatus
    });
  }

  closeMenuEvent = () => {
    this.props.actions.changeMenuStatus(false);
  }

  userBoxMouseOver = () => this.setState({ userMenuStatus: '' });

  userBoxMouseOut = (event) => {
    if (event.currentTarget.parentNode.className.indexOf('listTab') === -1) return false;
    this.setState({ userMenuStatus: 'userMenu' });
  }

  userMenuMouseLeave = (event) => this.setState({ userMenuStatus: 'userMenu' });

  signOutUser = () => {
    this.props.actions.logoutUser();
    removeLocalStorage('token');
    window.location = '/login';
  }

  render () {
    const { fetchUserAuth, actions } = this.props;
    const { menuStatus, userMenuStatus } = this.state;
    let sideBarActive = menuStatus === 'active' ? 'activeWrapper' : '';

    return (
      <div className={`sidebar-wrapper ${sideBarActive}`}>
        <div className={`inside-wrapper ${menuStatus}`}>
          <div className={`${classes['logobox']} clearfix`}>
            <span className={`${classes['side-menu-logo']}`}>
              <GlispaSvgLogo width='130' />
            </span>
            <svg onClick={this.closeMenuEvent} className={classes['close-menu']} xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 149.337 149.337' enableBackground='new 0 0 149.337 149.337' xmlSpace='preserve' width='20' height='20'>
              <polygon points='149.337,143.96 80.044,74.668 149.336,5.376 143.96,0 74.668,69.292 5.377,0 0.001,5.376   69.292,74.668 0,143.96 5.376,149.336 74.668,80.044 143.961,149.336 ' fill='#979797' />
            </svg>
          </div>
          <div className={classes['menu-list']}>
            <MenuList menuTree={this.props.menuTree} subMenu={false} changeMenuStatus={actions.changeMenuStatus} />
          </div>
          <div className={classes['user-tab']} onMouseLeave={this.userMenuMouseLeave}>
            <ul className='menu'>
              <li className={`menu-list ${classes['listTab']} ${classes['sub-menu']} ${classes[userMenuStatus]}`} onClick={this.signOutUser}>
                <span className={classes['user-title']}>sign out</span>
              </li>
              <li className={`menu-list ${classes['listTab']} ${classes['user-list']}`} onMouseEnter={this.userBoxMouseOver} onMouseLeave={this.userBoxMouseOut}>
                <div className={`${classes['user-box']} clearfix`} >
                  <span className={classes['user-title']}>{fetchUserAuth.userEmail}</span>
                  <span className={classes['user-menu-arrow']}>
                    <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' version='1.1' x='0px' y='0px' viewBox='0 0 407.436 407.436' style={{enableBackground: 'new 0 0 407.436 407.436'}} xmlSpace='preserve' width='14' height='14'>
                      <polygon points='203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621' fill='#fff' />
                    </svg>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
