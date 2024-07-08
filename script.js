// script.js

function changeLanguage() {
    // Add logic to change language (e.g., toggle between English and Kannada)
   
    document.location="kannadaindex.html";
}
function changeLanguagetoEng() {
    // Add logic to change language (e.g., toggle between English and Kannada)
   
    document.location="index.html";
}
document.addEventListener('DOMContentLoaded', function () {
  const navbarToggle = document.getElementById('navbar-toggle');
  const navUl = document.querySelector('nav ul');

  navbarToggle.addEventListener('click', function() {
    navUl.classList.toggle('active');
    this.classList.toggle('active');
  });

 
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('nav ul li a:not(:only-child)').forEach(function (link) {
    link.addEventListener('click', function(e) {
      var dropdown = this.nextElementSibling;
      dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';

      document.querySelectorAll('.nav-dropdown').forEach(function(item) {
        if (item !== dropdown) {
          item.style.display = 'none';
        }
      });

      e.stopPropagation();
    });
  });

  document.addEventListener('click', function() {
    document.querySelectorAll('.nav-dropdown').forEach(function(item) {
      item.style.display = 'none';
    });
  });
});


