export const DateChange = (date) => {
  const New = new Date(date);
  const Year = New.getFullYear();
  const month = New.getMonth() + 1;
  const day = New.getDate();
  const hour = New.getHours();
  const min = New.getMinutes();
  const sec = New.getSeconds();
  const result =
    Year + "년" + " " + month + "월 " + " " + day + "일 " + " " + hour + "시 ";
  /*
      " " +
      min +
      "분 " +
      " " +
      sec +
      "초 ";
      */
  return result;
};
