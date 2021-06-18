const express = require("express");

class Router {
  constructor(userService) {
    this.userService = userService;
  }

  router() {
    let router = express.Router();
    router.get("/api/users", this.get.bind(this));
    return router;
  }
  get(request, response) {
    return response.json(this.userService.list());
  }
}

module.exports = Router;
