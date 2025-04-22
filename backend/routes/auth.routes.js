const { signup, signin } = require("../controllers/auth.controller");

module.exports = function(app) {
  app.post("/api/auth/signup", signup);
  app.post("/api/auth/signin", signin);
};