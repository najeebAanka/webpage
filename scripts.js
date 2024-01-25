window.onscroll = function() {
    var header = document.querySelector('.navbar');
    var logo = document.querySelector('.navbar-brand img');
    var menuItems = document.querySelectorAll('.navbar-nav .nav-link');
    var toggleButton = document.querySelector('.navbar-toggler');
  
    // Calculate the height of the first viewport
    var firstViewportHeight = window.innerHeight;
  
    if (window.pageYOffset > firstViewportHeight) {
      header.classList.add('sticky');
      logo.src = 'assets/image.jpg'; // Change logo to a darker version
  
      // Change menu items color to white
      menuItems.forEach(function(item) {
        item.style.color = '#fff';
      });
  
      // Change toggle button background color to white
      toggleButton.style.backgroundColor = '#fff';
    } else {
      header.classList.remove('sticky');
      logo.src = 'assets/image.jpg'; // Reset logo
  
      // Reset menu items color
      menuItems.forEach(function(item) {
        item.style.color = '';
      });
  
      // Reset toggle button background color
      toggleButton.style.backgroundColor = '';
    }
  };
  