let player = document.getElementById('sushi2-video');
  const playerSplash = document.querySelector(".sushi-style__play-wrapper");
  player.volume = "0.005";
  playerSplash.addEventListener("click", function() {
    playerSplash.style.display = "none";
    player.style.opacity = "1";
    player.play();
  });
  player.addEventListener("ended", function() {
    playerSplash.style.display = "block";
    player.style.opacity = "0";

  });

  let playerMain = document.getElementById('sushi-video');

  window.onload = function() {
    playerMain.play();
  // // const playerSplash = document.querySelector(".sushi-style__play-wrapper");
  // // player.volume = "0.005";
  // playerSplash.addEventListener("click", function() {
  //   playerSplash.style.display = "none";
  //   player.style.opacity = "1";
  //   player.play();
  // });
  // player.addEventListener("ended", function() {
  //   playerSplash.style.display = "block";
  //   player.style.opacity = "0";

  // });
 };