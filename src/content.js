window.addEventListener("load", () => {
  const createPRButton = document.querySelector(
    'button[type="submit"][data-hydro-click*="pull_request"]'
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

function watchCreatePRButton(createPRButton) {
  if (createPRButton) {
    createPRButton.addEventListener("click", function (event) {
      const selfReviewed = confirm("セルフレビューしましたか？");

      if (!selfReviewed) {
        event.preventDefault();
        return false;
      }
    });
  }
}

const createPRButton = document.querySelector(
  'button[type="submit"][data-hydro-click*="pull_request"]'
);
const observer = new MutationObserver(createPRButton);
observer.observe(document.body, { childList: true, subtree: true });

watchCreatePRButton(createPRButton);
