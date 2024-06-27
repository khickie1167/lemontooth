document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-button');
  const subnav = document.getElementById('subnav');
  const stats = document.querySelector('.stats');

  // Ensure subnav is initially hidden
  subnav.style.display = 'none';
  // Set initial margin for stats
  stats.style.marginTop = '88px'; // Navbar height (64px) + Margin (24px)

  menuButton.addEventListener('click', function (e) {
    e.preventDefault();
    if (subnav.style.display === 'none' || subnav.style.display === '') {
      subnav.style.display = 'block';
      stats.style.marginTop = '24px'; // Navbar height (64px) + Subnav height (64px) + Margin (24px)
    } else {
      subnav.style.display = 'none';
      stats.style.marginTop = '88px'; // Navbar height (64px) + Margin (24px)
    }
  });
});
