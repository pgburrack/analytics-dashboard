import moment from 'moment';
import jwt from 'jwt-simple';
import { jwtPrefix } from './constants';

export function createConstants (...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

export function createReducer (initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type];
    return reducer ? reducer(state, action.payload) : state;
  };
}

/**
 * sort Array of Objects by key
 * @param  {[type]} Arr [description]
 * @param  {[type]} key [description]
 * @return {[type]}     [description]
 */
export function sortBy (Arr, key) {
  return Arr.sort(function (a, b) {
    return (a[key] > b[key]) ? 1 : ((b[key] > a[key]) ? -1 : 0);
  });
};

/**
 * set encrypt local storage key
 * @param {string} key   localStorage key
 * @param {object} value encrypt string object
 */
export function setLocalStorage (key, value) {
  localStorage.setItem(key, jwt.encode(value, jwtPrefix));
}

/**
 * get and decrypt local storage key
 * @param  {string} key localStorage key
 * @return {object}     decrypt object
 */
export function getLocalStorage (key) {
  if (!localStorage.getItem(key)) return;
  return jwt.decode(localStorage.getItem(key), jwtPrefix);
}

/**
 * remove local storage key
 * @param  {string} key localStorage key
 */
export function removeLocalStorage (key) {
  return localStorage.removeItem(key);
}

/**
 * set user authentication session
 * @param {object} user user details object
 */
export function setUserSession (obj) {
  const time = moment().add(2, 'hours').unix();
  setLocalStorage('token', Object.assign({sessionTime: time}, obj));
  return time;
}
/**
 * menu tree object
 * @type {object}
 */
export const MenuTree = [
  {
    title: 'active performance',
    refName: 'performance',
    icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiICAgICB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMnB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDI0IDEwMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiNmZmYiPjxnPiAgICA8cmVjdCB5PSI3NjguMiIgd2lkdGg9IjE5NyIgaGVpZ2h0PSIyNTUuOCIvPiAgICA8cmVjdCB4PSIyNzUuNiIgeT0iNTEyIiB3aWR0aD0iMTk3LjIiIGhlaWdodD0iNTEyIi8+ICAgIDxyZWN0IHg9IjU1MS40IiB3aWR0aD0iMTk3IiBoZWlnaHQ9IjEwMjQiLz4gICAgPHJlY3QgeD0iODI2LjgiIHk9IjI1Ni4yIiB3aWR0aD0iMTk3LjIiIGhlaWdodD0iNzY3LjgiLz48L2c+PC9zdmc+',
    url: '/app/performance'
  },
  {
    title: 'system alarms',
    refName: 'alarms',
    icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAxLjgwOSAyMDEuODA5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDEuODA5IDIwMS44MDk7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMjJweCIgaGVpZ2h0PSIyMiI+PHBhdGggZD0iTTE5Ni44MDksMzAuMjM4aC0xMi44MzNjLTIuNzYyLDAtNSwyLjIzOC01LDV2My40MTdMMzUuMTYyLDg3LjM0OEw3LjM0Miw3Mi41OTdjLTEuNTQ5LTAuODIzLTMuNDE2LTAuNzcyLTQuOTIsMC4xMzMgIEMwLjkxOSw3My42MzQsMCw3NS4yNiwwLDc3LjAxNHY0Ny43OGMwLDEuNzU0LDAuOTE5LDMuMzgsMi40MjIsNC4yODRjMC43OTIsMC40NzcsMS42ODUsMC43MTYsMi41NzgsMC43MTYgIGMwLjgwNCwwLDEuNjA4LTAuMTkzLDIuMzQyLTAuNTgybDI3LjgyMi0xNC43NTFsMTIuNjYzLDQuMjg4bC0yLjkyNSw5LjA5Yy0xLjY0Myw1LjEwNC0xLjE5OCwxMC41NDIsMS4yNDksMTUuMzEzICBjMi40NDgsNC43NzEsNi42MDcsOC4zMDMsMTEuNzEyLDkuOTQ1bDMyLjM2NiwxMC40MTVjMS45OTgsMC42NDMsNC4wNjcsMC45NjksNi4xNTEsMC45NjljOC43NDcsMCwxNi40MjYtNS41OTgsMTkuMTA2LTEzLjkzICBsMi41ODEtOC4wMmw2MC45MDgsMjAuNjIydjMuNDE3YzAsMi43NjIsMi4yMzgsNSw1LDVoMTIuODMzYzIuNzYyLDAsNS0yLjIzOCw1LTVWMzUuMjM4ICBDMjAxLjgwOSwzMi40NzYsMTk5LjU3LDMwLjIzOCwxOTYuODA5LDMwLjIzOHogTTEwNS45NjcsMTQ3LjQ4OWMtMS4zNDYsNC4xODMtNS4xOTgsNi45OTItOS41ODcsNi45OTIgIGMtMS4wNDMsMC0yLjA4Mi0wLjE2NC0zLjA4OS0wLjQ4OGwtMzIuMzY2LTEwLjQxNWMtMi41NjItMC44MjQtNC42NDgtMi41OTctNS44NzctNC45OWMtMS4yMjktMi4zOTUtMS40NTEtNS4xMjQtMC42MjctNy42ODYgIGwyLjg3OS04Ljk0NWw1MS4yOTUsMTcuMzY3TDEwNS45NjcsMTQ3LjQ4OXoiIGZpbGw9IiNGRkZGRkYiLz48L3N2Zz4=',
    url: '/app/alarms'
  },
  {
    title: 'Change Log',
    icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz4gICAgPHBhdGggZD0iTTQ3Ny44NjcsMEgzNC4xMzRDMTUuMjkyLDAsMCwxNS4yOTIsMCwzNC4xMzR2NDQzLjczM0MwLDQ5Ni43LDE1LjI5Miw1MTIsMzQuMTM0LDUxMmg0NDMuNzMzICAgQzQ5Ni43LDUxMiw1MTIsNDk2LjcsNTEyLDQ3Ny44NjdWMzQuMTM0QzUxMiwxNS4yOTIsNDk2LjcsMCw0NzcuODY3LDB6IE00NzcuODY3LDQ3Ny44NjdIMzQuMTM0VjM0LjEzNGg0NDMuNzMzVjQ3Ny44Njd6ICAgIE0xMTkuNDY3LDI3My4wNjZoMjczLjA2NmM5LjQxNywwLDE3LjA2Ni03LjY0OSwxNy4wNjYtMTcuMDY2cy03LjY0OS0xNy4wNjYtMTcuMDY2LTE3LjA2NkgxMTkuNDY3ICAgYy05LjQxNywwLTE3LjA2Niw3LjY0OS0xNy4wNjYsMTcuMDY2UzExMC4wNSwyNzMuMDY2LDExOS40NjcsMjczLjA2NnogTTExOS40NjcsMTcwLjY2N2gyNzMuMDY2ICAgYzkuNDE3LDAsMTcuMDY2LTcuNjUsMTcuMDY2LTE3LjA2N2MwLTkuNDE2LTcuNjQ5LTE3LjA2Ni0xNy4wNjYtMTcuMDY2SDExOS40NjdjLTkuNDE3LDAtMTcuMDY2LDcuNjUtMTcuMDY2LDE3LjA2NiAgIEMxMDIuNCwxNjMuMDE3LDExMC4wNSwxNzAuNjY3LDExOS40NjcsMTcwLjY2N3ogTTExOS40NjcsMzc1LjQ2N2gyNzMuMDY2YzkuNDE3LDAsMTcuMDY2LTcuNjUsMTcuMDY2LTE3LjA2NiAgIGMwLTkuNDE3LTcuNjQ5LTE3LjA2Ny0xNy4wNjYtMTcuMDY3SDExOS40NjdjLTkuNDE3LDAtMTcuMDY2LDcuNjUtMTcuMDY2LDE3LjA2N0MxMDIuNCwzNjcuODE2LDExMC4wNSwzNzUuNDY3LDExOS40NjcsMzc1LjQ2N3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+',
    refName: 'changeLog',
    url: '/app/changeLog'
  }
];

