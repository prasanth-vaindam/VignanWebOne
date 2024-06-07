// script.js
document.getElementById('show-section').addEventListener('click', function(event) {
  event.preventDefault();
  var section = document.getElementById('target-section');
  section.classList.add('visible');
});
