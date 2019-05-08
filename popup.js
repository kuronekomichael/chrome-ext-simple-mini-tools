/* global chrome */
'use strict';
/*
 * 現在開いているサイトのタイトルとURLをコピペするためのポップアップ
 */
chrome.tabs.getSelected(null, function(tab) {

	// タイトル末尾の邪魔な文言を削除して、タイトルを取得
	const title = [
		/\s*-\s*\S+\s*-\s*Redmine$/,	// - Redmine
		/\s*-\s*\S+\.esa\.io$/,		// - esa.io
	].reduce(function(title, regex) {
		return title.replace(regex, '');
	}, tab.title);

	// ポップアップ内に、タイトルとURLを表示する
	document.getElementById('status').value = title + "\n" + tab.url;
});
