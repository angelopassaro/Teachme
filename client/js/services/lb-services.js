// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' && module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

function getHost(url) {
  var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
  return m ? m[1] : null;
}

var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Student
 * @header lbServices.Student
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Student` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Student",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/students/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$__findById__accessTokens
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$__updateById__accessTokens
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.passpartout() instead.
        "prototype$__get__passpartout": {
          url: urlBase + "/students/:id/passpartout",
          method: "GET"
        },

        // INTERNAL. Use Student.passpartout.create() instead.
        "prototype$__create__passpartout": {
          url: urlBase + "/students/:id/passpartout",
          method: "POST"
        },

        // INTERNAL. Use Student.passpartout.update() instead.
        "prototype$__update__passpartout": {
          url: urlBase + "/students/:id/passpartout",
          method: "PUT"
        },

        // INTERNAL. Use Student.passpartout.destroy() instead.
        "prototype$__destroy__passpartout": {
          url: urlBase + "/students/:id/passpartout",
          method: "DELETE"
        },

        // INTERNAL. Use Student.require.findById() instead.
        "prototype$__findById__require": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/require/:fk",
          method: "GET"
        },

        // INTERNAL. Use Student.require.destroyById() instead.
        "prototype$__destroyById__require": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/require/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.require.updateById() instead.
        "prototype$__updateById__require": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/require/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.require.link() instead.
        "prototype$__link__require": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/require/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.require.unlink() instead.
        "prototype$__unlink__require": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/require/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.require.exists() instead.
        "prototype$__exists__require": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/require/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Student.university() instead.
        "prototype$__get__university": {
          url: urlBase + "/students/:id/university",
          method: "GET"
        },

        // INTERNAL. Use Student.share.findById() instead.
        "prototype$__findById__share": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/share/:fk",
          method: "GET"
        },

        // INTERNAL. Use Student.share.destroyById() instead.
        "prototype$__destroyById__share": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/share/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.share.updateById() instead.
        "prototype$__updateById__share": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/share/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.teach.findById() instead.
        "prototype$__findById__teach": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/teach/:fk",
          method: "GET"
        },

        // INTERNAL. Use Student.teach.destroyById() instead.
        "prototype$__destroyById__teach": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/teach/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.teach.updateById() instead.
        "prototype$__updateById__teach": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/teach/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.teach.link() instead.
        "prototype$__link__teach": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/teach/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.teach.unlink() instead.
        "prototype$__unlink__teach": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/teach/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.teach.exists() instead.
        "prototype$__exists__teach": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/teach/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$__get__accessTokens
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Queries accessTokens of student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/students/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$__create__accessTokens
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/students/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$__delete__accessTokens
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/students/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$__count__accessTokens
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Counts accessTokens of student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/students/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#__get__tutors
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Queries tutors of student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "__get__tutors": {
          isArray: true,
          url: urlBase + "/students/tutors",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#__create__tutors
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Creates a new instance in tutors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "__create__tutors": {
          url: urlBase + "/students/tutors",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#__delete__tutors
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Deletes all tutors of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "__delete__tutors": {
          url: urlBase + "/students/tutors",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#__count__tutors
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Counts tutors of student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "__count__tutors": {
          url: urlBase + "/students/tutors/count",
          method: "GET"
        },

        // INTERNAL. Use Student.require() instead.
        "prototype$__get__require": {
          isArray: true,
          url: urlBase + "/students/:id/require",
          method: "GET"
        },

        // INTERNAL. Use Student.require.create() instead.
        "prototype$__create__require": {
          url: urlBase + "/students/:id/require",
          method: "POST"
        },

        // INTERNAL. Use Student.require.destroyAll() instead.
        "prototype$__delete__require": {
          url: urlBase + "/students/:id/require",
          method: "DELETE"
        },

        // INTERNAL. Use Student.require.count() instead.
        "prototype$__count__require": {
          url: urlBase + "/students/:id/require/count",
          method: "GET"
        },

        // INTERNAL. Use Student.share() instead.
        "prototype$__get__share": {
          isArray: true,
          url: urlBase + "/students/:id/share",
          method: "GET"
        },

        // INTERNAL. Use Student.share.create() instead.
        "prototype$__create__share": {
          url: urlBase + "/students/:id/share",
          method: "POST"
        },

        // INTERNAL. Use Student.share.destroyAll() instead.
        "prototype$__delete__share": {
          url: urlBase + "/students/:id/share",
          method: "DELETE"
        },

        // INTERNAL. Use Student.share.count() instead.
        "prototype$__count__share": {
          url: urlBase + "/students/:id/share/count",
          method: "GET"
        },

        // INTERNAL. Use Student.teach() instead.
        "prototype$__get__teach": {
          isArray: true,
          url: urlBase + "/students/:id/teach",
          method: "GET"
        },

        // INTERNAL. Use Student.teach.create() instead.
        "prototype$__create__teach": {
          url: urlBase + "/students/:id/teach",
          method: "POST"
        },

        // INTERNAL. Use Student.teach.destroyAll() instead.
        "prototype$__delete__teach": {
          url: urlBase + "/students/:id/teach",
          method: "DELETE"
        },

        // INTERNAL. Use Student.teach.count() instead.
        "prototype$__count__teach": {
          url: urlBase + "/students/:id/teach/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#create
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/students",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#createMany
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/students",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#upsert
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/students",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#exists
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/students/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#findById
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/students/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#find
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/students",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#findOne
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/students/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#updateAll
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/students/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#deleteById
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/students/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#count
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/students/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#prototype$updateAttributes
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/students/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#createChangeStream
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/students/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#login
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/students/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#logout
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/students/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#confirm
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/students/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#resetPassword
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/students/reset",
          method: "POST"
        },

        // INTERNAL. Use Lesson.student() instead.
        "::get::lesson::student": {
          url: urlBase + "/lessons/:id/student",
          method: "GET"
        },

        // INTERNAL. Use University.student.findById() instead.
        "::findById::university::student": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/student/:fk",
          method: "GET"
        },

        // INTERNAL. Use University.student.destroyById() instead.
        "::destroyById::university::student": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/student/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use University.student.updateById() instead.
        "::updateById::university::student": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/student/:fk",
          method: "PUT"
        },

        // INTERNAL. Use University.student() instead.
        "::get::university::student": {
          isArray: true,
          url: urlBase + "/universities/:id/student",
          method: "GET"
        },

        // INTERNAL. Use University.student.create() instead.
        "::create::university::student": {
          url: urlBase + "/universities/:id/student",
          method: "POST"
        },

        // INTERNAL. Use University.student.createMany() instead.
        "::createMany::university::student": {
          isArray: true,
          url: urlBase + "/universities/:id/student",
          method: "POST"
        },

        // INTERNAL. Use University.student.destroyAll() instead.
        "::delete::university::student": {
          url: urlBase + "/universities/:id/student",
          method: "DELETE"
        },

        // INTERNAL. Use University.student.count() instead.
        "::count::university::student": {
          url: urlBase + "/universities/:id/student/count",
          method: "GET"
        },

        // INTERNAL. Use Feedback.sendTo() instead.
        "::get::feedback::sendTo": {
          url: urlBase + "/feedbacks/:id/sendTo",
          method: "GET"
        },

        // INTERNAL. Use Feedback.sendFrom() instead.
        "::get::feedback::sendFrom": {
          url: urlBase + "/feedbacks/:id/sendFrom",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Student#getCurrent
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/students" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Student#updateOrCreate
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Student#update
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Student#destroyById
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Student#removeById
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Student#getCachedCurrent
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Student#login} or
         * {@link lbServices.Student#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Student instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Student#isAuthenticated
         * @methodOf lbServices.Student
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Student#getCurrentId
         * @methodOf lbServices.Student
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Student#modelName
    * @propertyOf lbServices.Student
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Student`.
    */
    R.modelName = "Student";

    /**
     * @ngdoc object
     * @name lbServices.Student.passpartout
     * @header lbServices.Student.passpartout
     * @object
     * @description
     *
     * The object `Student.passpartout` groups methods
     * manipulating `Passpartout` instances related to `Student`.
     *
     * Call {@link lbServices.Student#passpartout Student.passpartout()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Student#passpartout
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Fetches hasOne relation passpartout.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Passpartout` object.)
         * </em>
         */
        R.passpartout = function() {
          var TargetResource = $injector.get("Passpartout");
          var action = TargetResource["::get::student::passpartout"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.passpartout#create
         * @methodOf lbServices.Student.passpartout
         *
         * @description
         *
         * Creates a new instance in passpartout of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Passpartout` object.)
         * </em>
         */
        R.passpartout.create = function() {
          var TargetResource = $injector.get("Passpartout");
          var action = TargetResource["::create::student::passpartout"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.passpartout#createMany
         * @methodOf lbServices.Student.passpartout
         *
         * @description
         *
         * Creates a new instance in passpartout of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Passpartout` object.)
         * </em>
         */
        R.passpartout.createMany = function() {
          var TargetResource = $injector.get("Passpartout");
          var action = TargetResource["::createMany::student::passpartout"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.passpartout#destroy
         * @methodOf lbServices.Student.passpartout
         *
         * @description
         *
         * Deletes passpartout of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.passpartout.destroy = function() {
          var TargetResource = $injector.get("Passpartout");
          var action = TargetResource["::destroy::student::passpartout"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.passpartout#update
         * @methodOf lbServices.Student.passpartout
         *
         * @description
         *
         * Update passpartout of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Passpartout` object.)
         * </em>
         */
        R.passpartout.update = function() {
          var TargetResource = $injector.get("Passpartout");
          var action = TargetResource["::update::student::passpartout"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Student.require
     * @header lbServices.Student.require
     * @object
     * @description
     *
     * The object `Student.require` groups methods
     * manipulating `Lesson` instances related to `Student`.
     *
     * Call {@link lbServices.Student#require Student.require()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Student#require
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Queries require of student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R.require = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::get::student::require"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.require#count
         * @methodOf lbServices.Student.require
         *
         * @description
         *
         * Counts require of student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.require.count = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::count::student::require"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.require#create
         * @methodOf lbServices.Student.require
         *
         * @description
         *
         * Creates a new instance in require of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R.require.create = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::create::student::require"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.require#createMany
         * @methodOf lbServices.Student.require
         *
         * @description
         *
         * Creates a new instance in require of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R.require.createMany = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::createMany::student::require"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.require#destroyAll
         * @methodOf lbServices.Student.require
         *
         * @description
         *
         * Deletes all require of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.require.destroyAll = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::delete::student::require"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.require#destroyById
         * @methodOf lbServices.Student.require
         *
         * @description
         *
         * Delete a related item by id for require.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for require
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.require.destroyById = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::destroyById::student::require"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.require#exists
         * @methodOf lbServices.Student.require
         *
         * @description
         *
         * Check the existence of require relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for require
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R.require.exists = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::exists::student::require"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.require#findById
         * @methodOf lbServices.Student.require
         *
         * @description
         *
         * Find a related item by id for require.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for require
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R.require.findById = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::findById::student::require"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.require#link
         * @methodOf lbServices.Student.require
         *
         * @description
         *
         * Add a related item by id for require.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for require
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R.require.link = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::link::student::require"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.require#unlink
         * @methodOf lbServices.Student.require
         *
         * @description
         *
         * Remove the require relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for require
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.require.unlink = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::unlink::student::require"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.require#updateById
         * @methodOf lbServices.Student.require
         *
         * @description
         *
         * Update a related item by id for require.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for require
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R.require.updateById = function() {
          var TargetResource = $injector.get("Lesson");
          var action = TargetResource["::updateById::student::require"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student#university
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Fetches belongsTo relation university.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R.university = function() {
          var TargetResource = $injector.get("University");
          var action = TargetResource["::get::student::university"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Student.share
     * @header lbServices.Student.share
     * @object
     * @description
     *
     * The object `Student.share` groups methods
     * manipulating `Note` instances related to `Student`.
     *
     * Call {@link lbServices.Student#share Student.share()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Student#share
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Queries share of student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Note` object.)
         * </em>
         */
        R.share = function() {
          var TargetResource = $injector.get("Note");
          var action = TargetResource["::get::student::share"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.share#count
         * @methodOf lbServices.Student.share
         *
         * @description
         *
         * Counts share of student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.share.count = function() {
          var TargetResource = $injector.get("Note");
          var action = TargetResource["::count::student::share"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.share#create
         * @methodOf lbServices.Student.share
         *
         * @description
         *
         * Creates a new instance in share of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Note` object.)
         * </em>
         */
        R.share.create = function() {
          var TargetResource = $injector.get("Note");
          var action = TargetResource["::create::student::share"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.share#createMany
         * @methodOf lbServices.Student.share
         *
         * @description
         *
         * Creates a new instance in share of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Note` object.)
         * </em>
         */
        R.share.createMany = function() {
          var TargetResource = $injector.get("Note");
          var action = TargetResource["::createMany::student::share"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.share#destroyAll
         * @methodOf lbServices.Student.share
         *
         * @description
         *
         * Deletes all share of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.share.destroyAll = function() {
          var TargetResource = $injector.get("Note");
          var action = TargetResource["::delete::student::share"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.share#destroyById
         * @methodOf lbServices.Student.share
         *
         * @description
         *
         * Delete a related item by id for share.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for share
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.share.destroyById = function() {
          var TargetResource = $injector.get("Note");
          var action = TargetResource["::destroyById::student::share"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.share#findById
         * @methodOf lbServices.Student.share
         *
         * @description
         *
         * Find a related item by id for share.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for share
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Note` object.)
         * </em>
         */
        R.share.findById = function() {
          var TargetResource = $injector.get("Note");
          var action = TargetResource["::findById::student::share"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.share#updateById
         * @methodOf lbServices.Student.share
         *
         * @description
         *
         * Update a related item by id for share.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for share
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Note` object.)
         * </em>
         */
        R.share.updateById = function() {
          var TargetResource = $injector.get("Note");
          var action = TargetResource["::updateById::student::share"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Student.teach
     * @header lbServices.Student.teach
     * @object
     * @description
     *
     * The object `Student.teach` groups methods
     * manipulating `Course` instances related to `Student`.
     *
     * Call {@link lbServices.Student#teach Student.teach()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Student#teach
         * @methodOf lbServices.Student
         *
         * @description
         *
         * Queries teach of student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.teach = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::student::teach"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.teach#count
         * @methodOf lbServices.Student.teach
         *
         * @description
         *
         * Counts teach of student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.teach.count = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::count::student::teach"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.teach#create
         * @methodOf lbServices.Student.teach
         *
         * @description
         *
         * Creates a new instance in teach of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.teach.create = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::create::student::teach"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.teach#createMany
         * @methodOf lbServices.Student.teach
         *
         * @description
         *
         * Creates a new instance in teach of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.teach.createMany = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::createMany::student::teach"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.teach#destroyAll
         * @methodOf lbServices.Student.teach
         *
         * @description
         *
         * Deletes all teach of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.teach.destroyAll = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::delete::student::teach"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.teach#destroyById
         * @methodOf lbServices.Student.teach
         *
         * @description
         *
         * Delete a related item by id for teach.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for teach
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.teach.destroyById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::destroyById::student::teach"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.teach#exists
         * @methodOf lbServices.Student.teach
         *
         * @description
         *
         * Check the existence of teach relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for teach
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.teach.exists = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::exists::student::teach"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.teach#findById
         * @methodOf lbServices.Student.teach
         *
         * @description
         *
         * Find a related item by id for teach.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for teach
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.teach.findById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::findById::student::teach"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.teach#link
         * @methodOf lbServices.Student.teach
         *
         * @description
         *
         * Add a related item by id for teach.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for teach
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.teach.link = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::link::student::teach"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.teach#unlink
         * @methodOf lbServices.Student.teach
         *
         * @description
         *
         * Remove the teach relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for teach
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.teach.unlink = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::unlink::student::teach"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Student.teach#updateById
         * @methodOf lbServices.Student.teach
         *
         * @description
         *
         * Update a related item by id for teach.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for teach
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.teach.updateById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::updateById::student::teach"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Passpartout
 * @header lbServices.Passpartout
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Passpartout` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Passpartout",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/passpartouts/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Passpartout#create
         * @methodOf lbServices.Passpartout
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Passpartout` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/passpartouts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Passpartout#createMany
         * @methodOf lbServices.Passpartout
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Passpartout` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/passpartouts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Passpartout#upsert
         * @methodOf lbServices.Passpartout
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Passpartout` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/passpartouts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Passpartout#exists
         * @methodOf lbServices.Passpartout
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/passpartouts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Passpartout#findById
         * @methodOf lbServices.Passpartout
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Passpartout` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/passpartouts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Passpartout#find
         * @methodOf lbServices.Passpartout
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Passpartout` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/passpartouts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Passpartout#findOne
         * @methodOf lbServices.Passpartout
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Passpartout` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/passpartouts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Passpartout#updateAll
         * @methodOf lbServices.Passpartout
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/passpartouts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Passpartout#deleteById
         * @methodOf lbServices.Passpartout
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Passpartout` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/passpartouts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Passpartout#count
         * @methodOf lbServices.Passpartout
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/passpartouts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Passpartout#prototype$updateAttributes
         * @methodOf lbServices.Passpartout
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Passpartout` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/passpartouts/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Passpartout#createChangeStream
         * @methodOf lbServices.Passpartout
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/passpartouts/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Student.passpartout() instead.
        "::get::student::passpartout": {
          url: urlBase + "/students/:id/passpartout",
          method: "GET"
        },

        // INTERNAL. Use Student.passpartout.create() instead.
        "::create::student::passpartout": {
          url: urlBase + "/students/:id/passpartout",
          method: "POST"
        },

        // INTERNAL. Use Student.passpartout.createMany() instead.
        "::createMany::student::passpartout": {
          isArray: true,
          url: urlBase + "/students/:id/passpartout",
          method: "POST"
        },

        // INTERNAL. Use Student.passpartout.update() instead.
        "::update::student::passpartout": {
          url: urlBase + "/students/:id/passpartout",
          method: "PUT"
        },

        // INTERNAL. Use Student.passpartout.destroy() instead.
        "::destroy::student::passpartout": {
          url: urlBase + "/students/:id/passpartout",
          method: "DELETE"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Passpartout#updateOrCreate
         * @methodOf lbServices.Passpartout
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Passpartout` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Passpartout#update
         * @methodOf lbServices.Passpartout
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Passpartout#destroyById
         * @methodOf lbServices.Passpartout
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Passpartout` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Passpartout#removeById
         * @methodOf lbServices.Passpartout
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Passpartout` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Passpartout#modelName
    * @propertyOf lbServices.Passpartout
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Passpartout`.
    */
    R.modelName = "Passpartout";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Lesson
 * @header lbServices.Lesson
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Lesson` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Lesson",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/lessons/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Lesson.student() instead.
        "prototype$__get__student": {
          url: urlBase + "/lessons/:id/student",
          method: "GET"
        },

        // INTERNAL. Use Lesson.course() instead.
        "prototype$__get__course": {
          url: urlBase + "/lessons/:id/course",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#create
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/lessons",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#createMany
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/lessons",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#upsert
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/lessons",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#exists
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/lessons/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#findById
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/lessons/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#find
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/lessons",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#findOne
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/lessons/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#updateAll
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/lessons/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#deleteById
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/lessons/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#count
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/lessons/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#prototype$updateAttributes
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/lessons/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Lesson#createChangeStream
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/lessons/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Student.require.findById() instead.
        "::findById::student::require": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/require/:fk",
          method: "GET"
        },

        // INTERNAL. Use Student.require.destroyById() instead.
        "::destroyById::student::require": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/require/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.require.updateById() instead.
        "::updateById::student::require": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/require/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.require.link() instead.
        "::link::student::require": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/require/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.require.unlink() instead.
        "::unlink::student::require": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/require/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.require.exists() instead.
        "::exists::student::require": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/require/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Student.require() instead.
        "::get::student::require": {
          isArray: true,
          url: urlBase + "/students/:id/require",
          method: "GET"
        },

        // INTERNAL. Use Student.require.create() instead.
        "::create::student::require": {
          url: urlBase + "/students/:id/require",
          method: "POST"
        },

        // INTERNAL. Use Student.require.createMany() instead.
        "::createMany::student::require": {
          isArray: true,
          url: urlBase + "/students/:id/require",
          method: "POST"
        },

        // INTERNAL. Use Student.require.destroyAll() instead.
        "::delete::student::require": {
          url: urlBase + "/students/:id/require",
          method: "DELETE"
        },

        // INTERNAL. Use Student.require.count() instead.
        "::count::student::require": {
          url: urlBase + "/students/:id/require/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Lesson#updateOrCreate
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Lesson#update
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Lesson#destroyById
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Lesson#removeById
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Lesson` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Lesson#modelName
    * @propertyOf lbServices.Lesson
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Lesson`.
    */
    R.modelName = "Lesson";


        /**
         * @ngdoc method
         * @name lbServices.Lesson#student
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Fetches belongsTo relation student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.student = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::get::lesson::student"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Lesson#course
         * @methodOf lbServices.Lesson
         *
         * @description
         *
         * Fetches belongsTo relation course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.course = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::lesson::course"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.University
 * @header lbServices.University
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `University` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "University",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/universities/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use University.student.findById() instead.
        "prototype$__findById__student": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/student/:fk",
          method: "GET"
        },

        // INTERNAL. Use University.student.destroyById() instead.
        "prototype$__destroyById__student": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/student/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use University.student.updateById() instead.
        "prototype$__updateById__student": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/student/:fk",
          method: "PUT"
        },

        // INTERNAL. Use University.offers.findById() instead.
        "prototype$__findById__offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/offers/:fk",
          method: "GET"
        },

        // INTERNAL. Use University.offers.destroyById() instead.
        "prototype$__destroyById__offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/offers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use University.offers.updateById() instead.
        "prototype$__updateById__offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/offers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use University.offers.link() instead.
        "prototype$__link__offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/offers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use University.offers.unlink() instead.
        "prototype$__unlink__offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/offers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use University.offers.exists() instead.
        "prototype$__exists__offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/offers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use University.student() instead.
        "prototype$__get__student": {
          isArray: true,
          url: urlBase + "/universities/:id/student",
          method: "GET"
        },

        // INTERNAL. Use University.student.create() instead.
        "prototype$__create__student": {
          url: urlBase + "/universities/:id/student",
          method: "POST"
        },

        // INTERNAL. Use University.student.destroyAll() instead.
        "prototype$__delete__student": {
          url: urlBase + "/universities/:id/student",
          method: "DELETE"
        },

        // INTERNAL. Use University.student.count() instead.
        "prototype$__count__student": {
          url: urlBase + "/universities/:id/student/count",
          method: "GET"
        },

        // INTERNAL. Use University.offers() instead.
        "prototype$__get__offers": {
          isArray: true,
          url: urlBase + "/universities/:id/offers",
          method: "GET"
        },

        // INTERNAL. Use University.offers.create() instead.
        "prototype$__create__offers": {
          url: urlBase + "/universities/:id/offers",
          method: "POST"
        },

        // INTERNAL. Use University.offers.destroyAll() instead.
        "prototype$__delete__offers": {
          url: urlBase + "/universities/:id/offers",
          method: "DELETE"
        },

        // INTERNAL. Use University.offers.count() instead.
        "prototype$__count__offers": {
          url: urlBase + "/universities/:id/offers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#create
         * @methodOf lbServices.University
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/universities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#createMany
         * @methodOf lbServices.University
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/universities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#upsert
         * @methodOf lbServices.University
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/universities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#exists
         * @methodOf lbServices.University
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/universities/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#findById
         * @methodOf lbServices.University
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/universities/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#find
         * @methodOf lbServices.University
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/universities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#findOne
         * @methodOf lbServices.University
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/universities/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#updateAll
         * @methodOf lbServices.University
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/universities/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#deleteById
         * @methodOf lbServices.University
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/universities/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#count
         * @methodOf lbServices.University
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/universities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#prototype$updateAttributes
         * @methodOf lbServices.University
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/universities/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.University#createChangeStream
         * @methodOf lbServices.University
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/universities/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Student.university() instead.
        "::get::student::university": {
          url: urlBase + "/students/:id/university",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.University#updateOrCreate
         * @methodOf lbServices.University
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.University#update
         * @methodOf lbServices.University
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.University#destroyById
         * @methodOf lbServices.University
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.University#removeById
         * @methodOf lbServices.University
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `University` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.University#modelName
    * @propertyOf lbServices.University
    * @description
    * The name of the model represented by this $resource,
    * i.e. `University`.
    */
    R.modelName = "University";

    /**
     * @ngdoc object
     * @name lbServices.University.student
     * @header lbServices.University.student
     * @object
     * @description
     *
     * The object `University.student` groups methods
     * manipulating `Student` instances related to `University`.
     *
     * Call {@link lbServices.University#student University.student()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.University#student
         * @methodOf lbServices.University
         *
         * @description
         *
         * Queries student of university.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.student = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::get::university::student"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.student#count
         * @methodOf lbServices.University.student
         *
         * @description
         *
         * Counts student of university.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.student.count = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::count::university::student"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.student#create
         * @methodOf lbServices.University.student
         *
         * @description
         *
         * Creates a new instance in student of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.student.create = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::create::university::student"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.student#createMany
         * @methodOf lbServices.University.student
         *
         * @description
         *
         * Creates a new instance in student of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.student.createMany = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::createMany::university::student"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.student#destroyAll
         * @methodOf lbServices.University.student
         *
         * @description
         *
         * Deletes all student of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.student.destroyAll = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::delete::university::student"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.student#destroyById
         * @methodOf lbServices.University.student
         *
         * @description
         *
         * Delete a related item by id for student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for student
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.student.destroyById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::destroyById::university::student"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.student#findById
         * @methodOf lbServices.University.student
         *
         * @description
         *
         * Find a related item by id for student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for student
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.student.findById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::findById::university::student"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.student#updateById
         * @methodOf lbServices.University.student
         *
         * @description
         *
         * Update a related item by id for student.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for student
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.student.updateById = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::updateById::university::student"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.University.offers
     * @header lbServices.University.offers
     * @object
     * @description
     *
     * The object `University.offers` groups methods
     * manipulating `Course` instances related to `University`.
     *
     * Call {@link lbServices.University#offers University.offers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.University#offers
         * @methodOf lbServices.University
         *
         * @description
         *
         * Queries offers of university.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.offers = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::university::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.offers#count
         * @methodOf lbServices.University.offers
         *
         * @description
         *
         * Counts offers of university.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.offers.count = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::count::university::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.offers#create
         * @methodOf lbServices.University.offers
         *
         * @description
         *
         * Creates a new instance in offers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.offers.create = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::create::university::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.offers#createMany
         * @methodOf lbServices.University.offers
         *
         * @description
         *
         * Creates a new instance in offers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.offers.createMany = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::createMany::university::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.offers#destroyAll
         * @methodOf lbServices.University.offers
         *
         * @description
         *
         * Deletes all offers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.offers.destroyAll = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::delete::university::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.offers#destroyById
         * @methodOf lbServices.University.offers
         *
         * @description
         *
         * Delete a related item by id for offers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for offers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.offers.destroyById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::destroyById::university::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.offers#exists
         * @methodOf lbServices.University.offers
         *
         * @description
         *
         * Check the existence of offers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for offers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.offers.exists = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::exists::university::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.offers#findById
         * @methodOf lbServices.University.offers
         *
         * @description
         *
         * Find a related item by id for offers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for offers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.offers.findById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::findById::university::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.offers#link
         * @methodOf lbServices.University.offers
         *
         * @description
         *
         * Add a related item by id for offers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for offers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.offers.link = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::link::university::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.offers#unlink
         * @methodOf lbServices.University.offers
         *
         * @description
         *
         * Remove the offers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for offers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.offers.unlink = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::unlink::university::offers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.University.offers#updateById
         * @methodOf lbServices.University.offers
         *
         * @description
         *
         * Update a related item by id for offers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for offers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.offers.updateById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::updateById::university::offers"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Note
 * @header lbServices.Note
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Note` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Note",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/notes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Note.relativeTo() instead.
        "prototype$__get__relativeTo": {
          url: urlBase + "/notes/:id/relativeTo",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Note#create
         * @methodOf lbServices.Note
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Note` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/notes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Note#createMany
         * @methodOf lbServices.Note
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Note` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/notes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Note#upsert
         * @methodOf lbServices.Note
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Note` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/notes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Note#exists
         * @methodOf lbServices.Note
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/notes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Note#findById
         * @methodOf lbServices.Note
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Note` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/notes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Note#find
         * @methodOf lbServices.Note
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Note` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/notes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Note#findOne
         * @methodOf lbServices.Note
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Note` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/notes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Note#updateAll
         * @methodOf lbServices.Note
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/notes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Note#deleteById
         * @methodOf lbServices.Note
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Note` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/notes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Note#count
         * @methodOf lbServices.Note
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/notes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Note#prototype$updateAttributes
         * @methodOf lbServices.Note
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Note` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/notes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Note#createChangeStream
         * @methodOf lbServices.Note
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/notes/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Student.share.findById() instead.
        "::findById::student::share": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/share/:fk",
          method: "GET"
        },

        // INTERNAL. Use Student.share.destroyById() instead.
        "::destroyById::student::share": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/share/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.share.updateById() instead.
        "::updateById::student::share": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/share/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.share() instead.
        "::get::student::share": {
          isArray: true,
          url: urlBase + "/students/:id/share",
          method: "GET"
        },

        // INTERNAL. Use Student.share.create() instead.
        "::create::student::share": {
          url: urlBase + "/students/:id/share",
          method: "POST"
        },

        // INTERNAL. Use Student.share.createMany() instead.
        "::createMany::student::share": {
          isArray: true,
          url: urlBase + "/students/:id/share",
          method: "POST"
        },

        // INTERNAL. Use Student.share.destroyAll() instead.
        "::delete::student::share": {
          url: urlBase + "/students/:id/share",
          method: "DELETE"
        },

        // INTERNAL. Use Student.share.count() instead.
        "::count::student::share": {
          url: urlBase + "/students/:id/share/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Note#updateOrCreate
         * @methodOf lbServices.Note
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Note` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Note#update
         * @methodOf lbServices.Note
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Note#destroyById
         * @methodOf lbServices.Note
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Note` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Note#removeById
         * @methodOf lbServices.Note
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Note` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Note#modelName
    * @propertyOf lbServices.Note
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Note`.
    */
    R.modelName = "Note";


        /**
         * @ngdoc method
         * @name lbServices.Note#relativeTo
         * @methodOf lbServices.Note
         *
         * @description
         *
         * Fetches belongsTo relation relativeTo.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.relativeTo = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::note::relativeTo"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Course
 * @header lbServices.Course
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Course` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Course",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/courses/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Course.manage.findById() instead.
        "prototype$__findById__manage": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/manage/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.manage.destroyById() instead.
        "prototype$__destroyById__manage": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/manage/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.manage.updateById() instead.
        "prototype$__updateById__manage": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/manage/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.manage.link() instead.
        "prototype$__link__manage": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/manage/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.manage.unlink() instead.
        "prototype$__unlink__manage": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/manage/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.manage.exists() instead.
        "prototype$__exists__manage": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/manage/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Course.toughtBy.findById() instead.
        "prototype$__findById__toughtBy": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/toughtBy/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.toughtBy.destroyById() instead.
        "prototype$__destroyById__toughtBy": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/toughtBy/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.toughtBy.updateById() instead.
        "prototype$__updateById__toughtBy": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/toughtBy/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.toughtBy.link() instead.
        "prototype$__link__toughtBy": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/toughtBy/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.toughtBy.unlink() instead.
        "prototype$__unlink__toughtBy": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/toughtBy/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.toughtBy.exists() instead.
        "prototype$__exists__toughtBy": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/toughtBy/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Course.manage() instead.
        "prototype$__get__manage": {
          isArray: true,
          url: urlBase + "/courses/:id/manage",
          method: "GET"
        },

        // INTERNAL. Use Course.manage.create() instead.
        "prototype$__create__manage": {
          url: urlBase + "/courses/:id/manage",
          method: "POST"
        },

        // INTERNAL. Use Course.manage.destroyAll() instead.
        "prototype$__delete__manage": {
          url: urlBase + "/courses/:id/manage",
          method: "DELETE"
        },

        // INTERNAL. Use Course.manage.count() instead.
        "prototype$__count__manage": {
          url: urlBase + "/courses/:id/manage/count",
          method: "GET"
        },

        // INTERNAL. Use Course.toughtBy() instead.
        "prototype$__get__toughtBy": {
          isArray: true,
          url: urlBase + "/courses/:id/toughtBy",
          method: "GET"
        },

        // INTERNAL. Use Course.toughtBy.create() instead.
        "prototype$__create__toughtBy": {
          url: urlBase + "/courses/:id/toughtBy",
          method: "POST"
        },

        // INTERNAL. Use Course.toughtBy.destroyAll() instead.
        "prototype$__delete__toughtBy": {
          url: urlBase + "/courses/:id/toughtBy",
          method: "DELETE"
        },

        // INTERNAL. Use Course.toughtBy.count() instead.
        "prototype$__count__toughtBy": {
          url: urlBase + "/courses/:id/toughtBy/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#create
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/courses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#createMany
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/courses",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#upsert
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/courses",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#exists
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/courses/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#findById
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/courses/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#find
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/courses",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#findOne
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/courses/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#updateAll
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/courses/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#deleteById
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/courses/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#count
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/courses/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#prototype$updateAttributes
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/courses/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Course#createChangeStream
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/courses/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Student.teach.findById() instead.
        "::findById::student::teach": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/teach/:fk",
          method: "GET"
        },

        // INTERNAL. Use Student.teach.destroyById() instead.
        "::destroyById::student::teach": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/teach/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.teach.updateById() instead.
        "::updateById::student::teach": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/teach/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.teach.link() instead.
        "::link::student::teach": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/teach/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Student.teach.unlink() instead.
        "::unlink::student::teach": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/teach/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Student.teach.exists() instead.
        "::exists::student::teach": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/students/:id/teach/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Student.teach() instead.
        "::get::student::teach": {
          isArray: true,
          url: urlBase + "/students/:id/teach",
          method: "GET"
        },

        // INTERNAL. Use Student.teach.create() instead.
        "::create::student::teach": {
          url: urlBase + "/students/:id/teach",
          method: "POST"
        },

        // INTERNAL. Use Student.teach.createMany() instead.
        "::createMany::student::teach": {
          isArray: true,
          url: urlBase + "/students/:id/teach",
          method: "POST"
        },

        // INTERNAL. Use Student.teach.destroyAll() instead.
        "::delete::student::teach": {
          url: urlBase + "/students/:id/teach",
          method: "DELETE"
        },

        // INTERNAL. Use Student.teach.count() instead.
        "::count::student::teach": {
          url: urlBase + "/students/:id/teach/count",
          method: "GET"
        },

        // INTERNAL. Use Lesson.course() instead.
        "::get::lesson::course": {
          url: urlBase + "/lessons/:id/course",
          method: "GET"
        },

        // INTERNAL. Use University.offers.findById() instead.
        "::findById::university::offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/offers/:fk",
          method: "GET"
        },

        // INTERNAL. Use University.offers.destroyById() instead.
        "::destroyById::university::offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/offers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use University.offers.updateById() instead.
        "::updateById::university::offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/offers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use University.offers.link() instead.
        "::link::university::offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/offers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use University.offers.unlink() instead.
        "::unlink::university::offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/offers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use University.offers.exists() instead.
        "::exists::university::offers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/universities/:id/offers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use University.offers() instead.
        "::get::university::offers": {
          isArray: true,
          url: urlBase + "/universities/:id/offers",
          method: "GET"
        },

        // INTERNAL. Use University.offers.create() instead.
        "::create::university::offers": {
          url: urlBase + "/universities/:id/offers",
          method: "POST"
        },

        // INTERNAL. Use University.offers.createMany() instead.
        "::createMany::university::offers": {
          isArray: true,
          url: urlBase + "/universities/:id/offers",
          method: "POST"
        },

        // INTERNAL. Use University.offers.destroyAll() instead.
        "::delete::university::offers": {
          url: urlBase + "/universities/:id/offers",
          method: "DELETE"
        },

        // INTERNAL. Use University.offers.count() instead.
        "::count::university::offers": {
          url: urlBase + "/universities/:id/offers/count",
          method: "GET"
        },

        // INTERNAL. Use Note.relativeTo() instead.
        "::get::note::relativeTo": {
          url: urlBase + "/notes/:id/relativeTo",
          method: "GET"
        },

        // INTERNAL. Use Course.manage.findById() instead.
        "::findById::course::manage": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/manage/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.manage.destroyById() instead.
        "::destroyById::course::manage": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/manage/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.manage.updateById() instead.
        "::updateById::course::manage": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/manage/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.manage.link() instead.
        "::link::course::manage": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/manage/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.manage.unlink() instead.
        "::unlink::course::manage": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/manage/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.manage.exists() instead.
        "::exists::course::manage": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/manage/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Course.manage() instead.
        "::get::course::manage": {
          isArray: true,
          url: urlBase + "/courses/:id/manage",
          method: "GET"
        },

        // INTERNAL. Use Course.manage.create() instead.
        "::create::course::manage": {
          url: urlBase + "/courses/:id/manage",
          method: "POST"
        },

        // INTERNAL. Use Course.manage.createMany() instead.
        "::createMany::course::manage": {
          isArray: true,
          url: urlBase + "/courses/:id/manage",
          method: "POST"
        },

        // INTERNAL. Use Course.manage.destroyAll() instead.
        "::delete::course::manage": {
          url: urlBase + "/courses/:id/manage",
          method: "DELETE"
        },

        // INTERNAL. Use Course.manage.count() instead.
        "::count::course::manage": {
          url: urlBase + "/courses/:id/manage/count",
          method: "GET"
        },

        // INTERNAL. Use Feedback.relativeTo() instead.
        "::get::feedback::relativeTo": {
          url: urlBase + "/feedbacks/:id/relativeTo",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Course#updateOrCreate
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Course#update
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Course#destroyById
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Course#removeById
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Course#modelName
    * @propertyOf lbServices.Course
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Course`.
    */
    R.modelName = "Course";

    /**
     * @ngdoc object
     * @name lbServices.Course.manage
     * @header lbServices.Course.manage
     * @object
     * @description
     *
     * The object `Course.manage` groups methods
     * manipulating `Course` instances related to `Course`.
     *
     * Call {@link lbServices.Course#manage Course.manage()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Course#manage
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Queries manage of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.manage = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::course::manage"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.manage#count
         * @methodOf lbServices.Course.manage
         *
         * @description
         *
         * Counts manage of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.manage.count = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::count::course::manage"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.manage#create
         * @methodOf lbServices.Course.manage
         *
         * @description
         *
         * Creates a new instance in manage of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.manage.create = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::create::course::manage"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.manage#createMany
         * @methodOf lbServices.Course.manage
         *
         * @description
         *
         * Creates a new instance in manage of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.manage.createMany = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::createMany::course::manage"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.manage#destroyAll
         * @methodOf lbServices.Course.manage
         *
         * @description
         *
         * Deletes all manage of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.manage.destroyAll = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::delete::course::manage"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.manage#destroyById
         * @methodOf lbServices.Course.manage
         *
         * @description
         *
         * Delete a related item by id for manage.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for manage
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.manage.destroyById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::destroyById::course::manage"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.manage#exists
         * @methodOf lbServices.Course.manage
         *
         * @description
         *
         * Check the existence of manage relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for manage
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.manage.exists = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::exists::course::manage"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.manage#findById
         * @methodOf lbServices.Course.manage
         *
         * @description
         *
         * Find a related item by id for manage.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for manage
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.manage.findById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::findById::course::manage"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.manage#link
         * @methodOf lbServices.Course.manage
         *
         * @description
         *
         * Add a related item by id for manage.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for manage
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.manage.link = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::link::course::manage"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.manage#unlink
         * @methodOf lbServices.Course.manage
         *
         * @description
         *
         * Remove the manage relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for manage
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.manage.unlink = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::unlink::course::manage"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.manage#updateById
         * @methodOf lbServices.Course.manage
         *
         * @description
         *
         * Update a related item by id for manage.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for manage
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.manage.updateById = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::updateById::course::manage"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Course.toughtBy
     * @header lbServices.Course.toughtBy
     * @object
     * @description
     *
     * The object `Course.toughtBy` groups methods
     * manipulating `Teacher` instances related to `Course`.
     *
     * Call {@link lbServices.Course#toughtBy Course.toughtBy()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Course#toughtBy
         * @methodOf lbServices.Course
         *
         * @description
         *
         * Queries toughtBy of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.toughtBy = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::get::course::toughtBy"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.toughtBy#count
         * @methodOf lbServices.Course.toughtBy
         *
         * @description
         *
         * Counts toughtBy of course.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.toughtBy.count = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::count::course::toughtBy"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.toughtBy#create
         * @methodOf lbServices.Course.toughtBy
         *
         * @description
         *
         * Creates a new instance in toughtBy of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.toughtBy.create = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::create::course::toughtBy"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.toughtBy#createMany
         * @methodOf lbServices.Course.toughtBy
         *
         * @description
         *
         * Creates a new instance in toughtBy of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.toughtBy.createMany = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::createMany::course::toughtBy"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.toughtBy#destroyAll
         * @methodOf lbServices.Course.toughtBy
         *
         * @description
         *
         * Deletes all toughtBy of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.toughtBy.destroyAll = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::delete::course::toughtBy"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.toughtBy#destroyById
         * @methodOf lbServices.Course.toughtBy
         *
         * @description
         *
         * Delete a related item by id for toughtBy.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for toughtBy
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.toughtBy.destroyById = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::destroyById::course::toughtBy"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.toughtBy#exists
         * @methodOf lbServices.Course.toughtBy
         *
         * @description
         *
         * Check the existence of toughtBy relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for toughtBy
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.toughtBy.exists = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::exists::course::toughtBy"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.toughtBy#findById
         * @methodOf lbServices.Course.toughtBy
         *
         * @description
         *
         * Find a related item by id for toughtBy.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for toughtBy
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.toughtBy.findById = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::findById::course::toughtBy"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.toughtBy#link
         * @methodOf lbServices.Course.toughtBy
         *
         * @description
         *
         * Add a related item by id for toughtBy.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for toughtBy
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.toughtBy.link = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::link::course::toughtBy"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.toughtBy#unlink
         * @methodOf lbServices.Course.toughtBy
         *
         * @description
         *
         * Remove the toughtBy relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for toughtBy
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.toughtBy.unlink = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::unlink::course::toughtBy"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Course.toughtBy#updateById
         * @methodOf lbServices.Course.toughtBy
         *
         * @description
         *
         * Update a related item by id for toughtBy.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for toughtBy
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R.toughtBy.updateById = function() {
          var TargetResource = $injector.get("Teacher");
          var action = TargetResource["::updateById::course::toughtBy"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Teacher
 * @header lbServices.Teacher
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Teacher` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Teacher",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/teachers/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Teacher#create
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/teachers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#createMany
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/teachers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#upsert
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/teachers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#exists
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/teachers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#findById
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/teachers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#find
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/teachers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#findOne
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/teachers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#updateAll
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/teachers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#deleteById
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/teachers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#count
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/teachers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#prototype$updateAttributes
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/teachers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Teacher#createChangeStream
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/teachers/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Course.toughtBy.findById() instead.
        "::findById::course::toughtBy": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/toughtBy/:fk",
          method: "GET"
        },

        // INTERNAL. Use Course.toughtBy.destroyById() instead.
        "::destroyById::course::toughtBy": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/toughtBy/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.toughtBy.updateById() instead.
        "::updateById::course::toughtBy": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/toughtBy/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.toughtBy.link() instead.
        "::link::course::toughtBy": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/toughtBy/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Course.toughtBy.unlink() instead.
        "::unlink::course::toughtBy": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/toughtBy/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Course.toughtBy.exists() instead.
        "::exists::course::toughtBy": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/courses/:id/toughtBy/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Course.toughtBy() instead.
        "::get::course::toughtBy": {
          isArray: true,
          url: urlBase + "/courses/:id/toughtBy",
          method: "GET"
        },

        // INTERNAL. Use Course.toughtBy.create() instead.
        "::create::course::toughtBy": {
          url: urlBase + "/courses/:id/toughtBy",
          method: "POST"
        },

        // INTERNAL. Use Course.toughtBy.createMany() instead.
        "::createMany::course::toughtBy": {
          isArray: true,
          url: urlBase + "/courses/:id/toughtBy",
          method: "POST"
        },

        // INTERNAL. Use Course.toughtBy.destroyAll() instead.
        "::delete::course::toughtBy": {
          url: urlBase + "/courses/:id/toughtBy",
          method: "DELETE"
        },

        // INTERNAL. Use Course.toughtBy.count() instead.
        "::count::course::toughtBy": {
          url: urlBase + "/courses/:id/toughtBy/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Teacher#updateOrCreate
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Teacher#update
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Teacher#destroyById
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Teacher#removeById
         * @methodOf lbServices.Teacher
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Teacher` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Teacher#modelName
    * @propertyOf lbServices.Teacher
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Teacher`.
    */
    R.modelName = "Teacher";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Feedback
 * @header lbServices.Feedback
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Feedback` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Feedback",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/feedbacks/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Feedback.relativeTo() instead.
        "prototype$__get__relativeTo": {
          url: urlBase + "/feedbacks/:id/relativeTo",
          method: "GET"
        },

        // INTERNAL. Use Feedback.sendTo() instead.
        "prototype$__get__sendTo": {
          url: urlBase + "/feedbacks/:id/sendTo",
          method: "GET"
        },

        // INTERNAL. Use Feedback.sendFrom() instead.
        "prototype$__get__sendFrom": {
          url: urlBase + "/feedbacks/:id/sendFrom",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#create
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/feedbacks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#createMany
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/feedbacks",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#upsert
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/feedbacks",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#exists
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/feedbacks/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#findById
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/feedbacks/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#find
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/feedbacks",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#findOne
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/feedbacks/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#updateAll
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/feedbacks/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#deleteById
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/feedbacks/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#count
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/feedbacks/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#prototype$updateAttributes
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/feedbacks/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Feedback#createChangeStream
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/feedbacks/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Feedback#updateOrCreate
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Feedback#update
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Feedback#destroyById
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Feedback#removeById
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Feedback` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Feedback#modelName
    * @propertyOf lbServices.Feedback
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Feedback`.
    */
    R.modelName = "Feedback";


        /**
         * @ngdoc method
         * @name lbServices.Feedback#relativeTo
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Fetches belongsTo relation relativeTo.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Course` object.)
         * </em>
         */
        R.relativeTo = function() {
          var TargetResource = $injector.get("Course");
          var action = TargetResource["::get::feedback::relativeTo"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Feedback#sendTo
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Fetches belongsTo relation sendTo.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.sendTo = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::get::feedback::sendTo"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Feedback#sendFrom
         * @methodOf lbServices.Feedback
         *
         * @description
         *
         * Fetches belongsTo relation sendFrom.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Student` object.)
         * </em>
         */
        R.sendFrom = function() {
          var TargetResource = $injector.get("Student");
          var action = TargetResource["::get::feedback::sendFrom"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch(err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
