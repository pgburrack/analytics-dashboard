 /**
 *  core layout actions
 */

// API actions
export const FETCH_MENU_STRUCTURE = 'FETCH_MENU_STRUCTURE';

// UI actions
export const MENU_STATUS = 'MENU_STATUS';
export const MAINTENANCE_MODE = 'MAINTENANCE_MODE';
export const DATE_RANGE = 'DATE_RANGE';
export const RANGE_PICKER_BTN = 'RANGE_PICKER_BTN';

export const actionCreators = {
  changeMenuStatus: (value) => ({type: MENU_STATUS, payload: value}),
  configureMenu: (value) => ({type: FETCH_MENU_STRUCTURE, payload: value}),
  maintenanceStatus: (value) => ({type: MAINTENANCE_MODE, payload: value}),
  setDateRange: (value) => ({ type: DATE_RANGE, payload: value }),
  setRangePickerBtn: (value) => ({ type: RANGE_PICKER_BTN, payload: value })
};

