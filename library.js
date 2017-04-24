$(document).ready(function() {
  $('.article_1').mouseenter(function(){
    $('.article_1').animate({
      width: '1080px',
      height: '480px' });
   }); $('.article_1').mouseleave(function(){
        $('.article_1').animate({
          width: '320px' });
        $('.article_1').mouseenter(function(){
          $('.article_2').hide();
          $('.article_3').hide();
        });
      });
  $('.article_2').mouseenter(function(){
    $('.article_2').animate({
        width: '1080px',
        height: '480px' });
    });  $('.article_2').mouseleave(function(){
         $('.article_2').animate({
           width: '320px' });
    });
  });
});
