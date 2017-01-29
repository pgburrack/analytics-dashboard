'use strict';

var logger = require('koa-logger'),
    cors = require('koa-cors'),
    session = require('koa-generic-session'),
    convert = require('koa-convert'),
    redisStore = require('koa-redis'),
    passport = require('./config_auth'),
    bodyParser = require('koa-bodyparser'),
    ES = require('./config_elasticsearch'),
    s3 = require('s3'),
    debug = require('debug')('koa:server:config'),
    config = require('./config_main');


module.exports = function(app) {

     /**
      * use logger for development environment
      * @param  {string} config.app.env !   [environment configuration]
      */
     if (config.app.env !== 'production' && config.app.env !== 'test'){
        app.use(convert(logger()));
     }

     /**
      * use live reload for development environment
      * @param  {string} config.app.env !   [environment configuration]
      */
     if (config.app.env === 'development') {
        app.use(convert(require('koa-livereload')()));
        debug("koa livereload for development mode");
     }

     /**
      * create a global S3 connection
      */
     if(!global.S3){
        global.S3 = s3.createClient(config.s3);
        debug("create global grank s3 db instance");
     }

     /**
      * create a global dashboard elasticsearch connection
      */
     if(!global.ESDB){
        global.ESDB = ES.connectDashboard();
        debug("create global dashboard elastic db instance");
     }

    /**
      * use debug for development and test environment
      * @param  {string} config.app.env !   [environment configuration]
      */
     // if (config.app.env !== 'production') {
     //     app.debug();
     // }

     app.use(convert(cors({
        maxAge: config.app.hasOwnProperty("cacheTime") ? config.app.cacheTime / 1000 : 0,
        credentials: true,
        methods: 'GET, HEAD, OPTIONS, PUT, POST, DELETE',
        headers: 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
     })));

     /**
      * using redis session for authentication
      */
     app.keys = ['a67w89AbxEP'];
     app.use(convert(session({
        key : "sample.sid",
        cookie: {maxAge: 1000 * 60 * 60 * 24},
        store: redisStore()
     })));
     /**
      *  initializing passport authentication
      */
      passport(app);

     /**
      *  a body parser base on co-body
      */
     app.use(convert(bodyParser()));

};
