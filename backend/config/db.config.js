module.exports = {
    HOST: process.env.DB_HOST || "localhost",
    USER: process.env.DB_USER || "dihv_user",
    PASSWORD: process.env.DB_PASSWORD || "securepassword",
    DB: process.env.DB_NAME || "dihv",
    dialect: "postgres",
    port: process.env.DB_PORT || 5432,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };