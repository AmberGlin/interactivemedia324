// var slideIndex = [1,1];
// var slideId = ["mySlides2", "mySlides3"]
// showSlides(1, 0);
// showSlides(1, 1);

// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }

// function showSlides(n, no) {
//   var i;
//   var x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}    
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";  
//   }
//   x[slideIndex[no]-1].style.display = "block";  
// }





var slideshow1 = document.getElementById("slideshow1");
slideshow1.currentSlideIndex = 1;
showSlides(slideshow1.currentSlideIndex, slideshow1);

var slideshow2 = document.getElementById("slideshow2");
slideshow2.currentSlideIndex = 1;
showSlides(slideshow2.currentSlideIndex, slideshow2);

var slideshow3 = document.getElementById("slideshow3");
slideshow3.currentSlideIndex = 1;
showSlides(slideshow3.currentSlideIndex, slideshow3);

var slideshow4 = document.getElementById("slideshow4");
slideshow4.currentSlideIndex = 1;
showSlides(slideshow4.currentSlideIndex, slideshow4);

var slideshow5 = document.getElementById("slideshow5");
slideshow5.currentSlideIndex = 1;
showSlides(slideshow5.currentSlideIndex, slideshow5);

var slideshow6 = document.getElementById("slideshow6");
slideshow6.currentSlideIndex = 1;
showSlides(slideshow6.currentSlideIndex, slideshow6);

var slideshow7 = document.getElementById("slideshow7");
slideshow7.currentSlideIndex = 1;
showSlides(slideshow7.currentSlideIndex, slideshow7);

var slideshow8 = document.getElementById("slideshow8");
slideshow8.currentSlideIndex = 1;
showSlides(slideshow8.currentSlideIndex, slideshow8);

var slideshow9 = document.getElementById("slideshow9");
slideshow9.currentSlideIndex = 1;
showSlides(slideshow9.currentSlideIndex, slideshow9);


function plusSlides(n, slideshow) {
  showSlides(slideshow.currentSlideIndex += n, slideshow);
}

function currentSlide(n, slideshow) {
  showSlides(slideshow.currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
  


  var i;
  var slides = slideshow.getElementsByClassName("mySlides");
  var dots = slideshow.getElementsByClassName("dot");
  if (n > slides.length) {slideshow.currentSlideIndex = 1}    
  if (n < 1) {slideshow.currentSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideshow.currentSlideIndex-1].style.display = "block";  
  dots[slideshow.currentSlideIndex-1].className += " active";
}

$(document).ready(
    function(){
       

      $(".ex").click(function () {
            $("#slideshow1").toggle();
        });

      $(".ob, .gt").click(function () {
            $("#slideshow1").hide();
        });

      $(".ob").click(function () {
            $("#slideshow2").toggle();
        });

      $(".ex, .gt").click(function () {
            $("#slideshow2").hide();
        });

      $(".gt").click(function () {
            $("#slideshow5").toggle();
        });

      $(".ex, .ob").click(function () {
            $("#slideshow5").hide();
        });

      $(".taco").click(function () {
            $("#slideshow3").toggle();
        });

      $(".poem, integ-poem, rand-gen, soc-dec").click(function () {
            $("#slideshow3").hide();
        });

      $(".poem").click(function () {
            $("#slideshow6").toggle();
        });

      $(".taco, .integ-poem, .rand-gen, .soc-dec").click(function () {
            $("#slideshow6").hide();
        });

      $(".integ-poem").click(function () {
            $("#slideshow7").toggle();
        });

       $(".taco, .poem, .rand-gen, .soc-dec").click(function () {
            $("#slideshow7").hide();
        });

       $(".rand-gen").click(function () {
            $("#slideshow8").toggle();
        });

        $(".taco, .poem, .integ-poem, .soc-dec").click(function () {
            $("#slideshow8").hide();
        });

        $(".soc-dec").click(function () {
            $("#slideshow9").toggle();
        });

        $(".taco, .poem, .integ-poem, .rand-gen").click(function () {
            $("#slideshow9s").hide();
        });



        

    });