const details = document.querySelector('');
const image = document.getElementById(pfp);
  // Add an event listener for when the details are toggled
  details.addEventListener('toggle', function() {
    if (details.open) {
      // Change the image when the details are opened
      image.style.filter = 'none';
    } else {
      // Change the image back when the details are closed
      image.style.filter = 'invert(100%)':
    }
    <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script>
  });
