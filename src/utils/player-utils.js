export function getTime(seconds) {

  let secondsValue = Math.floor(seconds);

  const hours = Math.floor(secondsValue / 3600);
  secondsValue -= hours * 3600;
  const minutes = Math.floor(secondsValue / 60);

  return `${hours}:${addLeadingSign(minutes)}:${addLeadingSign(secondsValue)}`;
}

function addLeadingSign(value, sign = `0`, length = 2) {

  let result = value.toString();

  while (result.length < length) {
    result = sign + result;
  }
  return result;
}
