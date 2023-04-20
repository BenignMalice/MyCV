(function ($) {
  "use strict";

  // Typewriter writing effect
  (function ($) {
    "use strict";

    // Typewriter writing effect
    const typedTextOutput = $(".typed-text-output");

    if (typedTextOutput.length) {
      const typedStrings = $(".typed-text").text().split(", ");

      const typed = new Typed(".typed-text-output", {
        strings: typedStrings,
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true,
      });
    }
  })(jQuery);

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
})(jQuery);
