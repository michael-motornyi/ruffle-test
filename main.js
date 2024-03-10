import './style.css'
import binaryFileUrl from "./public/test.swf?url";
import binaryFileStringContents from "./public/test.swf?raw";

window.addEventListener("load", (event) => {
  const ruffle = RufflePlayer.newest();
  const player = ruffle.createPlayer();
  console.log(binaryFileStringContents);
  const container = document.getElementById("container");
  container.appendChild(player);

  fetch(binaryFileUrl).then((data) => player.load(data))

});
