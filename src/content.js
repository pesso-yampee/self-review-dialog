window.addEventListener('load', () => {
  const createPRButton = document.querySelector('button[data-ga-click*="Create pull request"]');
  if (createPRButton) {
    createPRButton.addEventListener('click', () => {
      alert('セルフレビューしましたか？');
    });
  }
});
