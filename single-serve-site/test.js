//Corresponding blog post: https://danielcwilson.com/blog/2015/08/animations-part-3 

var a = document.querySelectorAll('div');
a = Array.prototype.slice.call(a);

a.forEach(function(el, i, ra) {
  var to = {
    x: Math.random() * (i % 2 === 0 ?-11 : 11),
    y: Math.random() * 12
  }


  el.animate([
    { transform: 'translate(0,0)' },
    { transform: 'translate('+to.x+'rem,'+to.y+'rem)' }
  ], {
    duration: (Math.random() + 1) * 2000,
    direction: 'alternate',
    fill: 'both',
    iterations: Infinity,
    easing: 'ease-in-out'
  });
});

var button = document.querySelector('input');

button.addEventListener('click', function(e) {
  //Get all the AnimationPlayers
  var players;
  if (typeof document.getAnimations === 'function') {
    players = document.getAnimations();
  } else {
    players = document.timeline.getAnimations();
  }
  if (players && players.length) {
    console.log(players);
    var action;
    if (players[0].playState === 'running') {
      action = 'pause';
    } else if (players[0].playState === 'paused') {
      action = 'play';
    } else {
      return;
    }
    players.forEach(function(player, i, ra) {
      player[action](); //player.pause() or player.play()
      
    });

    button.value = (action === 'play') ? 'Pause All' : 'Play All';
  } else {
    console.log('No active animations');
  }
});