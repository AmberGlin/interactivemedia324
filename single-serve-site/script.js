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
    
    var speedModifier = .5;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}

$(document).ready(function(){
    $('.taco').each((i, item) => {
        animateDiv(item);
    });
});