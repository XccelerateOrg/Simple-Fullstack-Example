const express = require("express");
const bodyParser = require("body-parser");
const Service = require("./service");
const Router = require("./router");
const users = require("./users");

const cors = require("cors");

const app = express();

let serviceClass = new Service(users);

let routerClass = new Router(serviceClass);
app.use(bodyParser.json());

app.use(cors());

app.use("/", routerClass.router());

app.get("/", (request, response) => {
  response.send("hello");
  // this.userService.list().then((users) => {
  //  response.render("users", {users})
  //  })
});

app.listen(3001, () => {
  console.log("app listening on port 3001");
});
