/** simple server built in Express runs on port 3001 */

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const stringsRoutes = require('./routes/strings');
app.use(express.json()); 
app.use('/api/strings', stringsRoutes);

/** general error handler */

app.use((err, req, res, next) => {
  res.status(err.status || 500);

  return res.json({
    status: err.status,
    message: err.message,
  });
});

/** Start server on port 3001 */

app.listen(3001, function() {
  console.log('Server started on port 3001.');
});