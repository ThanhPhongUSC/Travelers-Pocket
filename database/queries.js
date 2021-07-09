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
const getAllJokes = (callback) => {
  pool.query('select * from jokes order by random() limit 10', (err, results) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results)
    }
  })
}
module.exports = {insertJoke, getAllJokes};