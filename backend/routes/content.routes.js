const { verifyToken } = require("../middlewares/auth.middleware");
const { createContent, getAllContent, getContentById } = require("../controllers/content.controller");
const upload = require("../middlewares/upload.middleware");

module.exports = function(app) {
  app.post("/api/content", [verifyToken, upload.single('media')], createContent);
  app.get("/api/content", verifyToken, getAllContent);
  app.get("/api/content/:id", verifyToken, getContentById);
};