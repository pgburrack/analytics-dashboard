/**
 * MenuList
 */
import React, { Component } from 'react';
import shallowEqual from 'react-redux/lib/utils/shallowEqual';
import { Link } from 'react-router';

import classes from 'styles/MenuList.scss';

export default class MenuList extends Component {
  static propTypes = {
    menuTree: React.PropTypes.array,
    subMenu: React.PropTypes.bool,
    parentMenu: React.PropTypes.array,
    changeMenuStatus: React.PropTypes.func
  };

  constructor (props) {
    super(props);

    this.state = {
      activeList: '',
      menuTree: this.props.menuTree,
      parentMenu: this.props.hasOwnProperty('parentMenu') ? this.props.parentMenu : []
    };
  }

  componentDidMount () {
    window.addEventListener('click', this.windowClickHandler, false);
  }

  componentWillUnmount () {
    window.removeEventListener('click', this.windowClickHandler, false);
  }

  windowClickHandler = (event) => {
    let clickedTag = event.target.className;
    if (typeof clickedTag !== 'string') return false;
    if (clickedTag.indexOf('cover') === -1) return false;
    this.props.changeMenuStatus(false);
  }

  componentWillMount () {
    const path = window.location.pathname.split('/');
    if (path.indexOf('performance') > -1) return;
    this.setState({
      menuTree: this.setMenuTreeObj(path, this.state.menuTree)
    });
  }

  componentWillReceiveProps (nextProps) {
    if (!shallowEqual(nextProps.menuTree, this.props.menuTree)) {
      const path = window.location.pathname.split('/');
      this.setState({
        menuTree: this.setMenuTreeObj(path, nextProps.menuTree)
      });
    }
  }

  eventSelectTab = (title) => {
    if (title === this.state.activeList) return;

    const childMenuRef = this.refs.childMenu;
    if (childMenuRef !== undefined) {
      childMenuRef.setState({
        menuTree: this.setMenuTreeObj(title, childMenuRef.state.menuTree),
        activeList: title
      });
    }
    if (this.state.parentMenu.length > 0) {
      this.setState({
        parentMenu: this.setMenuTreeObj(title, this.state.parentMenu)
      });
    }
    this.setState({
      menuTree: this.setMenuTreeObj(title, this.state.menuTree),
      activeList: title
    });
    this.props.changeMenuStatus(false);
  }

  setMenuTreeObj = (title, obj) => {
    return obj.map((item) => {
      if (item.hasOwnProperty('activeList')) delete item['activeList'];
      if (title.indexOf(item.refName) > -1) item['activeList'] = true;
      return item;
    });
  }

  render () {
    const { menuTree } = this.state;

    let refName = '';
    let path = window.location.pathname.split('/');

    let menuList = menuTree.map((node, index) => {
      const urlAdd = node.hasOwnProperty('url') ? node.url + '/' : '#';
      const tabImg = node.hasOwnProperty('icon') ? <span className={classes[`${node.refName}Icon`]}><img src={node.icon} /></span> : '';
      const activeMenu = (node.hasOwnProperty('activeList') || path.indexOf(node.refName) > -1 ? 'active' : '');

      if (node.hasOwnProperty('refName')) refName = node.refName;

      return (
        <li className={`menu-list ${classes['listTab']} ${classes[activeMenu]}`} key={node.title} onClick={this.eventSelectTab.bind(this, refName)}>
          <Link to={urlAdd}
            className='clearfix'
            ref={node.title}>
            {tabImg}
            <span className={classes['MenuTabTitle']} >
              {node.title}
            </span>
          </Link>
        </li>
      );
    });

    return (
      <ul className='menu'>
        {menuList}
      </ul>
    );
  }
}
