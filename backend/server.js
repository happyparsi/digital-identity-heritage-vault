const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const fs = require('fs');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// File uploads setup
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
app.use('/uploads', express.static(uploadsDir));

// Database setup
const db = require("./models");
const isProduction = process.env.NODE_ENV === 'production';

db.sequelize.sync({ force: !isProduction }).then(() => {
  console.log("Database synced");
  initial();
}).catch(err => {
  console.error("Failed to sync database:", err);
});

function initial() {
  console.log('✓ Initial data loaded (if any)');
}

// Routes
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

require("./routes/auth.routes")(app);
require("./routes/content.routes")(app);
require("./routes/family.routes")(app);

app.get("/", (req, res) => {
  res.json({ 
    status: "running",
    database: db.sequelize.config.database,
    tables: Object.keys(db.sequelize.models)
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`
  Server running on port ${PORT}
  Database: ${db.sequelize.config.database}
  Models: ${Object.keys(db.sequelize.models).join(', ')}
  `);
});