/*global $*/
$(document).ready(function(){
  
let tmp = 0;
let disp = 0;
let val = 0;
let vals = 0;
let result = 0;
let plus = 0;
  
  
  $(".btn-number").click(function(){
    val = $(this).attr("data-val");
    disp = disp + val;
    tmp = parseInt(disp,10)
    vals = vals + val
    plus = parseInt(vals)+parseInt(tmp);
    $(".input-counter").val(disp)
    console.log(val);
    console.log("valは"+val);
    console.log("tmpは"+tmp);
    console.log("dispは"+disp);
    console.log("resultは"+result);
    console.log("!数字console終わり")
  });
  
  $(".btn-other").click(function(){
    
    const other = $(this).attr("data-val");
    console.log(other);
    console.log("valは"+val);
    console.log("tmpは"+tmp);
    console.log("dispは"+disp);
    console.log("resultは"+result);
    console.log("!記号console終わり")
    disp = disp + other;
    if(other !== "AC"){
    $(".input-counter").val(disp)
    }else if(other === "AC"){
      val = 0;
      disp = 0;
      tmp = 0;
      result = 0;
      $(".input-counter").val(0);
    };
    
    if(other === "+"){
      tmp = 0;
      vals = 0;
      result = parseInt(val)+parseInt(tmp);
      console.log("valは"+val);
      console.log("tmpは"+tmp);
      console.log("dispは"+disp);
      console.log("resultは"+result);
      console.log("!足し算console終わり")
    }else if(other === "-"){
      tmp = 0;
      vals = 0;
      result = parseInt(val)+parseInt(tmp);
    }else if(other === "="){
      result = eval(disp);
      $(".input-counter").val(result);
      disp = parseInt(result);
      console.log("valは"+val);
      console.log("tmpは"+tmp);
      console.log("dispは"+disp);
      console.log("resultは"+result);
      console.log("!答えconsole終わり")
    }
    
  });
  
  
  
  
  
});
