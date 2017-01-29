import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import shallowEqual from 'react-redux/lib/utils/shallowEqual';
import { actionCreators } from 'actions/core_layout';
import { authActionsCreators } from 'actions/auth_actions';

import SideMenu from 'containers/SideMenu';
import classes from 'styles/core.scss';

// function setNavTitleObj (newPath) {
//   let navObj = newPath.split('/').filter((title) => title.length > 0);
//   let navTitleObj = { main: '', sub: '' };
//   navObj.pop();
//   navTitleObj.main = navObj[0];
//   if (navObj.length > 1) navTitleObj.sub = navObj[1];
//   return navTitleObj;
// }

class CoreLayout extends React.Component {
  static propTypes = {
    children: React.PropTypes.element,
    actions: React.PropTypes.object,
    navTitle: React.PropTypes.object,
    menuTree: React.PropTypes.array,
    addedMenu: React.PropTypes.array,
    location: React.PropTypes.object,
    history: React.PropTypes.object,
    fetchUserAuth: React.PropTypes.object,
    menuStatus: React.PropTypes.bool
  }

  constructor (props) {
    super(props);
    let finalMenuTree = this.props.menuTree.concat(this.props.addedMenu);
    this.state = {
      menuTree: finalMenuTree
    };
  }

  render () {
    const {menuTree} = this.state;
    const {actions, history, fetchUserAuth, menuStatus} = this.props;
    let activeMenu = menuStatus ? 'active' : '';

    return (
      <div id={classes.pageContainer}>
        <div id={classes.wrapper}>
          <SideMenu menuStatus={activeMenu}
            menuTree={menuTree}
            actions={actions}
            fetchUserAuth={fetchUserAuth}
            history={history} />
          <div className={`${classes['view-container']} ${classes.hasOwnProperty(activeMenu) ? classes[activeMenu] : ''}`}>
            <div className={`${classes['cover']} ${classes.hasOwnProperty(activeMenu) ? classes[activeMenu] : ''}`}></div>
          {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  menuStatus: state.menuStatus,
  fetchUserAuth: state.fetchUserAuth,
  menuTree: state.menuTree,
  navTitle: state.navTitle,
  addedMenu: state.addedMenu,
  routerState: state.router
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Object.assign(actionCreators, authActionsCreators), dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout);
