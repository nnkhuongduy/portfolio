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


  //--------------------------------------------------------------------------------------------------------------
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

  //--------------------------------------------------------------------------------------------------------------
  //Services click events
  //Web development click event
  let onFrontendFull = $('.to-frontend-full');
  let onWebdesignFull = $('.to-webdesign-full');

  let onFrontendShort = $('.to-frontend-short');
  let onWebdesignShort = $('.to-webdesign-short');

  let frontendFullNav = $('#to-frontend-full-nav');
  let frontendShortNav = $('#to-frontend-short-nav');
  let webdesignFullNav = $('#to-webdesign-full-nav');
  let webdesignShortNav = $('#to-webdesign-short-nav');

  let frontendShort = $('.web-short');
  let webdesignShort = $('.design-short');

  let frontendFull = $('.web-full');
  let webdesignFull = $('.design-full');

  let centerLine = $('.center-line');

  let arrowLeft = $('.arrow-left');
  let arrowRight = $('.arrow-right');

  //Make Frontend Full click event
  onFrontendFull.click(() => {
    //If Webdesign Full hasn't appeared
    if (!webdesignFull.hasClass("appear")) {
      //Make the web design, frontend section dissapear
      webdesignShort.addClass("dissapear");
      frontendShort.addClass("dissapear");

    } else {
      //If Webdesign Full has appeared

      //Make the webdesign Full disspear
      webdesignFull.removeClass("appear");

      //Remove webdesign to-short functionality nav
      webdesignShortNav.removeClass("appear");

      //Restore to-full nav
      webdesignFullNav.addClass("appear");

      //Remove arrow
      arrowRight.removeClass("appear");
    }


    //Make the frontend full section appear
    frontendFull.addClass('appear');

    //Remove to-full nav
    frontendFullNav.removeClass("appear");

    //Add to-short nav
    frontendShortNav.addClass("appear");

    //Move the center line to the right
    let width = webdesignShort.width();
    centerLine.css("left", `${width}px`);

    //Make arrow appear
    arrowLeft.addClass("appear");
  });

  //Back to Frontend Short click event
  onFrontendShort.click(() => {
    //Make the web design, frontend section appear
    webdesignShort.removeClass("dissapear");
    frontendShort.removeClass("dissapear");

    //Make the frontend full section dissapear
    frontendFull.removeClass('appear');

    //Restore to-full nav
    frontendFullNav.addClass("appear");

    //Add to-short nav
    frontendShortNav.removeClass("appear");

    //Move the center line back to the center
    centerLine.css("left", `unset`);

    //Make arrow dissappear
    arrowLeft.removeClass("appear");
  });

  //Make webdesign Full click event
  onWebdesignFull.click(() => {
    //If Frontend Full hasn't appeared
    if (!frontendFull.hasClass("appear")) {
      //Make the web design, frontend section dissapear
      frontendShort.addClass("dissapear");
      webdesignShort.addClass("dissapear");

    } else {
      //If Frontend Full has appeared

      //Make the Frontend Full disspear
      frontendFull.removeClass("appear");

      //Remove frontend to-short functionality nav
      frontendShortNav.removeClass("appear");

      //Restore to-full nav
      frontendFullNav.addClass("appear");

      //Remove arrow
      arrowLeft.removeClass("appear");
    }
    //Move the center line to the right
    let width = webdesignShort.width();
    centerLine.css("left", `-${width}px`);

    //Make the webdesign full section appear
    webdesignFull.addClass('appear');

    //Remove to-full nav
    webdesignFullNav.removeClass("appear");

    //Add to-short nav
    webdesignShortNav.addClass("appear");

    //Make arrow appear
    arrowRight.addClass("appear");
  });

  //Back to Webdesign Short click event
  onWebdesignShort.click(() => {
    //Make the web design, frontend section appear
    webdesignShort.removeClass("dissapear");
    frontendShort.removeClass("dissapear");

    //Make the frontend full section dissapear
    webdesignFull.removeClass('appear');

    //Restore to-full nav
    webdesignFullNav.addClass("appear");

    //Add to-short nav
    webdesignShortNav.removeClass("appear");

    //Move the center line back to the center
    centerLine.css("left", `unset`);

    //Make arrow dissappear
    arrowRight.removeClass("appear");
  });

  //--------------------------------------------------------------------------------------------------------------
  //Works section functionality
  //Set up vars;
  let samplesAll = $('.sample');
  let samplesPersonal = $('.personal-projects');
  let samplesFreelance = $('.freelance-projects');
  let samplesFrontendMentor = $('.frontend-mentor-projects');

  let navAll = $('#worksNavAll');
  let navPersonal = $('#worksNavPersonal');
  let navFreelance = $('#worksNavFreelance');
  let navFrontendMentor = $('#worksNavFrontendMentor');

  let worksDissapearClass = 'appear';

  let navButtons = [navAll, navFreelance, navFrontendMentor, navPersonal];

  let sampleObject = {
    'worksNavAll': samplesAll,
    'worksNavPersonal': samplesPersonal,
    'worksNavFreelance': samplesFreelance,
    'worksNavFrontendMentor': samplesFrontendMentor
  }

  //Add click event to all the works nav buttons
  navButtons.forEach(element => {
    element.click(() => {
      //Get the current button id
      elementId = element.attr('id');

      //Get all the sample associated with the button
      samplesArray = sampleObject[elementId];

      //Make all the sample currently appear dissapear
      samplesAll.removeClass(worksDissapearClass);

      //Make all the corresponded sample appear
      samplesArray.addClass(worksDissapearClass);

      //Hightlight the nav button
      //Get current hightlighted button
      let currentHightlighted = $('.works-nav-selected');
      //Unhightlight the button
      currentHightlighted.removeClass("works-nav-selected");
      //Hightlight the element button
      element.addClass("works-nav-selected");


    });
  });

  //Nav button ALL click on page load
  navAll.click();
});