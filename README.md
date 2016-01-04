# Offline webapps

This document should cover basic of how to write offline web applications.

## TOC

1. [Intro](#intro)
2. [Online/Offline status](#onlineoffline-status)
3. [Application cache](#application-cache)
4. [Service Workers](#service-workers)
5. [Storage](#storage)
6. [localStorage](#localstorage)
7. [WebSQL](#websql)
8. [IndexedDB](#indexeddb)

## Intro

## Online/Offline status

Before we dive deep into offline web application, you would probably like to know if user is online and to receive an event when that status is changed.  
Fortunately almost all browsers implements this feature.

### `navigator.onLine` property

The `navigator.onLine` property is a read-only property that returns user's current online status. As defined in specs it must return false if the user agent will not contact the network when the user follows links or when a script requests a remote page (or knows that such an attempt would fail), and must return true otherwise.

This sounds good, but as always, it's a bit different in reality. Some browsers implemented this feature differently - on Chrome and Safari this property will return `false` if user can't connect on the network, in Firefox and Internet Explorer switching browser to an offline more will return `false`.

Usage:

```js
// From a browser
window.navigator.onLine // true or false

// From a worker
self.navigator.onLine // true or false

// Or simply
navigator.onLine // true or false
```

### `online` and `offline` events

Whenever online status is changed online or offline event is fired on body of each page and it bubbles up to document and finally window. Both of those events are not cancelable.

There's 3 ways of registering listeners for those events:

1. By adding an event listener on body, document or window (or self in case of a web worker);
2. By setting `.ononline` and `.onoffline` properties on document or body;
3. By defining `ononline=""`and `onoffline=""` attribute in `<body>` tag.

Usage:

```js
// Add an event listener on window, document or body
window.addEventListener('offline', e => console.log('offline'))
window.addEventListener('online', e => console.log('online'))

// Or by using .ononline and .onoffline on document or body
document.body.ononline = () => console.log('online')
document.body.onoffline = () => console.log('offline')

// From a worker
self.addEventListener('offline', e => self.postMessage('offline'), false)
self.addEventListener('online', e => self.postMessage('online'), false)
```

### Tricky parts

1. It seems that the events are not triggered in the worker on Chrome (tested on Mac on versions 47 and Chrome Canary v49). Events works fine on Safari and Firefox.
2. `.ononline` and `.onoffline` properties can't be used on `window`, from [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/ononline): "**Note:** using `window.ononline` or `window.onoffline` will not work for compatibility reasons."
3. In Firefox, prior to version 41 `navigator.onLine` property returned `false` only if you are in an offline mode, and from version 41 on OS X and Windows, the value should follow the actual network connectivity.
4. As noted in specs, this attribute is inherently unreliable. A computer can be connected to a network without having Internet access. Most of the browsers just checks if the device is connected to any network, not if it is able to access the internet.
5. Offline event is not triggered when you use Chrome Dev tools' Network throttling to simulate an offline mode.
6. `self.ononline` and `self.onoffline` seems to be working only on Safari on Mac.

### Demo


### Browser support

![](assets/browser-support/online-status.png)
Source: [caniuse.com](http://caniuse.com/#feat=online-status); Date: 2015/12/26.

### More info

- [HTML Specs](https://html.spec.whatwg.org/multipage/browsers.html#browser-state)
- [MDN: Online and offline events](https://developer.mozilla.org/en/docs/Online_and_offline_events)
- [HTML5 Demos](http://html5demos.com/offline)

[[Back to top]](#offline-webapps)

## Application cache

### Browser support

![](assets/browser-support/application-cache.png)
Source: [caniuse.com](http://caniuse.com/#feat=offline-apps); Date: 2015/12/26.

[[Back to top]](#offline-webapps)

## Service workers

### Browser support

![](assets/browser-support/service-workers.png)
Source: [caniuse.com](http://caniuse.com/#feat=serviceworkers); Date: 2015/12/26.

[[Back to top]](#offline-webapps)

## Storage


## localStorage

### Browser support

![](assets/browser-support/localstorage.png)
Source: [caniuse.com](http://caniuse.com/#feat=namevalue-storage); Date: 2015/12/26.

[[Back to top]](#offline-webapps)

## WebSQL

### Browser support

![](assets/browser-support/websql.png)
Source: [caniuse.com](http://caniuse.com/#feat=sql-storage); Date: 2015/12/26.

[[Back to top]](#offline-webapps)

## IndexedDB

### Browser support

![](assets/browser-support/indexeddb.png)
Source: [caniuse.com](http://caniuse.com/#feat=indexeddb); Date: 2015/12/26.

[[Back to top]](#offline-webapps)