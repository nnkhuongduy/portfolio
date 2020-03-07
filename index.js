$(document).ready(function () {
  let hamburger = $('.hamburger');
  let navbar = $('.nav-bar-container');
  let nav = $('.nav');
  let bar1 = $('#bar1');
  let bar3 = $('#bar3');
  let brand = $('.brand').first();

  // Scrolling Events
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      //Hambuger menu appear
      hamburger.addClass("appear");

      //Toggle-transaprent Navigation class
      if (!nav.hasClass("toggled-transparent")) nav.addClass("transparent");

      //Checking
      if (!navbar.hasClass("toggle")) {
        navbar.addClass("collapse-right");
      }
    } else {
      hamburger.removeClass("appear");

      //Toggle-transaprent Navigation class
      if (nav.hasClass("transparent")) nav.removeClass("transparent");
      if (nav.hasClass("toggled-transparent")) nav.removeClass("toggled-transparent");

      bar1.removeClass("to-arrow");
      bar3.removeClass("to-arrow");
      bar1.removeClass("to-hamburger");
      bar3.removeClass("to-hamburger");

      if (navbar.hasClass("collapse-right") || navbar.hasClass("toggle")) {
        navbar.removeClass("collapse-right");
        navbar.removeClass("toggle");
      }
    }
  });

  //Hamburger Menu
  hamburger.click(() => {
    //Nav-bar collapse
    navbar.toggleClass('collapse-right toggle');

    //Navigation transperant class
    nav.toggleClass("toggled-transparent");
    //nav.toggleClass("transparent");

    //Black background

    //SVG Animation
    if (bar1.hasClass("to-arrow") || bar1.hasClass("to-hamburger")) {
      if (bar1.hasClass("to-arrow")) {
        bar1.removeClass("to-arrow");
        bar3.removeClass("to-arrow");
        window.requestAnimationFrame(() => {
          bar1.addClass("to-hamburger");
          bar3.addClass("to-hamburger");
        });
      }
      if (bar1.hasClass("to-hamburger")) {
        bar1.removeClass("to-hamburger");
        bar3.removeClass("to-hamburger");
        window.requestAnimationFrame(() => {
          bar1.addClass("to-arrow");
          bar3.addClass("to-arrow");
        });
      }
    } else {
      bar1.addClass("to-arrow");
      bar3.addClass("to-arrow");
    }
  });

  //Brand, Hamburger menu hover effects
  let hoverElements = [brand, hamburger];
  hoverElements.forEach(element => {
    element.on({
      mouseenter: () => {
        if (nav.hasClass("transparent")) nav.removeClass("transparent");
      },
      mouseleave: () => {
        if ($(window).scrollTop() > 50)
          if (!nav.hasClass("toggled-transparent")) nav.addClass("transparent");
      }
    })
  })

  //Services click events
  //Web development click event
  let onFrontendFull = $('.to-frontend-full');
  let onWebdesignFull = $('.to-webdesign-full');
  let frontendShort = $('.web-short');
  let webdesignShort = $('.design-short');
  let frontendFull = $('.web-full');
  let webdesignFull = $('.design-full');
  let centerLine = $('.center-line');
  onFrontendFull.click(() => {
    //Make the web design, frontend section dissapear
    webdesignShort.addClass("dissapear");
    frontendShort.addClass("dissapear");

    //Make the frontend full section appear
    frontendFull.addClass('appear');

    //Hightlight the element
    onFrontendFull.addClass("selected");

    //Remove to-full functionality
    onFrontendFull.removeClass("to-frontend-full");

    //Move the center line to the right
    let width = webdesignShort.width();
    centerLine.css("left", `${width}px`);
  });
  onWebdesignFull.click(() => {

  });
});