/**
 * set initial state of core layout
 * @return {object} updated initial state
 */
export function getInitialDetails () {
  const initialState = {
    menuStatus: true,
    // maintenanceMode: '',
    maintenanceMode: false,
    rangePickerBtn: 'day',
    dateRange: {
      start: moment().subtract(1, 'days').unix(),
      end: moment().unix()
    }
  };

  let menuSelected = '/app/performance'.split('/');

  initialState.MenuTree = arrangeMenuTree(menuSelected);
  initialState.navTitle = menuSelected.length > 1 ? { main: menuSelected[0], sub: menuSelected[1] } : { main: menuSelected[0] };

  return initialState;
}

export function arrangeMenuTree (menuSelected) {
  var renderMenu = [];
  MenuTree.forEach(function (tab, index) {
    var cloneTab = Object.assign({}, tab);

    if (tab.title === menuSelected[0]) {
      cloneTab.activeList = true;
      if (menuSelected.length > 1) {
        tab.childNodes.forEach(function (subTab, subIndex) {
          if (subTab.url.indexOf(menuSelected[1]) > -1) cloneTab.childNodes[subIndex].activeList = true;
        });
      }
    }
    renderMenu.push(cloneTab);
  });
  return renderMenu;
}

export function combineCssClasses () {
  return Array.prototype.slice.call(arguments).filter((argument) => argument).join(' ');
}

export function pushUniq (arr, value) {
  if (arr.indexOf(value) >= 0) return arr;
  return arr.concat(value);
}

function findPolyFill (arr, predicate) {
  if (arr === null) {
    throw new TypeError('Array.prototype.find called on null or undefined');
  }

  if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function');
  }

  var list = Object(arr);
  var length = list.length >>> 0;
  var thisArg = arguments[2];
  var value;

  for (var i = 0; i < length; i++) {
    value = list[i];
    if (predicate.call(thisArg, value, i, list)) {
      return value;
    }
  }

  return undefined;
}

export function find (arr, predicate) {
  return typeof Array.prototype.find === 'undefined' ? findPolyFill(arr, predicate) : arr.find(predicate);
}

function findIndexPolyFill (arr, predicate) {
  if (arr === null) {
    throw new TypeError('Array.prototype.find called on null or undefined');
  }

  if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function');
  }

  var list = Object(this);
  var length = list.length >>> 0;
  var thisArg = arguments[2];
  var value;

  for (var i = 0; i < length; i++) {
    value = list[i];
    if (predicate.call(thisArg, value, i, list)) {
      return i;
    }
  }
  return -1;
}

export function findIndex (arr, predicate) {
  if (!Array.isArray(arr)) {
    return -1;
  }
  return typeof Array.prototype.findIndex === 'undefined' ? findIndexPolyFill(arr, predicate) : arr.findIndex(predicate);
}

export function arrayToObj (arr, key) {
  if (!Array.isArray(arr) || !arr.length) {
    return {};
  }

  return (arr.reduce((prev, current) => {
    prev[typeof current === 'string' ? current : current[key]] = current;
    return prev;
  }, {}));
}

export function escapeRegexCharacters (str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
