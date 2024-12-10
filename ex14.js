function startTimer() {
  let seconds = 0;

  const timer = setInterval(() => {
    console.log(`${seconds}s`);
    seconds++;

    if (seconds > 10) {
      clearInterval(timer);
      console.log("Temps écoulé!");
    }
  }, 1000);
}
startTimer();
