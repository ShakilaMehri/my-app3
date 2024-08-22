const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8000;

// Endpoint to get all items
app.get('/items', (req, res) => {
  const filePath = path.join(__dirname, 'items.json');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('File read error:', err);
      return res.status(500).json({ message: 'Error reading items.json file' });
    }
    
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (jsonErr) {
      console.error('JSON parse error:', jsonErr);
      res.status(500).json({ message: 'Error parsing JSON', error: jsonErr.message });
    }
  });
});

// Endpoint to get a specific item by ID
app.get('/items/:id', (req, res) => {
  const filePath = path.join(__dirname, 'items.json');
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('File read error:', err);
      return res.status(500).json({ message: 'Error reading items.json file' });
    }
    
    try {
      const jsonData = JSON.parse(data);
      const item = jsonData.items.find(i => i.id === parseInt(req.params.id, 10));
      
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({ message: 'Item not found' });
      }
    } catch (jsonErr) {
      console.error('JSON parse error:', jsonErr);
      res.status(500).json({ message: 'Error parsing JSON', error: jsonErr.message });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
