window.addEventListener("load", () => {
  const createPRButton = document.querySelector(
    'button[data-hydro-click*="pull_request"]'
  );
  if (createPRButton) {
    createPRButton.addEventListener("click", (event) => {
      const isSelfReviewed = confirm("セルフレビューしましたか？");

      if (!isSelfReviewed) {
        event.preventDefault();
      }
    });
  }
});
