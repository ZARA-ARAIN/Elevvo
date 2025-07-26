document.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('toggleBtn');
  const themeSwitch = document.querySelector('.theme-switch');
  const navLinks = document.querySelectorAll('.nav-links li');
  
  // Toggle sidebar
  toggleBtn.addEventListener('click', () => {
    if (window.innerWidth <= 992) {
      sidebar.classList.toggle('active');
    } else {
      sidebar.classList.toggle('collapsed');
    }
  });
  
  // Close sidebar when clicking outside on mobile
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 992 && !sidebar.contains(e.target) && e.target !== toggleBtn) {
      sidebar.classList.remove('active');
    }
  });
  
  // Set active nav link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      // Close sidebar on mobile after selection
      if (window.innerWidth <= 992) {
        sidebar.classList.remove('active');
      }
    });
  });
  
  // Theme switcher
  themeSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    
    // Update icon
    const icon = themeSwitch.querySelector('i');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
  });
  
  // Check for saved theme preference
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    const icon = themeSwitch.querySelector('i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
  
  // Handle window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 992) {
      sidebar.classList.remove('active');
    }
  });
});