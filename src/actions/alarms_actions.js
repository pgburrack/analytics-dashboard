/**
 *  alarms actions
 */
'use strict';

import { APIgetCall, APIpostCall } from 'utils/api';
import jwt from 'jwt-simple';
import { jwtPrefix } from 'utils/constants';
export const FETCH_ALARMS_API = 'FETCH_ALARMS_API';
export const ALARMS_LIST = 'ALARMS_LIST';
export const ALARMS_CATEGORY_LIST = 'ALARMS_CATEGORY_LIST';
export const ALARM_ALERT_LIST = 'ALARM_ALERT_LIST';
export const ALARM_TIME_UNITS = 'ALARM_TIME_UNITS';
export const ALARMS_METRIC_FIELDS = 'ALARMS_METRIC_FIELDS';
export const EDIT_ALARM = 'EDIT_ALARM';
export const ALARMS_FORM_IS_VISIBLE = 'ALARMS_FORM_IS_VISIBLE';
export const ALARM_POST_STATUS = 'ALARM_POST_STATUS';
export const OPEN_MODAL = 'OPEN_MODAL';
export const MAINTENANCE_STATUS = 'MAINTENANCE_STATUS';
export const SUGGESTED_USERS = 'SUGGESTED_USERS';
export const FETCH_USERS_STATUS = 'FETCH_USERS_STATUS';
export const USER_ACTION = 'USER_ACTION';
export const OPEN_SCREEN_BACKGROUND = 'OPEN_SCREEN_BACKGROUND';

