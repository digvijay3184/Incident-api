// db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS incidents (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      severity TEXT NOT NULL CHECK(severity IN ('Low', 'Medium', 'High')),
      reported_at TEXT NOT NULL
    )
  `);
});

module.exports = db;
