// Select necessary elements
const aboutSection = document.getElementById('about-section');
const container = document.querySelector('.container');
const navLinks = document.querySelectorAll('.nav-link');

// Initially hide the About section
aboutSection.classList.add('hidden');

// Add event listeners to navigation links
navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent default anchor behavior

    const targetId = event.target.getAttribute('href').substring(1); // Get target section ID

    if (targetId === 'home') {
      aboutSection.classList.add('hidden'); // Hide About section
      container.style.display = 'flex'; // Show Home section
    } else if (targetId === 'about') {
      container.style.display = 'none'; // Hide Home section
      aboutSection.classList.remove('hidden'); // Show About section
    }
  });
});
