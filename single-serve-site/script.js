function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(element){
    var newq = makeNewPosition();
    var oldq = $(element).offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $(element).animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv(element);        
    });
    
}

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = .4;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

$(document).ready(function(){
    $('.taco').each((i, item) => {
        animateDiv(item);
    });
});

  $(".hide1").click(function(){
    $(".hide1").hide();
 
  });

 $(".hide1").click(function(){
    $("#show1").show();
  }); 


  $(".hide2").click(function(){
    $(".hide2").hide();
  });
    

  $(".hide3").click(function(){
    $(".hide3").hide();
  });


   $(".hide4").click(function(){
    $(".hide4").hide();
  });

  $(".hide5").click(function(){
    $(".hide5").hide();
  });


 $(".hide6").click(function(){
    $(".hide6").hide();
  });

  $(".hide6").click(function(){
    $("#show2").show();
  }); 


 $(".hide7").click(function(){
    $(".hide7").hide();
  });


  $(".hide8").click(function(){
    $(".hide8").hide();
  });