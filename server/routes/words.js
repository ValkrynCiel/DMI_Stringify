const express = require('express');
const router = express.Router();

/**
 * nonpersistent list of words
 */
const words = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'.split(
  ' ',
);

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
    // prepends word to array
    words.unshift(req.body.word);
    return res.json({ words });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
