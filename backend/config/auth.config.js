module.exports = {
  secret: process.env.JWT_SECRET || "local_dev_secret",
  jwtExpiration: 86400 // 24 hours
};
