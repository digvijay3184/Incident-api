## Used Technologies

```
Framework: Express.js  
Database: SQLite  
```

## Clone the Repository

```bash
git clone https://github.com/digvijay3184/incident-api.git
cd incident-api
```

## Setup Guide

```bash
npm install          # Install dependencies
node seed.js         # Create the database and insert 2 sample records
node server.js       # Start the API server on http://localhost:3000
```

## API Endpoints

### GET /incidents
Returns all incidents.

### GET /incidents/:id  
Returns a single incident by ID.

### POST /incidents  
Logs a new incident.  
**Request Body (JSON):**
```json
{
  "title": "Sample Incident",
  "description": "This is a detailed description.",
  "severity": "High"
}
```

### DELETE /incidents/:id  
Deletes an incident by ID.

## Screenshots

### POST Incident
![Incident API Post Screenshot](incident-api-post.png)

### GET All Incidents
![Incident API GET ALL Data Screenshot](incident-api-get-all.png)

### GET Incident by ID
![Incident API GET BY ID Screenshot](incident-api-get-by-id.png)

### DELETE Incident
![Incident API Delete Screenshot](incident-api-delete.png)
