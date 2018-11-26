const express = require( 'express' );
const router = express.Router();
const pool = require( '../pool' );

router.get( '/', ( req, res )=>{
  console.log('in GET route');
  let queryString = `SELECT * FROM "items" ORDER BY "name" ASC;`;
  pool.query(queryString).then((result) => {
    res.send(result.rows);
  }).catch((err) => {
    res.sendStatus(500);
  });
}); //end GET

router.post( '/', ( req, res )=>{
  console.log('in POST route');
  let item = req.body;
  console.log(item);
  let queryString = `INSERT INTO "items" ("name", "description", "color", "size") VALUES ($1, $2, $3, $4)`;
  pool.query(queryString, [item.name, item.description, item.color, item.size]).then(() => {
    res.sendStatus(201);
  }).catch((err) => {
    res.sendStatus(500);
  })
}); //end GET

module.exports = router;
