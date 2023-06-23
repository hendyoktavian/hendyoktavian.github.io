//about

$(window).on("load", function() {
  $(".pKiri").addClass("pMuncul");
  $(".pKanan").addClass("pMuncul");
});



//paralax

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $(".jumbotron img").css({
    transform: "translate(0px, +" + wScroll/5.7 + "%)"
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, +" + wScroll/4.2 + "%)"
  });

  $(".jumbotron p").css({
    transform: "translate(0px, +" + wScroll/5.5 + "%)"
  });

});
