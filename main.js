import './style.css'

window.addEventListener("load", (event) => {
  const imgUrl = new URL("./test.swf", import.meta.url).href;
  const ruffle = RufflePlayer.newest();
  const player = ruffle.createPlayer();
  const container = document.getElementById("container");
  container.appendChild(player);
  console.log(imgUrl);
  player.load(imgUrl);
});
