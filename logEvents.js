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
const { v4: uuid } = require("uuid");

const logEvents = async (message) => {
  const datetime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss.SSS")}`;
  const logItem = `${datetime}\t${uuid()}\t${message}\n`;
  // console.log(logItem);

  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventlog.txt"),
      logItem
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = logEvents;
