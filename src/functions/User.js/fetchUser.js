function fetchUser(setUser, id) {
  fetch(`http://localhost:3000/user/${id}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      setUser(json.data.userInfos);
    })
    .catch((error) => {
      console.log('Error with fetch user =>', error);
      setUser(undefined);
    });
}

export default fetchUser;
