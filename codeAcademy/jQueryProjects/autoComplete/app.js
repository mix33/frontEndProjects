var main = function() {
  
  var cities = [
    'Shanghai',
    'Chendu',
    'Boston'
  ];
  
  $('#city').autocomplete({
    source: cities});
};
 
$(document).ready(main);
