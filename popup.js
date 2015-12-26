/* global chrome */
'use strict';

chrome.tabs.getSelected(null, function(tab) {
    document.getElementById('status').innerText = tab.title + "\n" + tab.url;
});
