'use strict';

/**
 * ElasticSearch configuration , require in models and start using
 */

var elasticsearch = require('elasticsearch'),
    CustomESHTTPConnector = require('./custom_es_connection'),
    config = require('./config_main'),
    debug = require('debug')('app:server:mysql-config');

module.exports = {

     connectGrank : function() {
        config.elasticGrank["connectionClass"] = CustomESHTTPConnector;
        return new elasticsearch.Client( config.elasticGrank );
     },

     connectDashboard : function() {
        config.elasticDashboard["connectionClass"] = CustomESHTTPConnector;
        return new elasticsearch.Client(config.elasticDashboard);
     }
}





