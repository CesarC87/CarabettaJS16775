// ------------------------------- Animación H1 
$(".h1Operaciones").animate({opacity:1},1300);

$(".h1Operaciones").animate({opacity:0},1200, function(){    
        $(".h1Operaciones").text("Operaciones");
        $(".h1Operaciones").animate({opacity:1},2000);        
    }); 