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

As specified in specs, the `navigator.onLine` attribute must return false if the user agent will not contact the network when the user follows links or when a script requests a remote page (or knows that such an attempt would fail), and must return true otherwise.

This sounds good, but as always, it's a bit different in reality. Some browsers implemented this feature differently - on Chrome and Safari this property will return `false` if user can't connect on the network, in Firefox and Internet Explorer switching browser to an offline more will return `false`.

### `online` and `offline` events

Usage:

```
// Add an event listener on window, document or body
window.addEventListener('offline, e => console.log('offline'))
window.addEventListener('online', e => console.log('online'))

// Or by using .ononline and .onoffline on document or body
document.body.ononline = () => console.log('online')
document.body.onoffline = () => console.log('offline')
```

### Demo


### Browser support

![](assets/browser-support/online-status.png)
Source: [caniuse.com](http://caniuse.com/#feat=online-status); Date: 2015/12/26.

### More info

- [HTML Specs](https://html.spec.whatwg.org/multipage/browsers.html#browser-state)

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