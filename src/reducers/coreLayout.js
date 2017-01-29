/**
 *  core Layout reducer
 */
import { createReducer, getInitialDetails } from 'utils';
import {
  FETCH_MENU_STRUCTURE,
  MENU_STATUS,
  MAINTENANCE_MODE,
  DATE_RANGE,
  RANGE_PICKER_BTN
} from 'actions/core_layout';

var initialState = getInitialDetails();

export const menuTree = createReducer(initialState.MenuTree, {
  [FETCH_MENU_STRUCTURE]: (state) => state
});

export const menuStatus = createReducer(initialState.menuStatus, {
  [MENU_STATUS]: (state, action) => action
});

export const maintenanceMode = createReducer(initialState.maintenanceMode, {
  [MAINTENANCE_MODE]: (state, action) => action
});

export const dateRange = createReducer(initialState.dateRange, {
  [DATE_RANGE]: (state, dateRange) => dateRange
});

export const rangePickerBtn = createReducer(initialState.rangePickerBtn, {
  [RANGE_PICKER_BTN]: (state, action) => action
});
