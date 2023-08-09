const displayMinute = (seconds: number) => {
  const fullMinutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const displayedSeconds =
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
  return `${fullMinutes}:${displayedSeconds}`;
};

export default displayMinute;
