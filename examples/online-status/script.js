'use strict';

function getStatus() {
  if (navigator.onLine)
    return 'Online';

  return 'Offline';
}

function updateOnlineIndicator() {
  var el = document.getElementById('online-indicator');
  el.innerText = getStatus();

  if (navigator.onLine)
    return el.classList.add('online');

  el.classList.remove('online');
}

function handleEvent() {
  updateOnlineIndicator();
  var li = document.createElement('li');
  li.innerText = getStatus();
  document.getElementById('events-list').appendChild(li);
}

window.addEventListener('online', handleEvent, false);
window.addEventListener('offline', handleEvent, false);

updateOnlineIndicator();

var worker = new Worker('web-worker.js');

worker.addEventListener('message', function(e) {
  console.log('Worker said: ', e.data);
}, false);
