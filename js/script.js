jQuery("#carousel").owlCarousel({
  autoplay: false,
  rewind: false,
  loop:true,
  margin: 20,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 2000,
  smartSpeed: 800,
  nav: true,
  navText: ["<img class='slider-nav-icon nav-left' src='img/nav-left-icon.png'></img>", "<img class='slider-nav-icon nav-right' src='img/nav-right-icon.png'></img>"],
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 3
    },

    1366: {
      items: 3
    }
  }
});
jQuery("#carousel2").owlCarousel({
  autoplay: false,
  rewind: false,
  loop:true,
  margin: 20,
  animateOut: 'fadeOut',
  animateIn: 'fadeIn',
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 2000,
  smartSpeed: 800,
  nav: true,
  navText: ["<img class='slider-nav-icon nav-left' src='img/nav-left-icon.png'></img>", "<img class='slider-nav-icon nav-right' src='img/nav-right-icon.png'></img>"],
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 3
    },

    1366: {
      items: 3
    }
  }
});