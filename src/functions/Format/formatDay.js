/**
 *
 * @param { Number } day on range 1-7
 * @returns { String } 'L' for 1 | 'M' for 2 | ...
 */
function formatDay(day) {
  switch (day) {
    case 1:
      return 'L';
    case 2:
      return 'M';
    case 3:
      return 'M';
    case 4:
      return 'J';
    case 5:
      return 'V';
    case 6:
      return 'S';
    case 7:
      return 'D';
    default:
      console.log('Day is out of range => ', day);
      return '?';
  }
}

export default formatDay;
