    
    //navbar animation 
    
    const navvy = document.getElementById('main-header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navvy.style.top = '0px';
    } else {
      navvy.style.top = '10px';
    }
  });
    
    //nav responsivness
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const navbar = document.getElementById('navbar');

    let lastScrollTop = 0;

    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('show');
    });
        // Close menu when any area is clicked
    menu.addEventListener('click', () => {
      menu.classList.remove('show');
    });
    
    /*
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > lastScrollTop ? 'down' : 'up';

      if (scrollY > window.innerHeight * 0.4 && scrollDirection === 'down') {
        navbar.classList.add('hidden');
      } else if (scrollDirection === 'up') {
        navbar.classList.remove('hidden');
      }

      lastScrollTop = scrollY <= 0 ? 0 : scrollY;
    }); */
    
    // Intersection Observer for Animations
    document.addEventListener("DOMContentLoaded", () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, {
        threshold: 0.1 // Trigger when 50% of the element is visible
      });

      // Observe all image blocks
      document.querySelectorAll(".item").forEach(block => {
        observer.observe(block);
      });
    });