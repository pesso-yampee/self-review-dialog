const watchCreatePRButton = () => {
  const createPRButton = document.querySelector(
    'button[type="submit"][data-hydro-click*="pull_request"]'
  );

  if (createPRButton) {
    createPRButton.addEventListener(
      "click",
      (event) => {
        const selfReviewed = confirm("セルフレビューしましたか？");

        if (selfReviewed) {
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
