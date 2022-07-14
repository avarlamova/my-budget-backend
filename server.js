const http = require("http");
const path = require("path");
const fs = require("fs"); // file system
const fsPath = require("fs").promises;

const logEvents = require("./logEvents");
const EventEmitter = require("events");

class Emitter extends EventEmitter {}

// initialize object
const myEmitter = new Emitter();

const PORT = process.env.PORT || 3000;

const server = http.createServer((request, response) => {
  console.log(request.url, request.method);

  const extenstion = path.extname(request.url);
  let contentType;

  switch (extenstion) {
    case ".css":
      contentType = "text/css";
      break;

    case ".js":
      contentType = "text/javascript";
  }
  // inefficent approach
  // let path;

  // switch (request.url) {
  //   case "/":
  //     response.statusCode = 200;
  //     path = path.join(__dirname, "views", "index.html");
  //     fs.readFile(path, "utf8", (err, data) => {
  //       response.end(data);
  //     });
  //     break;
  // }
});
// d
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// myEmitter.on("log", (msg) => logEvents(msg));

// setTimeout(() => {
//   myEmitter.emit("log", "Log event emitted");
// }, 2000);
