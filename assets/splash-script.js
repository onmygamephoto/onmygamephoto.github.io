var interval1;
var timer1;
// var interval2;
// var timer2;
// var interval3;
// var timer3;

 $(document).ready(function () {
   var overlay = document.getElementById("overlay");
   $(overlay).delay(800).fadeOut(1500);


   $('#box-1 .carousel-img:gt(0)').hide(); // to hide all but the first image when page loads
   $('#box-2 .carousel-img:gt(0)').hide(); // to hide all but the first image when page loads
   $('#box-3 .carousel-img:gt(0)').hide(); // to hide all but the first image when page loads

   timer1 = function(){
   interval1=setInterval(function () {
       if ( document.visibilityState=="visible" ) {
         $('#box-1 .carousel-img:first-child').fadeOut(1000)
             .next().fadeIn(1000).end().appendTo('#box-1');
         setTimeout(function(){
           $('#box-2 :first-child').fadeOut(1000)
             .next().fadeIn(1000).end().appendTo('#box-2');
         },1000);
         setTimeout(function(){
           $('#box-3 :first-child').fadeOut(1000)
             .next().fadeIn(1000).end().appendTo('#box-3');
         },2000);
     }}, 5000);
   };

   timer1();


   // var xmasLetter = document.getElementById("xmas-letter");
   // var openButton = document.getElementById("open-website-button");
   // $(openButton).click(function(){
   //   $(xmasLetter).fadeOut(1500);
   //   var overlay = document.getElementById("overlay");
   //   $(overlay).delay(2300).fadeOut(1500);
   //
   //   timer1();
   // });
 });
