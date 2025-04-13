// Simple validation or form interactivity
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name && email && message) {
      alert("Thank you for reaching out. We will contact you soon.");
      this.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
  



  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  });



  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  });



  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  });



  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  });



  document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the element is visible
    );
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar-custom');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-shrink');
      } else {
        navbar.classList.remove('navbar-shrink');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar-custom');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-semi-transparent');
      } else {
        navbar.classList.remove('navbar-semi-transparent');
      }
    });
  });





  document.addEventListener('DOMContentLoaded', function () {
    // Initialize the map centered between Oromia and Afar (approx. coordinates: 9.5, 40.5)
    var map = L.map('map').setView([9.5, 40.5], 6);
  
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);
  
    // Custom marker icon
    var customIcon = L.divIcon({
      className: 'custom-marker',
      iconSize: [12, 12],
    });
  
    // Add markers for Kemise (Oromia) and Asayita (Afar)
    L.marker([10.717, 39.867], { icon: customIcon }) // Kemise, Oromia (Oromia Zone, Amhara Region)
      .addTo(map)
      .bindPopup('<b>Kemise, Oromia Region</b><br>Supporting rural water access projects.')
      .openPopup();
  
    L.marker([11.566, 41.438], { icon: customIcon }) // Asayita, Afar Region (administrative center)
      .addTo(map)
      .bindPopup('<b>Asayita, Afar Region</b><br>Supporting rural water access projects.');
  });

  // Initialize the map
document.addEventListener('DOMContentLoaded', function () {
  // Center the map between Kemise and Asayita
  const map = L.map('map').setView([11.1417, 40.65], 7); // Approximate center and zoom level

  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Leaflet | © OpenStreetMap contributors',
  }).addTo(map);

  // Add markers for Kemise and Asayita
  const kemiseMarker = L.marker([10.7167, 39.8667]).addTo(map);
  kemiseMarker.bindPopup('<b>Kemise, Oromia Region</b><br>Our presence here supports local communities.');

  const asayitaMarker = L.marker([11.5667, 41.4333]).addTo(map);
  asayitaMarker.bindPopup('<b>Asayita, Afar Region</b><br>Our presence here supports local communities.');

  // Optional: Open the first popup by default
  kemiseMarker.openPopup();

  // Optional: Add animation on scroll
  const elements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => observer.observe(element));
});


document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    },
    { threshold: 0.3 } // Trigger when 30% of the element is visible
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});