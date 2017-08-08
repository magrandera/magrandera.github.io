$(document).ready(function(){

  // =Hero
  // Alway make hero-container height equal to window height

  var $heroContainer = $('.hero');

  $heroContainer.height(window.innerHeight);

  // When user resize browser window, hero container needs to have the same
  // height as browser window height.

  $(window).resize(function() {
    $heroContainer.height(window.innerHeight);
  });

  // =Work
  // Isotope filters

  var $workFilterLinks = $('.work-filters li'),
      $container = $('.work-items');

  $workFilterLinks.find('a').click(function(){

    $workFilterLinks.removeClass('active');

    $container.isotope({
      // options
      filter: $(this).attr('data-filter'),
      itemSelector: '.isotope-item',
      animationEngine : "best-available",
      masonry: {
        columnWidth: '.isotope-item'
      }
    });

    $(this).parent().addClass('active');

    return false;
  });

  // Scrollreveal initialize

  var config = {

    easing: 'hustle',
    reset:  false,
    delay:  'onload',
    opacity: .2,
    vFactor: 0.2,
    mobile: false
  }

  window.sr = new scrollReveal( config );
});
