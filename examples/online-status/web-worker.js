'use strict';

function getStatus() {
  if (navigator.onLine)
    return 'Online';

  return 'Offline';
}

function postUpdate() {
  self.postMessage(getStatus());
}

self.ononline = function() {
  self.postMessage('On online');
}

self.onoffline = function() {
  self.postMessage('On offline');
}

self.addEventListener('online', postUpdate, false);
self.addEventListener('offline', postUpdate, false);

postUpdate();
