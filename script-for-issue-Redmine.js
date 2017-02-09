/* for Redmine */
var author = document.querySelector('.author .user');
var issueForm = document.getElementById('issue-form');
if (issueForm && author) {
    var authorUserId = author.href.match(/\/(\d+)\/?$/)[1];
    issueForm.innerHTML += ' | ';
    var anchor = document.createElement('a');
    anchor.onclick = function() {
        // 担当者を起票者に戻す
        document.getElementById('issue_assigned_to_id').value = authorUserId;
        // ステータスを指定の値に変える
        document.getElementById('issue_status_id').value = 7;//FIXME
		// デフォルト文言を入れる
		document.getElementById('issue_notes').value = "改修しました。御確認をお願いします:)\n\n<pre>\n\n</pre>";
    };
    anchor.text = '改修したことにする';
    issueForm.appendChild(anchor);

	var issue_id = issueForm.action.match(/(\d+)$/)[1];
	var issue_subject = document.getElementById('issue_subject').value.match(/(?:【[^】]+】)*\/*(.*)/)[1];
    var commit_memo = document.createElement('input');
	commit_memo.type = 'input';
	commit_memo.value = 'BugFix #' + issue_id + ': ' + issue_subject;
	commit_memo.style = 'margin-top:20px; width:100%;background-color: #cceeff;color: #3399cc;';
	issueForm.parentNode.appendChild(commit_memo);
}
