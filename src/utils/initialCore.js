/**
 *  initial core layout
 */
import rootReducer, { registerNewReducers } from 'reducers';

export default function setInitialCoreLayout (nextState, replaceState, store) {
  const CoreReducer = require('reducers/coreLayout');
  const AlarmReducer = require('reducers/AlarmsReducer');
  const { replaceReducer } = store;

  const {
    menuTree,
    menuStatus,
    maintenanceMode,
    dateRange,
    rangePickerBtn
  } = CoreReducer;

  const {

  } = AlarmReducer;

  const newReducersObj = {
    menuTree: menuTree,
    menuStatus: menuStatus,
    maintenanceMode: maintenanceMode,
    dateRange: dateRange,
    rangePickerBtn: rangePickerBtn
  };

  registerNewReducers(newReducersObj);
  replaceReducer(rootReducer());
}
