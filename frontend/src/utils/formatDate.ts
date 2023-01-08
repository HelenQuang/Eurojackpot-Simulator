const formatDate = (inputDate: Date) => {
  const f = new Intl.DateTimeFormat("en", {
    dateStyle: "full",
    timeStyle: "medium",
  });

  return f.format(new Date(inputDate));
};

export default formatDate;
