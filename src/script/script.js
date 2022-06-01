

//адаптив изображения
function ibg(){
   let ibg=document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
   if(ibg[i].querySelector('img')){
   ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
   }}}ibg();
   //

//================================================================================
//slickslider
   $(document).ready(function(){
      $('.slider').slick({
         arrows:false,
         dots:false,
         adaptiveHeight:true,
          infinite: true,
         swipe: true,
         slidesToShow: 2,
         slidesToScroll: 1
         
      });
      });
      $(document).ready(function(){
         $('.slider-two').slick({
            arrows:false,
            dots:false,
            adaptiveHeight:true,
             infinite: true,
            swipe: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide:-1,
            
         });
         });
//========================================================================================
//бургер
$('.wrapper').addClass('loaded');

$('.icon-menu').click(function(event){
   $(this).toggleClass('active');
   $('.menu__body').toggleClass('active');
   $('body').toggleClass('lock');
});
   //====================================================