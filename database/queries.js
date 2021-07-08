const { Pool } = require('pg');
const { config } = require('./config.js');

const pool = new Pool(config);

pool.connect((err) => {
  console.log('connecting to postgreSQL');
});

const insertJoke = (joke) => {
  pool.query('Insert into jokes (joke) values ($1)', [joke], (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  })
}

module.exports = {insertJoke};