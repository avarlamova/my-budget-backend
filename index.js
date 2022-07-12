const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

// fs.readFile("./files/first.txt", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data.toString());
// });

const { format } = require("date-fns");

const logEvents = async (message) => {
  const datetime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss.SSS")}`;
  const logItem = ``;
};
