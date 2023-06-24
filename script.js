//about

$(window).on("load", function () {
  $(".pKiri").addClass("pMuncul");
  $(".pKanan").addClass("pMuncul");
});

//paralax

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  $(".jumbotron img").css({
    transform: "translate(0px, +" + wScroll / 5.7 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, +" + wScroll / 4.2 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, +" + wScroll / 5.5 + "%)",
  });
});

//projects
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("projectdot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" .projectdot:active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " .projectdot:active";
}
