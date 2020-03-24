const EarthTimeConfig = {
  SECONDS_PER_HOUR: 3600,
  SECONDS_PER_MINUTE: 60,
};

export function formatTime(seconds: number): string {

  let roundedSeconds = Math.floor(seconds);

  const hours = Math.floor(roundedSeconds / EarthTimeConfig.SECONDS_PER_HOUR);
  roundedSeconds -= hours * EarthTimeConfig.SECONDS_PER_HOUR;
  const minutes = Math.floor(roundedSeconds / EarthTimeConfig.SECONDS_PER_MINUTE);
  roundedSeconds -= minutes * EarthTimeConfig.SECONDS_PER_MINUTE;

  return `${hours}:${minutes.toString().padStart(2, `0`)}:${roundedSeconds.toString().padStart(2, `0`)}`;
}
