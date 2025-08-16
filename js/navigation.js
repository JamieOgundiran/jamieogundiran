document.addEventListener('DOMContentLoaded', function () {
  const headerContainer = document.getElementById('header-container');
  const footerContainer = document.getElementById('footer-container');

  const basePath = window.location.hostname.includes('github.io')
    ? '/portfolio_static_website'
    : '';

  if (headerContainer) {
    fetch(`${basePath}/components/header.html`)
      .then(response => response.text())
      .then(data => {
        headerContainer.innerHTML = data;
        initNavigation();
      })
      .catch(error => console.error('Error loading header:', error));
  } else {
    // Initialize navigation if header is already in the DOM
    initNavigation();
  }

  if (footerContainer) {
    fetch(`${basePath}/components/footer.html`)
      .then(response => response.text())
      .then(data => {
        footerContainer.innerHTML = data;
      })
      .catch(error => console.error('Error loading footer:', error));
  }

  function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    // Find and mark the current page
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }
});
