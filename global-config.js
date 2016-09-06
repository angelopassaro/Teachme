// Copyright IBM Corp. 2014,2015. All Rights Reserved.
// Node module: loopback-example-offline-sync
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

/*
 * Global configuration shared by components.
 */
'use strict';

var url = require('url');

var conf = {
  hostname: 'http://testtutor4youtest.azurewebsites.net',
  port: 80,
  restApiRoot: '/api', // The path where to mount the REST API app
  legacyExplorer: false
};

// The URL where the browser client can access the REST API is available.
// Replace with a full url (including hostname) if your client is being
// served from a different server than your REST API.
conf.restApiUrl = url.format({
  protocol: 'http',
  slashes: true,
  hostname: conf.hostname,
  port: conf.port,
  pathname: conf.restApiRoot
});

console.log(conf);

module.exports = conf;
