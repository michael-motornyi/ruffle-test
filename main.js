import './style.css'
import binaryFileUrl from "./public/test.swf?url";

window.addEventListener("load", (event) => {
  const ruffle = RufflePlayer.newest();
  const player = ruffle.createPlayer();
  const container = document.getElementById("container");
  container.appendChild(player);

  fetch(binaryFileUrl).then((data) => player.load(data))
});
