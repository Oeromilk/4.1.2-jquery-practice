(function($){
  $(function(){
    "use strict";

    $(".filesDropDown").hide();
    $(".mailDropDown").hide();
    $(".cloudDropDown").hide();

    $(".files").click(function(){
      $(".filesDropDown").slideToggle( 200, function() {
      });
    });

    $(".mail").click(function(){
      $(".mailDropDown").slideToggle( 200, function(){
      });
    });

    $(".cloud").click(function(){
      $(".cloudDropDown").slideToggle( 200, function(){
      });
    });

  });
}(jQuery));
