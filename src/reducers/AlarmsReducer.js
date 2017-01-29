/**
 * Alarms Reducer
 */
'use strict';

import { createReducer } from 'utils';
import {
  FETCH_ALARMS_API,
  ALARMS_LIST,
  ALARMS_CATEGORY_LIST,
  ALARM_ALERT_LIST,
  ALARM_TIME_UNITS,
  ALARMS_METRIC_FIELDS,
  EDIT_ALARM,
  ALARMS_FORM_IS_VISIBLE,
  ALARM_POST_STATUS,
  OPEN_MODAL,
  MAINTENANCE_STATUS,
  SUGGESTED_USERS,
  FETCH_USERS_STATUS,
  OPEN_SCREEN_BACKGROUND
} from 'actions/alarms_actions';

const InitialState = {
  alarmApi: {},
  alarmList: [],
  alarmCategoryList: [],
  alarmAlertList: [],
  alarmTimeUnits: [],
  alarmsMetricFields: [],
  alarmIndex: -1,
  alarmFormIsVisible: false,
  postStatus: {},
  alarmCampaigns: {},
  modalIsOpen: false,
  maintenanceStatus: false,
  suggestedUsers: [],
  fetchUsersDoneStatus: true,
  alarmScreenBgIsOpen: false
};

export const alarmApi = createReducer(InitialState.alarmApi, {
  [FETCH_ALARMS_API]: (state, action) => action
});

export const alarmsList = createReducer(InitialState.alarmList, {
  [ALARMS_LIST]: (state, action) => action
});

export const alarmsCategoryList = createReducer(InitialState.alarmCategoryList, {
  [ALARMS_CATEGORY_LIST]: (state, action) => action
});

export const alarmsAlertList = createReducer(InitialState.alarmAlertList, {
  [ALARM_ALERT_LIST]: (state, action) => action
});

export const alarmsTimeUnits = createReducer(InitialState.alarmTimeUnits, {
  [ALARM_TIME_UNITS]: (state, action) => action
});

export const alarmsMetricFields = createReducer(InitialState.alarmsMetricFields, {
  [ALARMS_METRIC_FIELDS]: (state, action) => action
});

export const alarmIndex = createReducer(InitialState.alarmIndex, {
  [EDIT_ALARM]: (state, action) => action
});

export const alarmFormIsVisible = createReducer(InitialState.alarmFormIsVisible, {
  [ALARMS_FORM_IS_VISIBLE]: (state, action) => action
});

export const postStatus = createReducer(InitialState.postStatus, {
  [ALARM_POST_STATUS]: (state, action) => action
});

export const modalIsOpen = createReducer(InitialState.modalIsOpen, {
  [OPEN_MODAL]: (state, action) => action
});

export const maintenanceStatus = createReducer(InitialState.maintenanceStatus, {
  [MAINTENANCE_STATUS]: (state, action) => action
});

export const suggestedUsers = createReducer(InitialState.suggestedUsers, {
  [SUGGESTED_USERS]: (state, action) => action
});

export const fetchUsersDoneStatus = createReducer(InitialState.fetchUsersDoneStatus, {
  [FETCH_USERS_STATUS]: (state, action) => action
});

export const alarmScreenBgIsOpen = createReducer(InitialState.alarmScreenBgIsOpen, {
  [OPEN_SCREEN_BACKGROUND]: (state, action) => action
});
