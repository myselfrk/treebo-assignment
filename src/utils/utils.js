export function isValidNumber(str) {
  const num = parseFloat(str);

  if (!isNaN(num)) {
    return true;
  } else {
    return false;
  }
}
