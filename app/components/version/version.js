'use strict';

angular.module('docScrypt.version', [
  'docScrypt.version.interpolate-filter',
  'docScrypt.version.version-directive'
])

.value('version', '0.0.1');
