const pg = require('pg');

// DB CONNECTION
const Pool = pg.Pool;
const pool = new Pool({
  database: 'week-3-review',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
});

// when contects to db
pool.on('connect', () => {
  console.log('connected to DB');
});

// on error
pool.on('error', (error) => {
  console.log('Error connecting to DB', error);
});

module.exports = pool;
