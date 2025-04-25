const express = require('express');
const db = require('./db');
const app = express();
app.use(express.json());

const PORT = 3000;

// GET all incidents
app.get('/incidents', (req, res) => {
  db.all('SELECT * FROM incidents', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(rows);
  });
});

// POST a new incident
app.post('/incidents', (req, res) => {
  const { title, description, severity } = req.body;
  const validSeverities = ['Low', 'Medium', 'High'];

  if (!title || !description || !validSeverities.includes(severity)) {
    return res.status(400).json({ error: 'Missing or invalid fields.' });
  }

  const reported_at = new Date().toISOString();
  const sql = `INSERT INTO incidents (title, description, severity, reported_at) VALUES (?, ?, ?, ?)`;

  db.run(sql, [title, description, severity, reported_at], function (err) {
    if (err) return res.status(500).json({ error: err.message });

    res.status(201).json({
      id: this.lastID,
      title,
      description,
      severity,
      reported_at,
    });
  });
});

// GET a specific incident
app.get('/incidents/:id', (req, res) => {
  const id = req.params.id;
  db.get('SELECT * FROM incidents WHERE id = ?', [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Incident not found.' });
    res.status(200).json(row);
  });
});

// DELETE an incident
app.delete('/incidents/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM incidents WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Incident not found.' });

    res.status(200).json({ message: `Incident ${id} deleted.` });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
