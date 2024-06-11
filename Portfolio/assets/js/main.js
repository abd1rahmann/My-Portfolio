(function() {
  "use strict";

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }

  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }
  });

  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  new PureCounter();

})()


document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  const loadingElement = document.querySelector('.loading');
  const errorMessageElement = document.querySelector('.error-message');
  const sentMessageElement = document.querySelector('.sent-message');

  form.addEventListener('submit', async function (event) {
      event.preventDefault();
      
      loadingElement.classList.remove('d-none');
      errorMessageElement.classList.add('d-none');
      sentMessageElement.classList.add('d-none');

      const formData = new FormData(form);
      const data = {
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message')
      };

      if (!validateEmail(data.email)) {
          loadingElement.classList.add('d-none');
          errorMessageElement.classList.remove('d-none');
          errorMessageElement.textContent = 'Please enter a valid email address.';
          return;
      }

      try {
          const response = await fetch('/send-email', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
          });

          const result = await response.json();
          loadingElement.classList.add('d-none');

          if (result.success) {
              sentMessageElement.classList.remove('d-none');
              form.reset();
          } else {
              errorMessageElement.classList.remove('d-none');
              errorMessageElement.textContent = result.error || 'Failed to send email.';
          }
      } catch (error) {
          loadingElement.classList.add('d-none');
          errorMessageElement.classList.remove('d-none');
          errorMessageElement.textContent = 'An error occurred while sending email.';
          console.error('Error:', error);
      }
  });

  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
  }
});


document.addEventListener('scroll', function () {
  const footer = document.getElementById('footer');
  if (window.scrollY > 100) {
      footer.classList.add('visible');
  } else {
      footer.classList.remove('visible');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  fetch('http://localhost:5209/api/Projects')
      .then(response => response.json())
      .then(data => {
          displayProjects(data);
      })
      .catch(error => console.error('Error fetching data:', error));
});

function displayProjects(projects) {
  const projectsContainer = document.getElementById('projects-container');

  projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.classList.add('project');

      const projectName = document.createElement('h2');
      projectName.textContent = project.name;

      const projectTechStack = document.createElement('p');
      projectTechStack.textContent = `Tech Stack: ${project.techStack}`;

      projectElement.appendChild(projectName);
      projectElement.appendChild(projectTechStack);
      projectsContainer.appendChild(projectElement);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var options = {
      strings: document.querySelector(".typed").getAttribute("data-typed-items").split(","),
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
  };
  new Typed(".typed", options);
});
