const spanColor = document.querySelectorAll('span');

spanColor.forEach((el) => {
  el.addEventListener('mouseover', () => {
    el.classList.toggle('active');
  });
});
