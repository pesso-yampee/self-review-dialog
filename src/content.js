/**
 * Pull Requestボタンを監視する
 */
const watchPullRequestButton = () => {
  const pullRequestButton = document.querySelector(
    'button[data-hydro-click*="create_pull_request"]'
  );

  if (pullRequestButton) {
    pullRequestButton.addEventListener("click", (event) => {
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
