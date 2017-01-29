/**
 *  Auth util
 */
import { getLocalStorage, removeLocalStorage } from './index';
import { authActionsCreators } from 'actions/auth_actions';
import setInitialCoreLayout from './initialCore';
import moment from 'moment';

export default function (nextState, replace) {
  const nextPathname = nextState.location.pathname;
  const { dispatch, getState } = this.store;

  const user = getState().fetchUserAuth;
  if (nextPathname === '/login' && user.userName.length > 0 && Boolean(user.userId)) return replace('/app/performance');
  if (nextPathname === '/login') return;

  const token = getLocalStorage('token');
  var currTime = moment().unix();
  var session = token ? token.sessionTime : 0;

  if (currTime > session && nextPathname !== '/login') {
    dispatch(authActionsCreators.fetchUserAuth({}, false));
    dispatch(authActionsCreators.authenticatUser(false));
    removeLocalStorage('token');
    window.location = '/login';
    return;
  }

  if (!user.userName.length && nextPathname !== '/login') return replace('/app/performance');
  if (nextPathname.search('app') > 0) {
    setInitialCoreLayout(nextState, replace, this.store);
  }
};
