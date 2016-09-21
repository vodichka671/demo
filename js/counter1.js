       

$(document).ready(init);

function init(){
 $('#how').bind('change', desc);

}

function desc(){
 var op=$('#how').val();
 switch (op)
 {
  case "number1": $('#desc').text("0"); break;
  case "number2": $('#desc').text("763 ккал");break;
  break;
  case "number3": $('#desc').text("1000 ккал");break;
  break;
}

if($("#how option:selected").val()=="number1"){
        $('#spend-money').text("0 руб.");

}
else if($("#how option:selected").val()=="number2"){
        $('#spend-money').text("900 руб.");
        $('#kkal').val("763 ккал");
        $('#kol-vo').val("3");
}
else if($("#how option:selected").val()=="number3"){
        $('#spend-money').text("1150 руб.");
        $('#kkal').val("1000 ккал");
        $('#kol-vo').val("5");
}


}



$(document).ready(init1);

function init1(){
    $('#how-1').bind('change', desc1);
}

function desc1(){
        var op=$('#how-1').val();
        switch (op)
        {
           case "number1": $('#desc-1').text("0"); break;
           case "number2": $('#desc-1').text("880 ккал");break;
           break;
   }
   if($("#how-1 option:selected").val()=="number1"){
        $('#spend-money').text("0 руб.");
}
else if($("#how-1 option:selected").val()=="number2"){
        $('#spend-money').text("600 руб.");
        $('#kkal').val("880 ккал");
        $('#kol-vo').val("3");
}

}


$(document).ready(init2);

function init2(){
    $('#how-2').bind('change', desc2);
}

function desc2(){
        var op=$('#how-2').val();
        switch (op)
        {
           case "number1": $('#desc-2').text("0"); break;
           case "number2": $('#desc-2').text("1193 ккал");break;
           case "number3": $('#desc-2').text("1500 ккал")
           break;
   }

   if($("#how-2 option:selected").val()=="number1"){
        $('#spend-money').text("0 руб.");
}
else if($("#how-2 option:selected").val()=="number2"){
        $('#spend-money').text("1000 руб.");
        $('#kkal').val("1193 ккал");
        $('#kol-vo').val("3");
}
else if($("#how-2 option:selected").val()=="number3"){
        $('#spend-money').text("1250 руб.");
        $('#kkal').val("1500 ккал");
        $('#kol-vo').val("5");
}

}

$(document).ready(init3);

function init3(){
    $('#how-3').bind('change', desc3);
}

function desc3(){
        var op=$('#how-3').val();
        switch (op)
        {
           case "number1": $('#desc-3').text("0"); break;
           case "number3": $('#desc-3').text("1950 ккал")
           break;
   }

   if($("#how-3 option:selected").val()=="number1"){
        $('#spend-money').text("0 руб.");
}
else if($("#how-3 option:selected").val()=="number3"){
        $('#spend-money').text("1400 руб.");
        $('#kkal').val("1950 ккал");
        $('#kol-vo').val("5");
}
}