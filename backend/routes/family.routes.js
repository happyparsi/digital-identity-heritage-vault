const { verifyToken } = require("../middlewares/auth.middleware");
const { createFamilyMember, getFamilyTree } = require("../controllers/family.controller");

module.exports = function(app) {
  app.post("/api/family", verifyToken, createFamilyMember);
  app.get("/api/family/tree", verifyToken, getFamilyTree);
};