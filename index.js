const express = require("express");
const app = express();
const path = require("path");
/*const http = require("http");
const fs = require("fs");*/

const PORT = 8080;


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.get("/:page", (req, res) => {
  if (req.params.page === "about"){
    res.sendFile(path.join(__dirname, "dist", "about.html"));
  } else if(req.params.page === "contact-me") {
    res.sendFile(path.join(__dirname, "dist", "contact-me.html"));
  } else {
    res.sendFile(path.join(__dirname, "dist", "404.html")) 
  }
});


/*app.use(express.static(path.join(__dirname, "dist")));*/

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

/*http
  .createServer((req, res) => {
    //opens homepage if the path is '/'
    if (req.url === "/") {
      fs.readFile("./index.html", function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 Not Found");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (req.url === "/about") {
      //opens 'about' page if the path is '/about'
      fs.readFile("./about.html", function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 Not Found");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else if (req.url === "/contact-me") {
      //opens 'contact-me'page if path is '/contact-me'
      fs.readFile("./contact-me.html", function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 Not Found");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    } else {
      // else opens 404 error page
      fs.readFile("./404.html", function (err, data) {
        if (err) {
          res.writeHead(404, { "Content-Type": "text/html" });
          return res.end("404 Not Found");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
      });
    }
  })
  .listen(8080);*/
