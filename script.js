// script.js

function changeLanguage() {
    // Add logic to change language (e.g., toggle between English and Kannada)
    alert('Language changed!');
}

(function($) { 
    $(function() { 
  
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
  
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
  
  
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
  
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
    }); 
  })(jQuery); 


  // SLIDER SECTION

  let count =1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},3000

)

function nextImage(){
    count++;
    if (count>7) {
       count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}
