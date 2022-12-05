// Import the Moment.js library
const moment = require('moment');

// Get the current date and time
const now = moment();

// Format the date and time in a human-readable string
const dateTimeString = now.format('dddd, MMMM Do YYYY, h:mm:ss a');

// Print the date and time to the console
console.log(dateTimeString);