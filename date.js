const today = new Date();

// ISO date
console.log(today);
// UTC date
console.log(today.toUTCString());
// timestamp
console.log(today.getTime());
console.log(today.getTimezoneOffset());

const withoutTimezone = today - today.getTimezoneOffset() * 60000;
console.log(new Date(withoutTimezone));
