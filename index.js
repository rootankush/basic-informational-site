// const aboutURL = new URL('/about', 'http://localhost:8080/');
// const contactMeURL = new URL('/contact-me', 'http://localhost:8080/');
// const errorURL = new URL('/404', 'http://localhost:8080/');

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req);

  res.setHeader("Content-Type", "text/html");

  let path = "./";
  switch (req.url) {
    case "/":
      path += "index.html";
      break;
    case "/about":
      path += "about.html";
      break;
    case "/contact-me":
      path += "contact-me.html";
      break;
    default:
      path += "404.html";
      break;
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(8080, "localhost", () => {
  console.log("listening for request on port 8080");
});
