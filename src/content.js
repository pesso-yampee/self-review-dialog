const watchCreatePRButton = () => {
  const createPRButton = document.querySelector(
    'button[type="submit"][data-hydro-click*="pull_request"]'
  );

  if (createPRButton) {
    createPRButton.addEventListener(
      "click",
      (event) => {
        const isSelfReviewed = confirm("セルフレビューした？\n・色んな画面から操作してみた？\n・リファクタした？");

        if (isSelfReviewed) {
          event.stopImmediatePropagation();
        } else {
          event.stopImmediatePropagation();
          event.preventDefault();
        }
      },
      { once: true }
    );
  } else {
    setTimeout(watchCreatePRButton, 100);
  }
};

const observer = new MutationObserver(watchCreatePRButton);
observer.observe(document.body, { childList: true, subtree: true });

watchCreatePRButton();
