"use strict";

var Router = require("koa-router")(),
    AuthController = require('../controllers/AuthController'),
    Utils = require('../helpers/Utils');

module.exports = function (app) {

    /**  API router **/
    Router
      .post('/api/login', AuthController.validUser)
      .get('/api/logout', Utils.secured, AuthController.logout)
      // admin view api requests
      .get('/api/userslist', Utils.superUserAccess, AuthController.UsersList)
      .post('/api/new_user', Utils.superUserAccess, AuthController.AddNewUser)
      .post('/api/edit_user', Utils.superUserAccess, AuthController.EditUser)
      .post('/api/remove_user', Utils.superUserAccess, AuthController.DeleteUser)
      // core
      .get('/api/publishers', Utils.secured, require('../controllers/CoreController').FetchPublishers)
      // alarms
      .get('/api/lists', Utils.secured, require('../controllers/AlarmsController').FetchListsData)
      .get('/api/alarms', Utils.secured, require('../controllers/AlarmsController').FetchAlarmApi)
      .get('/api/campaigns', Utils.secured, require('../controllers/AlarmsController').FetchCampaigns)
      .get('/api/alarms/user', Utils.secured, require('../controllers/AlarmsController').FetchUser)
      .post('/api/alarms/new', Utils.secured, require('../controllers/AlarmsController').AddNewAlarm)
      .post('/api/alarms/edit', Utils.secured, require('../controllers/AlarmsController').EditAlarm)
      .post('/api/alarms/delete', Utils.secured, require('../controllers/AlarmsController').DeleteAlarm)
      .post('/api/alarms/remove_user', Utils.secured, require('../controllers/AlarmsController').RemoveAlarmUser)
      .get('/api/alarms/maintenance_status', Utils.secured, require('../controllers/AlarmsController').FetchAlarmsMaintenance)
      .post('/api/alarms/edit_maintenance', Utils.secured, require('../controllers/AlarmsController').EditAlarmsMaintenance)

      // reserch - read csv file and check conversion on elasticsearch
      //.get('/api/csv', require('../controllers/CsvConversionsController').CheckConversion);

    app
      .use(Router.routes())
      .use(Router.allowedMethods());

};
