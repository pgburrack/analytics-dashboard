/**
 *  auth actions
 */
import jwt from 'jwt-simple';
import { jwtPrefix, user } from 'utils/constants';
import { APIpostCall, APIgetCall } from 'utils/api';
import { setUserSession, removeLocalStorage } from 'utils';

export const AUTH_USER_DETAILS = 'AUTH_USER_DETAILS';
export const AUTH_USER_LOG_STATUS = 'AUTH_USER_LOG_STATUS';
export const AUTH_USER_LOGOUT = 'AUTH_USER_LOGOUT';
export const ADDED_MENU = 'ADDED_MENU';

export const authActionsCreators = {
  authenticatUser: (value) => ({ type: AUTH_USER_LOG_STATUS, payload: value }),
  fetchUserAuth: (postParams, userStatus) => (dispatch) => {
    if (!userStatus) {
      return dispatch({
        type: AUTH_USER_DETAILS,
        payload: user
      });
    } else {
      fetch(APIpostCall('/api/login', postParams))
      .then((res) => {
        if (res.status === 302 || res.status === 500) return res.status;
        if (res.status === 401) {
          removeLocalStorage('token');
        }
        return res.json();
      })
      .then((res) => {
        if (typeof res === 'number') return;
        let assignedUserConfig = Object.assign({}, {menu: jwt.decode(res.menu, jwtPrefix)}, {user: jwt.decode(res.user, jwtPrefix)});

        setUserSession(assignedUserConfig);
        if (assignedUserConfig.menu.length) {
          dispatch({
            type: ADDED_MENU,
            payload: assignedUserConfig.menu
          });
        }
        return dispatch({
          type: AUTH_USER_DETAILS,
          payload: assignedUserConfig.user
        });
      })
      .catch((err) => {
        console.log(err);
      });
    }
  },
  logoutUser: () => (dispatch) => {
    fetch(APIgetCall('/api/logout'))
    .then((res) => {
      if (res.status === 302 || res.status === 500) return res.status;
      return res.json();
    })
    .then((res) => {
      return dispatch({
        type: AUTH_USER_DETAILS,
        payload: user
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }
};
