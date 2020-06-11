import game from "./gameState";
import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

function tick() {
  console.log("tick", Date.now());
}

async function init() {
  console.log("starting game");
  initButtons(game.handleUserAction);

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const NOW = Date.now();

    if (nextTimeToTick <= NOW) {
      game.tick();
      nextTimeToTick = NOW + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);
}

init();
