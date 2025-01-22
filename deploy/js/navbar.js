document.addEventListener("DOMContentLoaded", function() {
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    fetch('https://team-memory-leak.github.io/components/nav.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        navbarContainer.innerHTML = data;
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  } else {
    console.error('Navbar container not found');
  }
});