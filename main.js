import './style.css'

window.addEventListener("load", (event) => {
  const ruffle = RufflePlayer.newest();
  const player = ruffle.createPlayer();
  const container = document.getElementById("container");
  container.appendChild(player);
  player.load("./test.swf");
});