export const alarmActionsCreators = {
  fetchAlarmApi: () => (dispatch) => {
    fetch(APIgetCall('/api/alarms'))
    .then((res) => {
      if (res.status === 404) {
        // do something
      }

      if (res.status === 302 || res.status === 405) {
        return dispatch({type: 'ERROR', payload: res.status});
      }

      res.json().then((res) => {
        dispatch({
          type: FETCH_ALARMS_API,
          payload: {
            list: jwt.decode(res.list, jwtPrefix),
            config: jwt.decode(res.config, jwtPrefix)
          }
        });
      });
    }
  ); },
  setAlarmsList: (value) => ({type: ALARMS_LIST, payload: value}),
  postNewAlarm: (alarm, index) => (dispatch) => {
    fetch(APIpostCall('/api/alarms/new', alarm))
    .then((res) => {
      if (res.status === 302 || res.status === 405 || res.status === 404) {
        return dispatch({type: ALARM_POST_STATUS, payload: {status: res.status}});
      }

      res.json().then((res) => {
        if (res && res.status === 'missing params') {
          return dispatch({type: ALARM_POST_STATUS, payload: {status: res.status}});
        }

        dispatch({
          type: ALARM_POST_STATUS,
          payload: {index: index, alarm: alarm, id: jwt.decode(res.res, jwtPrefix).id, action: 'CREATE'}
        });
      });
    });
  },
  postEditAlarm: (alarm, index) => (dispatch) => {
    fetch(APIpostCall('/api/alarms/edit', alarm))
    .then((res) => {
      if (res.status === 302 || res.status === 405 || res.status === 404) {
        return dispatch({type: ALARM_POST_STATUS, payload: {status: status}});
      }

      res.json().then((res) => {
        if (res && res.status === 'missing params') {
          return dispatch({type: ALARM_POST_STATUS, payload: {status: res.status}});
        }
        // TODO: ADD DECODING
        dispatch({
          type: ALARM_POST_STATUS,
          payload: {index: index, alarm: alarm, id: alarm.id, action: 'EDIT'}
        });
      });
    });
  },
  postDeleteAlarm: (data) => (dispatch) => {
    fetch(APIpostCall('/api/alarms/delete', data))
    .then((res) => {
      if (res.status === 302 || res.status === 405 || res.status === 404) {
        return dispatch({type: ALARM_POST_STATUS, payload: {status: status}});
      }

      res.json().then((res) => {
        if (res && res.status === 'missing params') {
          return dispatch({type: ALARM_POST_STATUS, payload: {status: res.status}});
        }

        dispatch({
          type: ALARM_POST_STATUS,
          payload: {id: data.id, action: 'DELETE'}
        });
      });
    });
  },
  postUnregisterFromAlarm: (data) => (dispatch) => {
    fetch(APIpostCall('/api/alarms/remove_user', data))
    .then((res) => {
      if (res.status === 302 || res.status === 405 || res.status === 404) {
        return dispatch({type: ALARM_POST_STATUS, payload: {status: status}});
      }

      res.json().then((res) => {
        if (res && res.status === 'missing params') {
          return dispatch({type: ALARM_POST_STATUS, payload: {status: res.status}});
        }

        dispatch({
          type: ALARM_POST_STATUS,
          payload: {id: data.id, action: 'UNREGISTER'}
        });
      });
    });
  },
  setAlarmsCategory: (value) => ({type: ALARMS_CATEGORY_LIST, payload: value}),
  setAlarmsAlert: (value) => ({type: ALARM_ALERT_LIST, payload: value}),
  setAlarmsTimeUnits: (value) => ({type: ALARM_TIME_UNITS, payload: value}),
  setAlarmsMetricFields: (value) => ({type: ALARMS_METRIC_FIELDS, payload: value}),
  setAlarmFormIsVisible: (value) => ({type: ALARMS_FORM_IS_VISIBLE, payload: value}),
  editAlarm: (value) => ({type: EDIT_ALARM, payload: value}),
  openModal: (value) => ({type: OPEN_MODAL, payload: value}),
  setMaintenanceMode: (value) => ({type: MAINTENANCE_STATUS, payload: value}),
  fetchMaintenanceMode: () => (dispatch) => {
    fetch(APIgetCall('/api/alarms/maintenance_status'))
    .then((res) => {
      if (res.status === 302 || res.status === 405 || res.status === 404) {
        return dispatch({type: MAINTENANCE_STATUS, payload: {status: status}});
      }

      res.json().then((res) => {
        if (res && res.status === 'missing params') {
          return dispatch({type: MAINTENANCE_STATUS, payload: {status: res.status}});
        }

        dispatch({
          type: MAINTENANCE_STATUS,
          payload: res.on
        });
      });
    });
  },
  editMaintenanceMode: (value) => (dispatch) => {
    fetch(APIpostCall('/api/alarms/edit_maintenance', value))
    .then((res) => {
      if (res.status === 302 || res.status === 405 || res.status === 404) {
        return dispatch({type: ALARM_POST_STATUS, payload: {status: status}});
      }

      res.json().then((res) => {
        if (res && res.status === 'missing params') {
          return dispatch({type: ALARM_POST_STATUS, payload: {status: res.status}});
        }

        dispatch({
          type: MAINTENANCE_STATUS,
          payload: res.on
        });
      });
    });
  },
  fetchUsers: (value) => (dispatch) => {
    fetch(APIgetCall('/api/alarms/user?q=' + value))
    .then((res) => {
      // if (res.status === 302 || res.status === 405 || res.status === 404) {
      //   return dispatch({type: ALARM_POST_STATUS, payload: {status: status}});
      // }

      res.json().then((res) => {
        // if (res && res.status === 'missing params') {
        //   //return dispatch({type: ALARM_POST_STATUS, payload: {status: res.status}});
        // }
        dispatch({
          type: FETCH_USERS_STATUS,
          payload: true
        });

        dispatch({
          type: SUGGESTED_USERS,
          payload: res
        });
      });
    });
  },
  setSuggestedUsers: (value) => ({type: SUGGESTED_USERS, payload: value}),
  setFetchUsersDoneStatus: (value) => ({type: FETCH_USERS_STATUS, payload: value}),
  openScreenBackground: (value) => ({type: OPEN_SCREEN_BACKGROUND, payload: value})
};
