//$().fn-name();

// BACK TO TOP BUUTON START //

$(window).scroll(function () {
  var scrolling = $(window).scrollTop();
  console.log(scrolling);

  if (scrolling > 460) {
    $(".back-to-top").show();
  } else {
    $(".back-to-top").hide();
  }
});

// BACK TO TOP BUTOON END //

var typed2 = new Typed("#typed", {
  strings: ["Indonesian Chinese"],
  typeSpeed: 50,
  backSpeed: 0,
  fadeOut: true,
  loop: true,
});
