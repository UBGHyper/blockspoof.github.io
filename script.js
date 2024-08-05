// Add event listeners to buttons
document.querySelector('.learn-more-btn').addEventListener('click', function() {
  alert('Learn more about this error');
});

document.querySelector('.hide-advanced-btn').addEventListener('click', function() {
  document.querySelector('.advanced-info').style.display = 'none';
});

document.querySelector('.back-to-safety-btn').addEventListener('click', function() {
  window.history.back();
});
