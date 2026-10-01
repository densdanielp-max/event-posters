const posterDialog = document.getElementById('poster-dialog');
let posterTrigger;
document.querySelectorAll('[data-open-poster]').forEach(link => link.addEventListener('click', event => {
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || typeof posterDialog.showModal !== 'function') return;
  event.preventDefault();
  posterTrigger = link;
  posterDialog.showModal();
  document.body.style.overflow = 'hidden';
}));
document.getElementById('close-poster').addEventListener('click', () => posterDialog.close());
posterDialog.addEventListener('click', event => {
  if (event.target !== posterDialog) return;
  const r = posterDialog.getBoundingClientRect();
  if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) posterDialog.close();
});
posterDialog.addEventListener('close', () => {
  document.body.style.overflow = '';
  posterTrigger?.focus();
});
