import gameState from "./gameState";

const TICK_RATE = 1000;

function tick() {
  console.log("tick", Date.now());
}

async function init() {
  console.log("starting game");

  let nextTimeToTick = Date.now();

  function nextAnimationFrame() {
    const NOW = Date.now();

    if (nextTimeToTick <= NOW) {
      gameState.tick();
      nextTimeToTick = NOW + TICK_RATE;
    }

    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);
}

init();
