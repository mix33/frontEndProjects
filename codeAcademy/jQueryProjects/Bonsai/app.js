var main = function() {
  
$('#top-text').keyup(function(){
  var topc = $(this).val();
  $('.top-caption').text(topc); 
});
  
  $('#bottom-text').keyup(function(){
  var bottomc = $(this).val();
  $('.bottom-caption').text(bottomc); 
});
  
  
  $('#image-url').keyup(function(){
  var imageurl = $(this).val();
  $('#photo').attr(src, imageurl); 
});
  
  
};
 
$(document).ready(main);

