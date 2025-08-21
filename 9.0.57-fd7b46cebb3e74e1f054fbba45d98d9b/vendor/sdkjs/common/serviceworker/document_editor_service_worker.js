/*
 * Copyright (C) Ascensio System SIA 2012-2025. All rights reserved
 *
 * https://www.onlyoffice.com/
 *
 * Version: 0.0.0 (build:0)
 */

var g_version="0.0.0-0";var pathnameParts=self.location.pathname.split("/");if(pathnameParts.length>1&&pathnameParts[pathnameParts.length-2])g_version=pathnameParts[pathnameParts.length-2];var g_cacheNamePrefix="document_editor_static_";var g_cacheName=g_cacheNamePrefix+g_version;var patternPrefix=new RegExp(g_version+"/(web-apps|sdkjs|sdkjs-plugins|fonts|dictionaries)");var isDesktopEditor=navigator.userAgent.indexOf("AscDesktopEditor")!==-1;
function putInCache(request,response){return caches.open(g_cacheName).then(function(cache){return cache.put(request,response)}).catch(function(err){console.error("putInCache failed with "+err)})}
function cacheFirst(event){var request=event.request;return caches.match(request,{cacheName:g_cacheName}).then(function(responseFromCache){if(responseFromCache)return responseFromCache;else return fetch(request).then(function(responseFromNetwork){if(responseFromNetwork.status===200)event.waitUntil(putInCache(request,responseFromNetwork.clone()));return responseFromNetwork})})}
function activateWorker(event){return self.clients.claim().then(function(){return caches.keys()}).then(function(keys){return Promise.all(keys.map(function(cache){if(cache.includes(g_cacheNamePrefix)&&!cache.includes(g_cacheName))return caches.delete(cache)}))}).catch(function(err){console.error("activateWorker failed with "+err)})}self.addEventListener("install",function(event){event.waitUntil(self.skipWaiting())});self.addEventListener("activate",function(event){event.waitUntil(activateWorker())});
self.addEventListener("fetch",function(event){var request=event.request;if(request.method!=="GET"||!patternPrefix.test(request.url))return;if(isDesktopEditor)if(-1!==request.url.indexOf("/sdkjs/common/AllFonts.js"))return;event.respondWith(cacheFirst(event))});
