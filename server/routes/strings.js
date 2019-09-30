const express = require('express');
const router = express.Router();

/**
 * nonpersistent list of strings
 */
const strings = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
  .split(' ')
  .map(string => ({ id: Date.now() + Math.random(), string }));

strings.unshift({
  id: Date.now() + Math.random(),
  string: `Hover over this long string to scroll  ......................................................... ....................................... ...............................`,
});

/**
 * endpoint for GET requests
 */
router.get('/', (req, res, next) => {
  try {
    return res.json({ strings });
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
    const { id, string } = req.body;
    strings.unshift({ id, string });
    return res.json({ strings });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;