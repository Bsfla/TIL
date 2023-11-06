function getObject() {
  return {
    title: document.querySelector(".title"),
    text: document.querySelector(".text"),
    value: document.querySelector(".value"),
  };
}

function getDateTime(targetDate) {
  let month = targetDate.getMonth();
  let day = targetDate.getDate();
  let hour = targetDate.Hours();

  return {
    month: month > 10 ? month : "0" + month,
    day: day > 10 ? day : "0" + day,
    hour: hour > 10 ? hour : "0" + hour,
  };
}

function getDateTime() {
    const currentDateTime = getDateTime(new Date());

}


