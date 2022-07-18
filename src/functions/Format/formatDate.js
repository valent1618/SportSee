function formatDate(date) {
  date = date.slice(5);

  let newDate = date.split('-')[1] + '-' + date.split('-')[0];

  return newDate;
}

export default formatDate;
