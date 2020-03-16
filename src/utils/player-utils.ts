const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

export function formatTime(seconds: number): string {

  let roundedSeconds = Math.floor(seconds);

  const hours = Math.floor(roundedSeconds / SECONDS_PER_HOUR);
  roundedSeconds -= hours * SECONDS_PER_HOUR;
  const minutes = Math.floor(roundedSeconds / SECONDS_PER_MIN);
  roundedSeconds -= minutes * SECONDS_PER_MIN;

  return `${hours}:${minutes.toString().padStart(2, `0`)}:${roundedSeconds.toString().padStart(2, `0`)}`;
}
