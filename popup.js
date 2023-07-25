/* global chrome */
'use strict';
/*
 * 現在開いているサイトのタイトルとURLをコピペするためのポップアップ
 */
chrome.tabs.getSelected(null, (tab) => {

	// Asanaの場合のみ、markdownリンク形式
	if (/- Asana$/.test(tab.title)) {
		const ticketTitle = tab.title.replace(/ - Asana$/, '');
		document.getElementById('status').value = `- [${ticketTitle}](${tab.url})`;
		return;
	}

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
