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
function initMap() {
  // Center the map between Oromia and Afar
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: { lat: 9.5, lng: 40.5 }, // Approximate center between Oromia and Afar
  });

  // Define arrow marker icon
  const arrowIcon = {
    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    scale: 5,
    fillColor: '#3b82f6', // Lighter blue to match the theme
    fillOpacity: 1,
    strokeColor: '#1e3a8a', // Deep blue outline
    strokeWeight: 2,
  };

  // Add markers for rural areas
  const locations = [
    {
      position: { lat: 10.717, lng: 39.867 }, // Kemise, Oromia (Oromia Zone, Amhara Region)
      title: 'Kemise, Oromia Region',
      description: 'Supporting rural water access projects.',
    },
    {
      position: { lat: 11.566, lng: 41.438 }, // Asayita, Afar Region (administrative center)
      title: 'Asayita, Afar Region',
      description: 'Supporting rural water access projects.',
    },
  ];

  locations.forEach((location) => {
    new google.maps.Marker({
      position: location.position,
      map: map,
      title: location.title,
      icon: arrowIcon,
    }).addListener('click', function () {
      new google.maps.InfoWindow({
        content: `<b>${location.title}</b><br>${location.description}`,
      }).open(map, this);
    });
  });
}
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
