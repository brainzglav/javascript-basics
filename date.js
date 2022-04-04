const today = new Date();
/* 
// ISO date
console.log(today);
// UTC date
console.log(today.toUTCString());
// timestamp
console.log(today.getTime());
console.log(today.getTimezoneOffset());

const withoutTimezone = today - today.getTimezoneOffset() * 60000;
console.log(new Date(withoutTimezone)); 
*/

//Ispisi mi vrime u ovakvom obliku April, 04 18:15:50 2022

const EMonthName = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
};

today.getFullYear();

function formatNumber(num) {
  return num < 10 ? `0${num}` : num;
}

function formatDate(date) {
  const month = EMonthName[date.getMonth()];
  const day = formatNumber(date.getUTCDate());
  const hour = formatNumber(date.getHours());
  const minutes = formatNumber(date.getMinutes());
  const seconds = formatNumber(date.getSeconds());
  const year = date.getFullYear();

  return `${month}, ${day} ${hour}:${minutes}:${seconds} ${year}`;
}

const formattedDate = formatDate(today);

console.log(formattedDate);
