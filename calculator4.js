/*global $*/
$(document).ready(function(){
  
let disp = 0;
let val = 0;
let result = 0;
  
  $(".btn-number").click(function(){
    if (disp === 0){
      disp = "";
    }
    val = $(this).attr("data-val");
    disp = disp + val;
    result = eval(disp);
    $(".input-counter").val(disp);
  });
  
  $(".btn-other").click(function(){
    const other = $(this).attr("data-val");
    const slice = Array.prototype.slice.call(disp,-1)
    if(slice == "+" || slice == "-" || slice == "*" || slice == "/"){
      disp = disp.slice(0,-1) + other;
    }else{
      disp = disp + other;
    }
    if(other !== "="){
    $(".input-counter").val(disp);
    }else{
      $(".input-counter").val(result);
      disp = parseFloat(result);
    }
  });
  
  $(".AC").click(function(){
      val = 0;
      disp = 0;
      result = 0;
      $(".input-counter").val(0);
  });
  
});
