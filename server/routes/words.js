const express = require('express');
const router = express.Router();

/**
 * nonpersistent list of words
 */
const words = ['apple', 'banana', 'carrot', 'durian'];

/**
 * endpoint for GET requests
 */
router.get('/', (req, res, next) => {
  try {
    return res.json({ words });
  } catch (err) {
    return next(err);
  }
});

/**
 * endpoint for POST requests
 */
router.post('/', (req, res, next) => {
  try {
    words.push(req.body.word);
    return res.json({ words });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
