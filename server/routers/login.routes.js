const LoginController = require("../controllers/login.contoller");

module.exports = (app) => {
  app.post("/", LoginController.findUser);
  app.post("/api", LoginController.createNewUser);
};
