import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Auth from 'utils/Auth';
import 'styles/_globals.scss';

export default (store) => {
  return (
    <Route path='/'>
      <IndexRedirect to='login' />
      <Route path='login' store={store} component={require('react-router-proxy?name=login!views/LoginView')} onEnter={Auth} />
      <Route name='app' path='app' store={store} component={require('react-router-proxy?name=app!layouts/CoreLayout/CoreLayout')} onEnter={Auth}>
        <IndexRedirect to='alarms' />
        <Route name='alarms' path='alarms' component={require('react-router-proxy?name=alarms!views/AlarmsView')} store={store} onEnter={Auth} />
      </Route>
      <Route path='*' component={require('react-router-proxy?name=all!views/ForbiddenView')} status={404} />
    </Route>
  );
};
