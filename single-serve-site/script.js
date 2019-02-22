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
    
    var speedModifier = .3;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

$(document).ready(function(){
    $('.taco').each((i, item) => {
        animateDiv(item);
    });
});

      // $(document).ready(function() {
      //   var audioElement = document.createElement('audio');
      //   audioElement.setAttribute('src', 'https://amberglin.github.io/interactivemedia324/single-serve-site/dp_galaga88_start.mp3');
      //   audioElement.setAttribute('autoplay', 'autoplay');
      //   //audioElement.load()
      //   $.get();
      //   audioElement.addEventListener("load", function() {
      //   audioElement.play();
      //   }, true);




      //   $('.play').click(function() {
      //   audioElement.play();
      //   });


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

    $(".hide9").click(function(){
    $(".hide9").hide();
  });

    $(".hide10").click(function(){
    $(".hide10").hide();
  });

     $(".hide10").click(function(){
    $("#show3").show();
  });

    $(".hide11").click(function(){
    $(".hide11").hide();
  });

$(".hide11").click(function(){
    $("#show1").show();
  }); 

    $(".hide12").click(function(){
    $(".hide12").hide();
  });

        $(".hide13").click(function(){
    $(".hide13").hide();
  });


    $(".hide14").click(function(){
    $(".hide14").hide();

  });

        $(".hide15").click(function(){
    $(".hide15").hide();

  });
    

        $(".hide16").click(function(){
    $(".hide16").hide();

  });

        $(".hide16").click(function(){
    $("#show4").show();
  });
    

        $(".hide17").click(function(){
    $(".hide17").hide();

  });
    
        $(".hide18").click(function(){
    $(".hide18").hide();

  });
    
        $(".hide19").click(function(){
    $(".hide19").hide();

  });
    
        $(".hide20").click(function(){
    $(".hide20").hide();

  });
           $(".hide20").click(function(){
    $("#show5").show();
  });
    
        $(".hide21").click(function(){
    $(".hide21").hide();

  });

                 $(".hide21").click(function(){
    $("#show7").show();
  });  
    
        $(".hide22").click(function(){
    $(".hide22").hide();

  });
    
        $(".hide23").click(function(){
    $(".hide23").hide();

  });
    
        $(".hide24").click(function(){
    $(".hide24").hide();

  });
    
        $(".hide25").click(function(){
    $(".hide25").hide();

  });
    
        $(".hide26").click(function(){
    $(".hide26").hide();

  });
    
        $(".hide27").click(function(){
    $(".hide27").hide();

  });
    
        $(".hide28").click(function(){
    $(".hide28").hide();

  });
    
        $(".hide29").click(function(){
    $(".hide29").hide();

  });
    
        $(".hide30").click(function(){
    $(".hide30").hide();

  });
    
        $(".hide31").click(function(){
    $(".hide31").hide();

  });
    
        $(".hide32").click(function(){
    $(".hide32").hide();

  });
    
        $(".hide33").click(function(){
    $(".hide33").hide();

  });
    
        $(".hide34").click(function(){
    $(".hide34").hide();

  });
                $(".hide35").click(function(){
    $(".hide35").hide();

  });
    
            $(".hide36").click(function(){
    $(".hide36").hide();

  });
    
            $(".hide37").click(function(){
    $(".hide37").hide();

  });
    
               $(".hide37").click(function(){
    $("#show6").show();
  });

            $(".hide38").click(function(){
    $(".hide38").hide();

  });
    
            $(".hide39").click(function(){
    $(".hide39").hide();

  });
    
            $(".hide40").click(function(){
    $(".hide40").hide();

  });
    
            $(".hide41").click(function(){
    $(".hide41").hide();

  });
    
            $(".hide42").click(function(){
    $(".hide42").hide();

  });
    
            $(".hide43").click(function(){
    $(".hide43").hide();

  });
    
            $(".hide44").click(function(){
    $(".hide44").hide();

  });
    
            $(".hide45").click(function(){
    $(".hide45").hide();

  });
    
               $(".hide45").click(function(){
    $(".show8").show();
  });

                   $(".hide45").click(function(){
    $(".show9").show();
  });

    

  $('button').click(function() {
    location.reload();
});

