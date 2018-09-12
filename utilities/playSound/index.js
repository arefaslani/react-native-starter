import Expo from "expo";
import likeSound from "assets/sounds/like.m4a";
import dislikeSound from "assets/sounds/dislike.m4a";
import TabChangeSound from "assets/sounds/tab.m4a";

let like = null;
let dislike = null;
let tab = null;

(async function loadSounds() {
  like = new Expo.Audio.Sound();
  await like.loadAsync(likeSound);
  dislike = new Expo.Audio.Sound();
  await dislike.loadAsync(dislikeSound);
  tab = new Expo.Audio.Sound();
  await tab.loadAsync(TabChangeSound);
})();

export default name => {
  switch (name) {
    case "like":
      like.replayAsync().catch(e => console.log(e));
      break;
    case "dislike":
      dislike.replayAsync().catch(e => console.log(e));
      break;
    case "tab":
      tab.replayAsync().catch(e => console.log(e));
      break;
    default:
      break;
  }
};
