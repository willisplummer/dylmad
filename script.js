// a very serious visitor counter
(function () {
  var count = localStorage.getItem('dylmad-visitor-count');
  if (!count) {
    count = Math.floor(Math.random() * 300) + 42;
  }
  count = parseInt(count, 10) + 1;
  localStorage.setItem('dylmad-visitor-count', count);

  var el = document.getElementById('visitor-count');
  if (el) {
    el.textContent = count;
  }
})();
