// https://developers.google.com/youtube/iframe_api_reference

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  
  // bind events
  var playButton = document.getElementsByClassName("play-video");
  playButton.addEventListener("click", function() {
    player.playVideo();
    $("#popup-container-about").toggleClass("hide");
  });
  
  var pauseButton = document.getElementsByClassName("popup-container");
  pauseButton.addEventListener("click", function() {
    player.pauseVideo();
    $("#popup-container-about").toggleClass("hide");
    $('html').toggleClass("no-scroll");
  });
  
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
