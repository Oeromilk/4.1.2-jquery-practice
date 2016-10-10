(function($){
  $(function(){
    "use strict";

    $(".dropDown").hide();

    $(".category").click(function(){

      if ($(this).next().is(':visible')){
        $(this).next().hide();
      } else {
        $(this).siblings('div').hide();
        $(this).next().show();
      }
    });

  });
}(jQuery));
