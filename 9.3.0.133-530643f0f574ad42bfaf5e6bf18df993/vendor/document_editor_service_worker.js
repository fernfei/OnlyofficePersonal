/*
 * (c) Copyright Ascensio System SIA 2010-2024
 *
 * This program is a free software product. You can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License (AGPL)
 * version 3 as published by the Free Software Foundation. In accordance with
 * Section 7(a) of the GNU AGPL its Section 15 shall be amended to the effect
 * that Ascensio System SIA expressly excludes the warranty of non-infringement
 * of any third-party rights.
 *
 * This program is distributed WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR  PURPOSE. For
 * details, see the GNU AGPL at: http://www.gnu.org/licenses/agpl-3.0.html
 *
 * You can contact Ascensio System SIA at 20A-6 Ernesta Birznieka-Upish
 * street, Riga, Latvia, EU, LV-1050.
 *
 * The  interactive user interfaces in modified source and object code versions
 * of the Program must display Appropriate Legal Notices, as required under
 * Section 5 of the GNU AGPL version 3.
 *
 * Pursuant to Section 7(b) of the License you must retain the original Product
 * logo when distributing the program. Pursuant to Section 7(e) we decline to
 * grant you any rights under trademark law for use of our trademarks.
 *
 * All the Product's GUI elements, including illustrations and icon sets, as
 * well as technical writing content are licensed under the terms of the
 * Creative Commons Attribution-ShareAlike 4.0 International. See the License
 * terms at http://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
 */

"use strict";

let g_version = "0.0.0-0";//make empty for develop version
const pathnameParts = self.location.pathname.split('/');
if (pathnameParts.length > 1 && pathnameParts[pathnameParts.length - 2]) {
    g_version = pathnameParts[pathnameParts.length - 2];
}
const g_cacheNamePrefix = 'document_editor_static_';
const g_cacheName = g_cacheNamePrefix + pathnameParts[pathnameParts.length - 3];
const patternPrefix = new RegExp(g_version + "/(web-apps|sdkjs|sdkjs-plugins|fonts|dictionaries)");
const isDesktopEditor = navigator.userAgent.indexOf("AscDesktopEditor") !== -1;

function putInCache(request, response) {
	return caches.open(g_cacheName)
		.then(function (cache) {
			return cache.put(request, response);
		})
		.catch(function (err) {
			console.error('putInCache failed with ' + err);
		});
}

function cacheFirst(event) {
	let request = event.request;
	return caches.match(request, {cacheName: g_cacheName})
		.then(function (responseFromCache) {
			if (responseFromCache) {
				return responseFromCache;
			} else {
				return fetch(request)
					.then(function (responseFromNetwork) {
						//todo 0 or 1223?
						//ensure response safe to cache
						if (responseFromNetwork.status === 200) {
							event.waitUntil(putInCache(request, responseFromNetwork.clone()));
						}
						return responseFromNetwork;
					});
			}
		});
}
function activateWorker(event) {
	return self.clients.claim()
		.then(function(){
			//remove stale caches
			return caches.keys();
		})
		.then(function (keys) {
			return Promise.all(keys.map(function(cache){
				if (cache.includes(g_cacheNamePrefix) && !cache.includes(g_cacheName)) {
					return caches.delete(cache);
				}
			}));
		}).catch(function (err) {
			console.error('activateWorker failed with ' + err);
		});
}

self.addEventListener('install', (event) => {
	event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
	event.waitUntil(activateWorker());
});

self.addEventListener('fetch', (event) => {
	let request = event.request;
	if (request.method !== "GET" || !patternPrefix.test(request.url)) {
		return;
	}

	if (isDesktopEditor) {
		if (-1 !== request.url.indexOf("/sdkjs/common/AllFonts.js"))
			return;
	}

	event.respondWith(cacheFirst(event));
});
