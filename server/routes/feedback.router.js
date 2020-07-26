const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.post('/', (req, res) => {
  let newFeedback = req.body;
  console.log(`Adding feedback`, newFeedback);

  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "flagged")
                   VALUES ($1, $2, $3, $4, $5);`;
  pool
    .query(queryText, [
      newFeedback.feeling,
      newFeedback.understanding,
      newFeedback.support,
      newFeedback.comments,
      newFeedback.flagged,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error adding feedback to database`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
