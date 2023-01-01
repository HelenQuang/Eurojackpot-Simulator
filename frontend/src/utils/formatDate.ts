const formatDate = (inputDate: Date) => {
  let year: number = new Date(inputDate).getFullYear();
  let month: number | string = new Date(inputDate).getMonth() + 1;
  let date: number | string = new Date(inputDate).getDate();

  if (date < 10) {
    date = "0" + date;
  }

  if (month < 10) {
    month = "0" + month;
  }

  return `${date}.${month}.${year}`;
};

export default formatDate;
