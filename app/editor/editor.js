'use strict';

angular.module('docScrypt.editor', ['ngRoute', 'ngQuill'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/editor', {
    templateUrl: 'editor/editor.html',
    controller: 'editorCtrl'
  });
}])

.controller('editorCtrl', [function() {

}]);
