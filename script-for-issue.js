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
    };
    anchor.text = '改修したことにする';
    issueForm.appendChild(anchor);
}
