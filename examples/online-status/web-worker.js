'use strict';

function getStatus() {
  if (navigator.onLine)
    return 'Online';

  return 'Offline';
}

function postUpdate() {
  self.postMessage(getStatus());
}

self.addEventListener('online', postUpdate, false);
self.addEventListener('offline', postUpdate, false);

postUpdate();
