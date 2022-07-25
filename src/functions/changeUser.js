/**
 *
 * @param { string } userID
 * @param { function } setUserID from the useState hook
 * @returns switch between user 12 and 18
 */
function changeUser(userID, setUserID) {
  const svg = document.getElementById('change-user').querySelector('svg');

  // add animation
  svg.style.animation = 'rotate 1s';

  // change user
  userID === '12' ? setUserID('18') : setUserID('12');

  // reset animation
  setTimeout(() => {
    svg.style.animation = '';
  }, 1000);
}

export default changeUser;
