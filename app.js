let viewerTrigger;
document.querySelectorAll('[data-viewer]').forEach(link => link.addEventListener('click', event => {
  const dialog = document.getElementById(link.dataset.viewer);
  if (!dialog || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || typeof dialog.showModal !== 'function') return;
  event.preventDefault();
  viewerTrigger = link;
  dialog.showModal();
  document.body.style.overflow = 'hidden';
}));
document.querySelectorAll('dialog').forEach(dialog => {
  dialog.querySelector('[data-close-viewer]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = '';
    viewerTrigger?.focus();
  });
});
