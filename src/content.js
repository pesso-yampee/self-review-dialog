/**
 * Pull Requestボタンを監視する
 */
const watchPullRequestButton = () => {
  const pullRequestButton = document.querySelector(
    'button[type="submit"][data-hydro-click*="pull_request"]'
  );

  if (pullRequestButton) {
    console.log('呼ばれてるよ');
    pullRequestButton.addEventListener("click", (event) => {
    console.log('ここにいるよ');
    const isSelfReviewed = confirm(
        "セルフレビューした？\n・色んな画面から操作してみた？\n・リファクタした？"
      );

      if (isSelfReviewed) {
        event.stopImmediatePropagation();
      } else {
        event.stopImmediatePropagation();
        event.preventDefault();
      }
    });
  }
};

const observer = new MutationObserver(watchPullRequestButton);
observer.observe(document.body, { childList: true, subtree: true });

watchPullRequestButton();
