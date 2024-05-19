window.addEventListener('load', () => {
  const createPRButton = document.querySelector('button[data-hydro-click*="pull_request"]');
  if (createPRButton) {
    createPRButton.addEventListener('click', () => {
      alert('セルフレビューしましたか？');
    });
  }
});
