class Service {
  constructor(users) {
    this.users = users;
  }
  list() {
    return this.users;
  }
}
module.exports = Service;
