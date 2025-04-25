const db = require('./db');

// Sample data to seed the database
const sampleIncidents = [
  {
    title: 'Unexpected Chatbot Output',
    description: 'The AI chatbot generated offensive content.',
    severity: 'High',
    reported_at: new Date('2025-04-01T12:00:00Z').toISOString(),
  },
  {
    title: 'Navigation Failure',
    description: 'AI navigation system failed to detect obstacles.',
    severity: 'Medium',
    reported_at: new Date('2025-04-02T14:00:00Z').toISOString(),
  },
  {
    title: 'AI Performance Degraded',
    description: 'System performance dropped under specific conditions.',
    severity: 'Low',
    reported_at: new Date('2025-04-03T10:30:00Z').toISOString(),
  }
];

// Inserting sample data into the incidents table
sampleIncidents.forEach((incident) => {
  db.run(
    `INSERT INTO incidents (title, description, severity, reported_at) VALUES (?, ?, ?, ?)`,
    [incident.title, incident.description, incident.severity, incident.reported_at],
    function (err) {
      if (err) console.error(err.message);
      else console.log(`Inserted incident with ID ${this.lastID}`);
    }
  );
});
