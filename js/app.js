document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-button');
  const subnav = document.getElementById('subnav');
  const stats = document.querySelector('.stats');
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  const subnavHeight = 64; // Assuming subnav height is 64px

  // Ensure subnav is initially hidden
  subnav.style.display = 'none';
  // Set initial margin for stats
  stats.style.marginTop = '88px'; // Navbar height (64px) + Margin (24px)

  menuButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (subnav.style.display === 'none' || subnav.style.display === '') {
      subnav.style.display = 'block';
      stats.style.marginTop = `${navbarHeight + 24}px`; // Navbar height (64px) + Subnav height (64px) + Margin (24px)
    } else {
      subnav.style.display = 'none';
      stats.style.marginTop = '88px'; // Navbar height (64px) + Margin (24px)
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-target');

      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - (navbarHeight + subnavHeight);
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }
    });
  });
});

