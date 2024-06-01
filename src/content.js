/**
 * Pull Requestボタンを監視する
 */
const watchPullRequestButton = () => {
  const pullRequestButton = document.querySelector(
    'button[type="submit"][data-hydro-click*="pull_request"]'
  );

  if (pullRequestButton) {
    pullRequestButton.addEventListener("click", (event) => {
      const isSelfReviewed = confirm(
        "セルフレビューした？\n・色んな画面から操作してみた？\n・リファクタした？"
      );

      (isSelfReviewed || !isSelfReviewed) && event.stopImmediatePropagation();
    });
  } else {
    setTimeout(watchPullRequestButton, 100);
  }
};

const observer = new MutationObserver(watchPullRequestButton);
observer.observe(document.body, { childList: true, subtree: true });

watchPullRequestButton();
