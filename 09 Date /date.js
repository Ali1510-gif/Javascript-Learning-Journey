const now = new Date();
console.log("current time now:", now);
console.log("String representation:", now.toString());

console.log("ISO String:", now.toISOString());
console.log("Locale String:", now.toLocaleString());

console.log("Year:", now.getFullYear());
console.log("Month:", now.getMonth());
console.log("Date:", now.getDate());
console.log("Day:", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Time:", now.getTime());
console.log("Timezone Offset:", now.getTimezoneOffset());

// customized date

const customDate = new Date(2002, 9, 15, 10, 30, 0); // October 15, 2002, 10:30:00
console.log("Custom Date:", customDate);
