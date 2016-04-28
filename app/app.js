'use strict';

// Declare app level module which depends on views, and components
angular.module('docScrypt', [
  'ngRoute',
  'docScrypt.editor',
  'docScrypt.view2',
  'docScrypt.version',
  'ngQuill'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/editor'});
}]);
