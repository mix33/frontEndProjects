var main = function() {
  
  $('.more-btn').click(function(){
    $(this).next().toggle();
  });
  $('.share').click(function(){
    $('.share-menu').toggle();
  });
    $('.notification').click(function(){
    $(this).toggleClass('active');
  });
};

$(document).ready(main);
