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
      hamburger.addClass("hamburger-appear");

      //Toggle-transaprent Navigation class
      if (!nav.hasClass("toggled-transparent")) nav.addClass("transparent");

      //Checking
      if (!navbar.hasClass("toggle")) {
        navbar.addClass("collapse-right");
      }
    } else {
      hamburger.removeClass("hamburger-appear");

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

  let serviceNavAppearClass = 'service-appear';
  let serviceNavDisappearClass = 'service-disappear';

  //Make Frontend Full click event
  onFrontendFull.click(() => {
    //If Webdesign Full hasn't appeared
    if (!webdesignFull.hasClass(serviceNavAppearClass)) {
      //Make the web design, frontend section dissapear
      webdesignShort.addClass(serviceNavDisappearClass);
      frontendShort.addClass(serviceNavDisappearClass);

    } else {
      //If Webdesign Full has appeared

      //Make the webdesign Full disspear
      webdesignFull.removeClass(serviceNavAppearClass);

      //Remove webdesign to-short functionality nav
      webdesignShortNav.removeClass(serviceNavAppearClass);

      //Restore to-full nav
      webdesignFullNav.addClass(serviceNavAppearClass);

      //Remove arrow
      arrowRight.removeClass(serviceNavAppearClass);
    }


    //Make the frontend full section appear
    frontendFull.addClass(serviceNavAppearClass);

    //Remove to-full nav
    frontendFullNav.removeClass(serviceNavAppearClass);

    //Add to-short nav
    frontendShortNav.addClass(serviceNavAppearClass);

    //Move the center line to the right
    let width = webdesignShort.width();
    centerLine.css("left", `${width}px`);

    //Make arrow appear
    arrowLeft.addClass(serviceNavAppearClass);
  });

  //Back to Frontend Short click event
  onFrontendShort.click(() => {
    //Make the web design, frontend section appear
    webdesignShort.removeClass(serviceNavDisappearClass);
    frontendShort.removeClass(serviceNavDisappearClass);

    //Make the frontend full section dissapear
    frontendFull.removeClass(serviceNavAppearClass);

    //Restore to-full nav
    frontendFullNav.addClass(serviceNavAppearClass);

    //Add to-short nav
    frontendShortNav.removeClass(serviceNavAppearClass);

    //Move the center line back to the center
    centerLine.css("left", `unset`);

    //Make arrow dissappear
    arrowLeft.removeClass(serviceNavAppearClass);
  });

  //Make webdesign Full click event
  onWebdesignFull.click(() => {
    //If Frontend Full hasn't appeared
    if (!frontendFull.hasClass(serviceNavAppearClass)) {
      //Make the web design, frontend section dissapear
      frontendShort.addClass(serviceNavDisappearClass);
      webdesignShort.addClass(serviceNavDisappearClass);

    } else {
      //If Frontend Full has appeared

      //Make the Frontend Full disspear
      frontendFull.removeClass(serviceNavAppearClass);

      //Remove frontend to-short functionality nav
      frontendShortNav.removeClass(serviceNavAppearClass);

      //Restore to-full nav
      frontendFullNav.addClass(serviceNavAppearClass);

      //Remove arrow
      arrowLeft.removeClass(serviceNavAppearClass);
    }
    //Move the center line to the right
    let width = webdesignShort.width();
    centerLine.css("left", `-${width}px`);

    //Make the webdesign full section appear
    webdesignFull.addClass(serviceNavAppearClass);

    //Remove to-full nav
    webdesignFullNav.removeClass(serviceNavAppearClass);

    //Add to-short nav
    webdesignShortNav.addClass(serviceNavAppearClass);

    //Make arrow appear
    arrowRight.addClass(serviceNavAppearClass);
  });

  //Back to Webdesign Short click event
  onWebdesignShort.click(() => {
    //Make the web design, frontend section appear
    webdesignShort.removeClass(serviceNavDisappearClass);
    frontendShort.removeClass(serviceNavDisappearClass);

    //Make the frontend full section dissapear
    webdesignFull.removeClass(serviceNavAppearClass);

    //Restore to-full nav
    webdesignFullNav.addClass(serviceNavAppearClass);

    //Add to-short nav
    webdesignShortNav.removeClass(serviceNavAppearClass);

    //Move the center line back to the center
    centerLine.css("left", `unset`);

    //Make arrow dissappear
    arrowRight.removeClass(serviceNavAppearClass);
  });

  //--------------------------------------------------------------------------------------------------------------
  //Works section functionality
  //Set up vars;
  let navAll = $('#worksNavAll');
  let navPersonal = $('#worksNavPersonal');
  let navFreelance = $('#worksNavFreelance');
  let navFrontendMentor = $('#worksNavFrontendMentor');

  let navButtons = [navAll, navFreelance, navFrontendMentor, navPersonal];

  let sampleObject = {
    'worksNavAll': 'sample',
    'worksNavPersonal': 'personal-projects',
    'worksNavFreelance': 'freelance-projects',
    'worksNavFrontendMentor': 'frontend-mentor-projects'
  }

  //Add click event to all the works nav buttons
  navButtons.forEach(element => {
    element.on("click", e => {
      //Get the current btn id
      let navId = e.currentTarget.id;

      //Get the associated class
      let sampleClass = sampleObject[navId];

      //Get all sample with associated class
      let samples = $(`.${sampleClass}`);

      //Get all the filtered out samples
      let samplesFilteredOut = $('.appear').not(`.${sampleClass}`);
      samplesFilteredOut.removeClass("fadein");
      setTimeout(() => {
        samplesFilteredOut.removeClass("appear");
      }, 400);

      setTimeout(() => {
        //Appear and fade in all the sample filtered
        samples.addClass("appear");
        setTimeout(() => {
          samples.addClass("fadein");
        }, 400);
      }, 200);

      //Unhighlight the previous selected button
      $('.works-nav-selected').removeClass('works-nav-selected');
      $(`#${navId}`).addClass('works-nav-selected');
    });
  });

  //Nav button ALL click on page load
  navAll.click();

  //Scroll event handle
  //Scroll function
  const scrollFunction = (idString) => {
    $('html, body').animate({ scrollTop: $(`.${idString}`).offset().top }, 100, 'easeInOutQuint');
  }
  //Navbutton and Brand event
  $('.scroll-event').on("click", (e) => {
    let btnId = $(e.currentTarget).attr("id").replace("Scroll", "");
    scrollFunction(btnId);
  });
  //Brand event
  $('.brand').on("click", () => {
    scrollFunction("front");
  })
  //Front button
  $('.my-works-btn').on("click", () => {
    scrollFunction("front");
  })

  //aboutBox scroll event
  let aboutEle = $('.about');
  let aboutOffsetTop = aboutEle.offset().top;
  let aboutOffsetBottom = aboutOffsetTop + aboutEle.outerHeight();

  $(window).scroll(() => {
    let scrollOffset = $(this).scrollTop() + $(window).height();

    if (scrollOffset >= aboutOffsetTop && scrollOffset <= aboutOffsetBottom) {
      let boxEle = $('.about .box');
      !(boxEle.hasClass("box-active")) && boxEle.addClass("box-active");
    }
  })
});