// Select necessary elements
const aboutSection = document.getElementById('about-section');
const homeSection = document.getElementById('home-section');
const resumeSection = document.getElementById('resume-section');
const projectsSection = document.getElementById('projects-section');

// Function to show or hide sections based on the clicked link
function showSection(section) {
  console.log(`Showing section: ${section}`); // Debugging

  // Hide all sections first
  homeSection.classList.add('hidden');
  aboutSection.classList.add('hidden');
  resumeSection.classList.add('hidden');
  projectsSection.classList.add('hidden');

  // Show the clicked section
  if (section === 'home') {
    homeSection.classList.remove('hidden');
  } else if (section === 'about') {
    aboutSection.classList.remove('hidden');
  } else if (section === 'resume') {
    resumeSection.classList.remove('hidden');
  } else if (section === 'projects') {
    projectsSection.classList.remove('hidden');
  }
}

// Set default to show the home section when the page loads
window.onload = function() {
  showSection('home');
};
